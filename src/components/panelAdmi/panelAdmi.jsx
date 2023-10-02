import React, { useEffect } from "react";
import { getService } from "../../services/getServices";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { addNewService } from "../../services/addNewService";
import { deleteServiceField } from "../../services/deleteServiceFild";
import { editServiceField } from "../../services/editServicesFild";
import logoSarahy from "./logoNegro.png";
import "./panelAdmi.scss";
import Swal from "sweetalert2";

const PanelAdmi = () => {
  const [serviceData, setServiceData] = useState([]);
  const [newService, setNewService] = useState(false);
  const [editService, setEditService] = useState(false);
  const [btnIndex, setBtnIndex] = useState("");
  const [selectedService, setSelectedService] = useState('');
  const [filteredServices, setFilteredServices] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getDataServices = async () => {
    const serviceId = "photography";
    const service = await getService(serviceId);

    setServiceData(Object.values(service));
    return service;
  };
  
  useEffect(() => {
    getDataServices();
  }, []);

  const newDataServices = () => {
    setNewService(!newService);
  };

  const onSubmit = (data) => {
    const newService = {
      typeService: data.typeService, 
      name: data.name,
      description: data.description,
      price: data.price,
      image: data.image,
      key: data.name,
    };
    createNewService("photography", newService);
    Swal.fire({
      icon: 'success',
      title: 'Servicio agregado exitosamente',
      showConfirmButton: false,
      timer: 1500
    })

  };

  const createNewService = async (serviceId, newService) => {
    const serviceNew = await addNewService(serviceId, newService);
    return serviceNew;
  };

  const deleteServices = async (serviceName) => {
    const deleteService = await deleteServiceField("photography", serviceName);
    return deleteService;
  };

  const openEditService = () => {
    setEditService(!editService);
  };


  const onSubmitEdit = (data) => {
    const editService = {
      typeService: data.typeService, 
      name: data.name,
      description: data.description,
      price: data.price,
      image: data.image,
      key: btnIndex, 
    };
    editServices("photography", btnIndex, editService);
    Swal.fire({
      icon: 'success',
      title: 'Servicio editado exitosamente',
      showConfirmButton: false,
      timer: 1500
    })
  };

  const editServices = async (serviceId, fieldPath, newValue) => {
    const editService = await editServiceField(serviceId, fieldPath, newValue);
    return editService;
  };

  const handleSelectService = (event) => {
    const selectService = event.target.value; 
    setSelectedService(selectService);
  }

  const filterServicesByType = (type) => {
    const filtered = serviceData.filter((service) => service.typeService === type);
    setFilteredServices(filtered);
  };

  useEffect(() => {
    filterServicesByType(selectedService);
  }, [selectedService]);



  return (
    <> 
    <div className="header__admi">

    </div>
    <section className="section__panelAdmi">
      <div className="logo__title">
        <figure className="fig">
          <img className="img" src={logoSarahy} alt="" />
        </figure>
        <h2 className="title dark:text-neutral-200">Administra tus servicios</h2>
      </div>

      <div className="form__selectService">
      <span className="span dark:text-neutral-200">Selecciona que tipo de servicio quieres ver</span>
      <form onChange={handleSelectService} className="form">
              <label>
                <select
                className="select"
                  name="selectService"
                  placeholder=""
                  {...register("selectService")}
                >
                  <option value="">Seleccionar servicio</option>
                  <option value="catering">Catering</option>
                  <option value="decoracion">Decoración</option>
                  <option value="fotografia">Fotografia</option>
                  <option value="animacion">Animación</option>
                  <option value="iluminacion">Iluminación</option>
                  <option value="musica">Música y Djs</option>
                </select>
              </label>
          
            {/* <button type="submit">Agregar servicio</button> */}
          </form>
          {!newService && (
          <button className="btn__create" onClick={newDataServices}>
            Agregar servicio
          </button>
        )}
      </div>
{/* 
      <div className="create__service">
       
      </div> */}

      {filteredServices.length ===0 ? (
        <div className="div__findServices">
           <figure className="fig">
          <img className="img" src={logoSarahy} alt="" />
        </figure>
          <span className="span">Busca tus servicios</span>
        </div>
      ) : ( 
      <div className="table__services">
      <div className="titles__table">
        <span className="span">Servicio</span>
        <span className="span">Descripción</span>
        <span className="span">Precio</span>
      </div>

      {filteredServices.map((objeto, index) => (
        <div key={index} className="data__table">
          <p className="span__title-service">{objeto.name}</p>
          <p className="span__des">{objeto.description}</p>
          <p className="span">${objeto.price}</p>
          <button
            onClick={() => {
              openEditService();
              setBtnIndex(objeto.key);
            }}
            className="btn__listService"
          >
            <span className="material-symbols-outlined">edit</span>
          </button>

          <button
            onClick={() => deleteServices(objeto.key)}
  
            className="btn__listService"
          >
            <span className="material-symbols-outlined">delete</span>
          </button>
        </div>
      ))}
    </div>
)
}

      
        {newService && (
          <div className="modal__newService">
            <button className="btn__closeModal" onClick={newDataServices}>
            <span className="material-symbols-outlined">
close
</span>
            </button>
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            
              <label className="label">
                <span>Seleccione el tipo de servicio</span>
                <select
                className="select__modal"
                  name="typeService"
                  placeholder=""
                  {...register("typeService")}// Establecer el valor seleccionado en el estado
                >
                  <option value="">Seleccionar servicio</option>
                  <option value="catering">Catering</option>
                  <option value="decoracion">Decoración</option>
                  <option value="fotografia">Fotografia</option>
                  <option value="animacion">Animación</option>
                  <option value="iluminacion">Iluminación</option>
                  <option value="musica">Música y Djs</option>
                </select>
              </label>
            
              <label className="label">
                <span>Nombre del servicio</span>
                <input
                className="input__modal"
                  name="name"
                  type="text"
                  placeholder=""
                  {...register("name", { required: true })}
                />
              </label>
          
              <label className="label">
                <span>Descripción del servicio</span>
                <input
                className="input__modal"
                  name="description"
                  type="text"
                  placeholder=""
                  {...register("description", { required: true })}
                />
              </label>
           
          
              <label className="label">
                <span>Precio del servicio</span>
                <input
                className="input__modal"
                  name="price"
                  type="number"
                  placeholder=""
                  {...register("price", { required: true })}
                />
              </label>
          
              <label className="label">
                <span>URL Imagen (opcional)</span>
                <input
                className="input__modal"
                  name="image"
                  type="url"
                  placeholder=""
                  {...register("image")}
                />
              </label>
          
            <button className="btn__modal" type="submit">Agregar servicio</button>
          </form>
          </div>
        )}
   

      
        {editService && (
          <div className="modal__editService">
            <button className="btn__closeModal" onClick={openEditService}>
            <span className="material-symbols-outlined">
close
</span>
            </button>
          <form onSubmit={handleSubmit(onSubmitEdit)} className="form">
          <label className="label">
                <span>Seleccione el tipo de servicio</span>
                <select
                className="select__modal"
                  name="typeService"
                  placeholder=""
                  {...register("typeService")}// Establecer el valor seleccionado en el estado
                >
                  <option value="">Seleccionar servicio</option>
                  <option value="catering">Catering</option>
                  <option value="decoracion">Decoración</option>
                  <option value="fotografia">Fotografia</option>
                  <option value="animacion">Animación</option>
                  <option value="iluminacion">Iluminación</option>
                  <option value="musica">Música y Djs</option>
                </select>
              </label>
             <label className="label">
                <span>Nombre del servicio</span>
                <input
                className="input__modal"
                  name="name"
                  type="text"
                  placeholder=""
                  {...register("name", { required: true })}
                />
              </label>
          
              <label className="label">
                <span>Descripción del servicio</span>
                <input
                className="input__modal"
                  name="description"
                  type="text"
                  placeholder=""
                  {...register("description", { required: true })}
                />
              </label>
           
          
              <label className="label">
                <span>Precio del servicio</span>
                <input
                className="input__modal"
                  name="price"
                  type="number"
                  placeholder=""
                  {...register("price", { required: true })}
                />
              </label>
          
              <label className="label">
                <span>URL Imagen (opcional)</span>
                <input
                className="input__modal"
                  name="image"
                  type="url"
                  placeholder=""
                  {...register("image")}
                />
              </label>
          
            <button className="btn__modal" type="submit">Editar servicio</button>
          </form>
          </div>
        )}
    
    </section>
    </>
  );
};

export default PanelAdmi;
