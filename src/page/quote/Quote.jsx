import React, { useEffect, useState } from "react";
// import { isWeekend } from "date-fns";
import "./quote.scss";
import { useForm, Controller } from "react-hook-form";
import { addNewQuote } from "../../services/addNewQuote";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useNavigate } from "react-router-dom";
import { updateQuoteData } from "../../redux/store/auth/authReducer";
import { useDispatch } from "react-redux";
import { getService } from "../../services/getServices";

const Quote = () => {
  const [arregloGlobal, setArregloGlobal] = useState([]);
    const [newTotal, setNewTotal] = useState(0);
    const [ourServices, setOurServices] = useState({});
    const [as, setAs] = useState(0);
    const [serviceCatering, setServiceCatering] = useState([]);
    const [serviceDecor, setServiceDecor] = useState([]);
    const [serviceFoto, setServiceFoto] = useState([]);
    const [serviceAnimation, setServiceAnimation] = useState([]);
    const [serviceIlumination, setServiceIlumination] = useState([]);
    const [serviceMusic, setServiceMusic] = useState([]);
    const [quoterCatering, setQuoteCatering] = useState([]);
    const [quoterDecor, setQuotDecor] = useState([]);
    const [quoterfoto, setQuoteFoto] = useState([]);
    const [quoterIlumination, setQuoteIlumination] = useState([]);
    const [quoterAnimation, setQuoteAnimation] = useState([]);
    const [quoterMusic, setQuoteMusic] = useState([]);

    const hendleService = async () => 
    {
        setOurServices(await getService('photography'));
        // Llamamos a la función clasificarServicios después de obtener el objeto ourServices
    }
    
    useEffect(() => 
    {
        hendleService();
    }, [])
    
    // Creamos una función que recibe el objeto ourServices y los valores de los estados que queremos actualizar como parámetros
    const clasificarServicios = (servicios) => {
        // Inicializamos nuevos arrays para cada tipo de servicio
        let cateringArray = [];
        let decoracionArray = [];
        let musicaArray = [];
        let fotografiaArray = [];
        let iluminacionArray = [];
        let animacionArray = [];
      
        // Recorremos el objeto servicios con un bucle for...in
        for (let key in servicios) {
          // Accedemos al tipo de servicio de cada subobjeto
          let tipo = servicios[key].typeService;
          // Usamos un switch case para comparar el tipo de servicio con los posibles valores
          switch (tipo) {
            case "catering":
              cateringArray.push({ ...servicios[key] });
              break;
            case "decoracion":
              decoracionArray.push({ ...servicios[key] });
              break;
            case "musica":
              musicaArray.push({ ...servicios[key] });
              break;
            case "fotografia":
              fotografiaArray.push({ ...servicios[key] });
              break;
            case "iluminacion":
              iluminacionArray.push({ ...servicios[key] });
              break;
            case "animacion":
              animacionArray.push({ ...servicios[key] });
              break;
            default:
              // Si el tipo de servicio no coincide con ninguno de los casos anteriores, no hacemos nada
              break;
          }
        }
      
        // Actualizamos los estados de servicios con los nuevos arrays
        setServiceCatering(cateringArray);
        setServiceDecor(decoracionArray);
        setServiceMusic(musicaArray);
        setServiceFoto(fotografiaArray);
        setServiceIlumination(iluminacionArray);
        setServiceAnimation(animacionArray);
      }
      
    

    useEffect (() => 
    {
        console.log('ESEEEEEEEEEEE: ', ourServices);
        clasificarServicios(ourServices, serviceCatering, serviceDecor, serviceFoto, serviceAnimation, serviceIlumination, serviceMusic);

    }, [ourServices])


    let [cateringHTML, setCateringHTML] = useState(<span>FFFFFFFFF</span>);
    let [decorHTML, setDecorHTML] = useState(<span>FFFFFFFFF</span>);
    let [fotoHTML, setFotoHTML] = useState(<span>FFFFFFFFF</span>);
    let [animationHTML, setAnimationHTML] = useState(<span>FFFFFFFFF</span>);
    let [iluminationgHTML, setIluminationHTML] = useState(<span>FFFFFFFFF</span>);
    let [musicHTML, setMusicHTML] = useState(<span>FFFFFFFFF</span>);

    useEffect (() => 
    {
        console.log('ESEEEEEEEEEEE: ', ourServices);
        console.log('CATERING: ', serviceCatering);
        console.log('DECOR: ', serviceDecor);
        console.log('FOTO: ', serviceFoto);
        console.log('ILUMINATION: ', serviceIlumination);
        console.log('ANIMATION: ', serviceAnimation);
        console.log('MUSIC: ', serviceMusic);

        console.log('El total de CAT ES: ', as);

        setCateringHTML(

            serviceCatering.map(subobjeto => (
              <span>
                <input 
                  type="checkbox" 
                  id={subobjeto.key} 
                  name="catering[]" 
                  value={subobjeto.name} input
                  {...register("catering", { required: true })}
                />
                <label 
                  className="titleOptionService" 
                  for={subobjeto.key} 
                >
                  { subobjeto.name} (${subobjeto.price})
                </label>
              </span>
            ))
          );


          setDecorHTML(

            serviceDecor.map(subobjeto => (
              <span>
                <input 
                  type="checkbox" 
                  id={subobjeto.key} 
                  name="decoracion[]" 
                  value={subobjeto.name} input
                  {...register("decoracion", { required: true })}
                />
                <label 
                  className="titleOptionService" 
                  for={subobjeto.key} 
                >
                  { subobjeto.name} (${subobjeto.price})
                </label>
              </span>
            ))
          );

          setFotoHTML(

            serviceFoto.map(subobjeto => (
              <span>
                <input 
                  type="checkbox" 
                  id={subobjeto.key} 
                  name="fotografia[]" 
                  value={subobjeto.name} input
                  {...register("fotografia", { required: true })}
                />
                <label 
                  className="titleOptionService" 
                  for={subobjeto.key} 
                >
                  { subobjeto.name} (${subobjeto.price})
                </label>
              </span>
            ))
          );

          setIluminationHTML(

            serviceIlumination.map(subobjeto => (
              <span>
                <input 
                  type="checkbox" 
                  id={subobjeto.key} 
                  name="ilumination[" 
                  value={subobjeto.name} input
                  {...register("ilumination", { required: true })}
                />
                <label 
                  className="titleOptionService" 
                  for={subobjeto.key} 
                >
                  { subobjeto.name} (${subobjeto.price})
                </label>
              </span>
            ))
          );

          setMusicHTML(

            serviceMusic.map(subobjeto => (
              <span>
                <input 
                  type="checkbox" 
                  id={subobjeto.key} 
                  name="music[]" 
                  value={subobjeto.name} input
                  {...register("music", { required: true })}
                />
                <label 
                  className="titleOptionService" 
                  for={subobjeto.key} 
                >
                  { subobjeto.name} (${subobjeto.price})
                </label>
              </span>
            ))
          );

          setAnimationHTML(

            serviceAnimation.map(subobjeto => (
              <span>
                <input 
                  type="checkbox" 
                  id={subobjeto.key} 
                  name="animacion[]" 
                  value={subobjeto.name} input
                  {...register("animacion", { required: true })}
                />
                <label 
                  className="titleOptionService" 
                  for={subobjeto.key} 
                >
                  { subobjeto.name} (${subobjeto.price})
                </label>
              </span>
            ))
          );


    }, [serviceAnimation, serviceCatering, serviceDecor, serviceFoto, serviceIlumination, serviceMusic])
    

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [totalQuote, setTotalQuote] = useState(0);
    const attendees = watch("attendees", 0);
    const catering = watch('catering', []);
    let cateringServices = [];
    let photograpyServices = [];
    let decorServices = [];
    let animationServices = [];
    let iluminationServices = [];
    let musicServices = [];


    const photograpy = watch('fotografia', [])



    const decor = watch('decoracion', []);

    const animation = watch('animacion', []);

    const ilumination = watch('ilumination', []);

    const dateSelected = watch('date', '');
    const music = watch('music', []);


    useEffect(() => {
        console.log('La fecha seleccionada es: ', dateSelected, '. ');
        const selectedDate = new Date(dateSelected);

    }, [dateSelected]);


    const navigate = useNavigate()

    const [total, setTotal] = useState(0);
    const userSelections = [];


    
    


        useEffect(() => 
        {
            console.log('El Valor de Catering es: ', quoterCatering);
        }, [quoterCatering])


    useEffect(() => console.log('INVITADOS: ', attendees), [attendees])
    const dispatch = useDispatch();
    const onSubmit = (data) => {
        data.total = totalQuote;
        data.catering = cateringServices; // Actualiza el campo "catering" con el arreglo de objetos.
        data.music = musicServices;
        data.animacion = animationServices;
        data.decoracion = decorServices;
        data.fotografia = photograpyServices;
        data.ilumination = iluminationServices;
        console.log(data);
        dispatch(updateQuoteData(data));

        console.log('Valores OBTENIDOS: ', updateQuoteData);
        const saveQuote = async () => 
        {
            await addNewQuote('JlQjLzQgnyNH27JozbhUv28atw22', data);
        }

        saveQuote();


        if (serviceCatering.length > 1) {
            console.log('AHORA SÍ.')
            
        }
    };

    
// Creamos una función que recibe los estados del watch y los estados de los arrays como parámetros, y devuelve el arreglo global con los datos de las selecciones del usuario
const crearArregloGlobal = (attendeesValue, cateringValue, photograpyValue, decorValue, iluminationValue, animationValue, musicValue) => {
  // Creamos una variable que almacene el arreglo global vacío
  let arreglo = [];


  // Usamos un if para verificar si el usuario ha seleccionado algún subservicio de catering
  if (cateringValue.length > 0) {
    // Creamos una variable que almacene un objeto con el nombre y los servicios del tipo catering
    let cateringObj = {
      name: "catering", // Asignamos el nombre del tipo de servicio
      services: [] // Inicializamos un arreglo vacío para los servicios
    };
    // Usamos un bucle for para recorrer el array cateringValue que contiene las selecciones del usuario
    for (let i = 0; i < cateringValue.length; i++) {
      // Usamos un bucle for para recorrer el array serviceCatering que contiene los objetos con los datos de los subservicios
      for (let j = 0; j < serviceCatering.length; j++) {
        // Usamos un if para comparar si el valor del array cateringValue coincide con el nombre del objeto del array serviceCatering
        if (cateringValue[i] === serviceCatering[j].name) {
          // Si coinciden, creamos una variable que almacene un objeto con el nombre y el precio del subservicio seleccionado
          let subobjeto = {
            nameService: serviceCatering[j].name, // Asignamos la propiedad name del objeto del array serviceCatering
            price: serviceCatering[j].price, // Asignamos la propiedad price del objeto del array serviceCatering
            description: serviceCatering[j].description
          };
          // Usamos la función push para agregar el subobjeto al arreglo de servicios del objeto cateringObj
          cateringObj.services.push(subobjeto);
          // Salimos del bucle interno, ya que no es necesario seguir buscando el subservicio
          break;
        }
      }
    }
    // Usamos la función push para agregar el objeto cateringObj al arreglo global
    arreglo.push(cateringObj);
  }
  // Repetimos este proceso para los demás tipos de servicio, usando los arrays correspondientes

  // Usamos un if para verificar si el usuario ha seleccionado algún subservicio de fotografia

  if (photograpy.length > 0) {
    console.log('VA SUMANDO.')
    // Creamos una variable que almacene un objeto con el nombre y los servicios del tipo fotografia
    let fotografiaObj = {
      name: "fotografia", // Asignamos el nombre del tipo de servicio
      services: [] // Inicializamos un arreglo vacío para los servicios
    };
    // Usamos un bucle for para recorrer el array photograpyValue que contiene las selecciones del usuario
    for (let i = 0; i < photograpyValue.length; i++) {
      // Usamos un bucle for para recorrer el array serviceFoto que contiene los objetos con los datos de los subservicios
      for (let j = 0; j < serviceFoto.length; j++) {
        // Usamos un if para comparar si el valor del array photograpyValue coincide con el nombre del objeto del array serviceFoto
        if (photograpyValue[i] === serviceFoto[j].name) {
          // Si coinciden, creamos una variable que almacene un objeto con el nombre y el precio del subservicio seleccionado
          let subobjeto = {
            nameService: serviceFoto[j].name, // Asignamos la propiedad name del objeto del array serviceFoto
            price: serviceFoto[j].price, // Asignamos la propiedad price del objeto del array serviceFoto
            description: serviceFoto[j].description
          };
          // Usamos la función push para agregar el subobjeto al arreglo de servicios del objeto fotografiaObj
          fotografiaObj.services.push(subobjeto);
          // Salimos del bucle interno, ya que no es necesario seguir buscando el subservicio
          break;
        }
      }
    }
    // Usamos la función push para agregar el objeto fotografiaObj al arreglo global
    arreglo.push(fotografiaObj);
  }
  
  if (decor.length > 0) {
    console.log('VA SUMANDO.')
    // Creamos una variable que almacene un objeto con el nombre y los servicios del tipo fotografia
    let decorObj = {
      name: "decoracion", // Asignamos el nombre del tipo de servicio
      services: [] // Inicializamos un arreglo vacío para los servicios
    };
    // Usamos un bucle for para recorrer el array photograpyValue que contiene las selecciones del usuario
    for (let i = 0; i < decorValue.length; i++) {
      // Usamos un bucle for para recorrer el array serviceFoto que contiene los objetos con los datos de los subservicios
      for (let j = 0; j < serviceDecor.length; j++) {
        // Usamos un if para comparar si el valor del array photograpyValue coincide con el nombre del objeto del array serviceFoto
        if (decorValue[i] === serviceDecor[j].name) {
          // Si coinciden, creamos una variable que almacene un objeto con el nombre y el precio del subservicio seleccionado
          let subobjeto = {
            nameService: serviceDecor[j].name, // Asignamos la propiedad name del objeto del array serviceFoto
            price: serviceDecor[j].price, // Asignamos la propiedad price del objeto del array serviceFoto
            description: serviceDecor[j].description
          };
          // Usamos la función push para agregar el subobjeto al arreglo de servicios del objeto fotografiaObj
          decorObj.services.push(subobjeto);
          // Salimos del bucle interno, ya que no es necesario seguir buscando el subservicio
          break;
        }
      }
    }
    // Usamos la función push para agregar el objeto fotografiaObj al arreglo global
    arreglo.push(decorObj);
  }

  
  if (ilumination.length > 0) {
    console.log('VA SUMANDO.')
    // Creamos una variable que almacene un objeto con el nombre y los servicios del tipo fotografia
    let iluminationObj = {
      name: "iluminacion", // Asignamos el nombre del tipo de servicio
      services: [] // Inicializamos un arreglo vacío para los servicios
    };
    // Usamos un bucle for para recorrer el array photograpyValue que contiene las selecciones del usuario
    for (let i = 0; i < iluminationValue.length; i++) {
      // Usamos un bucle for para recorrer el array serviceFoto que contiene los objetos con los datos de los subservicios
      for (let j = 0; j < serviceIlumination.length; j++) {
        // Usamos un if para comparar si el valor del array photograpyValue coincide con el nombre del objeto del array serviceFoto
        console.log('ESTE: ', iluminationValue[i]);
        console.log(' Y este: ', serviceIlumination[j].name)
        if (iluminationValue[i] === serviceIlumination[j].name) {
          // Si coinciden, creamos una variable que almacene un objeto con el nombre y el precio del subservicio seleccionado
          let subobjeto = {
            nameService: serviceIlumination[j].name, // Asignamos la propiedad name del objeto del array serviceFoto
            price: serviceIlumination[j].price, // Asignamos la propiedad price del objeto del array serviceFoto
            description: serviceIlumination[j].description
          };
          // Usamos la función push para agregar el subobjeto al arreglo de servicios del objeto fotografiaObj
          iluminationObj.services.push(subobjeto);
          // Salimos del bucle interno, ya que no es necesario seguir buscando el subservicio
          break;
        }
      }
    }
    // Usamos la función push para agregar el objeto fotografiaObj al arreglo global
    arreglo.push(iluminationObj);

  }

  
  if (animation.length > 0) {
    console.log('VA SUMANDO.')
    // Creamos una variable que almacene un objeto con el nombre y los servicios del tipo fotografia
    let animationaObj = {
      name: "animation", // Asignamos el nombre del tipo de servicio
      services: [] // Inicializamos un arreglo vacío para los servicios
    };
    // Usamos un bucle for para recorrer el array photograpyValue que contiene las selecciones del usuario
    for (let i = 0; i < animationValue.length; i++) {
      // Usamos un bucle for para recorrer el array serviceFoto que contiene los objetos con los datos de los subservicios
      for (let j = 0; j < serviceAnimation.length; j++) {
        // Usamos un if para comparar si el valor del array photograpyValue coincide con el nombre del objeto del array serviceFoto
        if (animationValue[i] === serviceAnimation[j].name) {
          // Si coinciden, creamos una variable que almacene un objeto con el nombre y el precio del subservicio seleccionado
          let subobjeto = {
            nameService: serviceAnimation[j].name, // Asignamos la propiedad name del objeto del array serviceFoto
            price: serviceAnimation[j].price, // Asignamos la propiedad price del objeto del array serviceFoto
            description: serviceAnimation[j].description
          };
          // Usamos la función push para agregar el subobjeto al arreglo de servicios del objeto fotografiaObj
          animationaObj.services.push(subobjeto);
          // Salimos del bucle interno, ya que no es necesario seguir buscando el subservicio
          break;
        }
      }
    }
    // Usamos la función push para agregar el objeto fotografiaObj al arreglo global
    arreglo.push(animationaObj);
  }

  
  if (music.length > 0) {
    console.log('VA SUMANDO.')
    // Creamos una variable que almacene un objeto con el nombre y los servicios del tipo fotografia
    let musicObj = {
      name: "musica", // Asignamos el nombre del tipo de servicio
      services: [] // Inicializamos un arreglo vacío para los servicios
    };
    // Usamos un bucle for para recorrer el array photograpyValue que contiene las selecciones del usuario
    for (let i = 0; i < musicValue.length; i++) {
      // Usamos un bucle for para recorrer el array serviceFoto que contiene los objetos con los datos de los subservicios
      for (let j = 0; j < serviceMusic.length; j++) {
        // Usamos un if para comparar si el valor del array photograpyValue coincide con el nombre del objeto del array serviceFoto
        if (musicValue[i] === serviceMusic[j].name) {
          // Si coinciden, creamos una variable que almacene un objeto con el nombre y el precio del subservicio seleccionado
          let subobjeto = {
            nameService: serviceMusic[j].name, // Asignamos la propiedad name del objeto del array serviceFoto
            price: serviceMusic[j].price, // Asignamos la propiedad price del objeto del array serviceFoto
            description: serviceMusic[j].description
          };
          // Usamos la función push para agregar el subobjeto al arreglo de servicios del objeto fotografiaObj
          musicObj.services.push(subobjeto);
          // Salimos del bucle interno, ya que no es necesario seguir buscando el subservicio
          break;
        } 
      }
    }
    // Usamos la función push para agregar el objeto fotografiaObj al arreglo global
    arreglo.push(musicObj);
  }




  // Repetimos este proceso para los demás tipos de servicio, usando los arrays correspondientes

  // Devolvemos el arreglo global con los datos de las selecciones del usuario
  console.log('El ARREGLO DEVUELTO ES: ', arreglo);
  return arreglo;
}

let arregloQ = [];
// Usamos un useEffect que dependa de los estados del watch para llamar a la función crearArregloGlobal y actualizar el estado del arreglo global con el resultado de la función
useEffect(() => {
  
   console.log('AQUÍ SE PUEDE PONER LÓGICA QUE DEPENDA DEL CAMBIO DE ALGÚN INPUT DE SERVICIO');
   // Llamamos a la función crearArregloGlobal con los estados del watch y los estados de los arrays como parámetros
   arregloQ = crearArregloGlobal(attendees, catering, photograpy, decor, ilumination, animation, music);
   // Usamos el seteador del estado arregloGlobal para actualizarlo con el valor de la variable arreglo

  }
, [catering, attendees, photograpy, decor, animation, ilumination, music]); // El useEffect se ejecutará cuando cambien los valores de los estados del watch

  useEffect(() => 
  {
    console.log('Arreglo DEFINITIVE ', arregloQ)
  }, [arregloQ]);
// Usamos el estado del arreglo global para mostrarlo en la interfaz de usuario o enviarlo a otro componente

    useEffect(() => 
    {
      console.log('MI ARREGO GLOBAL: ', arregloGlobal);
    }, [arregloGlobal])


    return (
        <section className="sectionQuote">

            <img className='backGroundHeader' src="https://i.ibb.co/fXLf97G/image-127.png" alt="Fondo de Wedding" />

            <main className="containerQuote">
                <span className="titleQuote">Cotización</span>
                <span className="lineTitle"></span>
                <p className="textQuote">
                    ¡Gracias por considerarnos para tu próximo evento! Por favor,
                    completa el siguiente formulario para obtener una cotización
                    personalizada que se adapte a tus necesidades y haga que tu ocasión
                    sea inolvidable!
                </p>

                <section className="formQuote">

                    <form onSubmit={handleSubmit(onSubmit)} className="loginDown__form">

                        <input type="text" id="empresa" {...register("name", { required: true })} placeholder="Nombre/Empresa" className="loginDown__input" />
                        {errors.name && <span className="loginDown__error">Este campo es obligatorio</span>}
                        <input type="number" id="contacto" {...register("contacto", { required: true })} placeholder="Contacto" className="loginDown__input" />
                        {errors.contacto && <span className="loginDown__error">Este campo es obligatorio</span>}

                        {/* <span className="loginLabel">Email</span> */}
                        <input type="email" id="contacto" {...register("email", { required: true })} placeholder="Email" className="loginDown__input" />
                        {errors.email && <span className="loginDown__error">Este campo es obligatorio</span>}


                        {/* <span className="loginLabel">Fecha del Evento</span> */}
                        <input type="date" id="date" {...register("date", { required: true })} placeholder="Fecha del Evento" className="loginDown__input" />
                        {errors.date && <span className="loginDown__error">Este campo es obligatorio</span>}

                        {/* <span className="loginLabel">Tipo de Evento</span> */}
                        <input type="text" id="type__Event" {...register("type__Event", { required: true })} placeholder="Tipo de Evento" className="loginDown__input" />
                        {errors.type__Event && <span className="loginDown__error">Este campo es obligatorio</span>}

                        {/* <span className="loginLabel">Número Estimado de Asistentes al Evento</span> */}
                        <input type="number" onChange={(e) => {
                            console.log('Input value changed:', e.target.value);
                            handleAttendeesChange(e);
                        }} id="attendees" {...register("attendees", { required: true })} placeholder="Número Estimado de Asistentes al Evento" className="loginDown__input" />
                        {errors.attendees && <span className="loginDown__error">Este campo es obligatorio</span>}




                        {/* <span className="loginLabel">Seleccionar Ubicación</span>  */}
                        <select id="location" {...register("location", { required: true })} className="loginDown__input"> <option value="">Ubicación</option> <option value="bogota">Bogotá</option> <option value="medellin">Medellín</option> <option value="cali">Cali</option> <option value="cartagena">Cartagena</option> </select> {errors.location && <span className="loginDown__error">Este campo es obligatorio</span>}

                        <span className="selectServices">SELECCIONA LOS SERVICIOS QUE DESEAS EN EL EVENTO</span>


                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}

                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper swiperQuote" >


                            <SwiperSlide className="sliderForm">
                                <img className='imageSliderForm' src="https://i.ibb.co/g9j4DKT/image-128.png" alt="imagen de bodas" />

                                <section className="optionsSliderForm">
                                    <span className="loginLabel"> Catering </span>

                                    <div className="service">
                                        <div className="service__options">
                                            {cateringHTML}
                                        </div>



                                    </div>
                                </section>
                                
                            </SwiperSlide>

                            <SwiperSlide className="sliderForm">

                                <img className='imageSliderForm' src="https://images.unsplash.com/photo-1495745966610-2a67f2297e5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="imagen de bodas" />

                                <section className="optionsSliderForm">
                                    <span className="loginLabel">Fotografía</span>
                                    <div className="service__options">
                                        {fotoHTML}
                                    </div>
                                </section>
                            </SwiperSlide>

                            <SwiperSlide className="sliderForm">
                                <img className='imageSliderForm' src="https://images.unsplash.com/photo-1554778414-74925d96d495?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80" alt="imagen de bodas" />

                                <section className="optionsSliderForm">
                                    <span className="loginLabel">Decoración</span>

                                        <div className="service__options">
                                            {decorHTML}
                                        </div>

                                 

                                </section>
                            </SwiperSlide>


                            <SwiperSlide className="sliderForm">
                                <img className='imageSliderForm' src="https://images.unsplash.com/photo-1438762398043-ac196c2fa1e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="imagen de bodas" />



                                <section className="optionsSliderForm">
                                    <span className="loginLabel" onClick={() => setFour(!four)}>Animación</span>
                                    <div className="service__options">
                                        {animationHTML}
                                    </div>
                                </section>
                            </SwiperSlide>


                            <SwiperSlide className="sliderForm">
                                <img className='imageSliderForm' src="https://images.unsplash.com/photo-1562575214-da9fcf59b907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1372&q=80" alt="imagen de bodas" />

                                <section className="optionsSliderForm">
                                    <span className="loginLabel"> Iluminación </span>

                                    <div className="service__options">
                                        {iluminationgHTML}
                                    </div>

                                </section>
                            </SwiperSlide>

                            <SwiperSlide className="sliderForm">
                                <img className='imageSliderForm' src="https://plus.unsplash.com/premium_photo-1682391039360-01afb6ffc72f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGp8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="imagen de bodas" />

                                <section className="optionsSliderForm">
                                    <span className="loginLabel"> Música y Dj </span>

                                    <div className="service__options">
                                        {musicHTML}
                                    </div>
                                </section>
                            </SwiperSlide>
                        </Swiper>

                        <button type="submit" className="generation">Generar Cotización</button>
                            <span onClick={() => navigate('/cotizacion')} className="generation"> IR A PDF </span>
                    </form>


                </section>
            </main>
        </section>
    );
};

export default Quote;
