import React from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import imgContactanos from "./contactanos.jpg"
import './modalContactanos.scss'
import Swal from "sweetalert2";

Modal.setAppElement("#root");

const ModalContactanos = ({ isOpen, onRequestCloset }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    Swal.fire({
        icon: 'success',
        title: 'Datos enviados correctamente',
        text: 'Gracias por comunicarte con nosotros, un asesor te contactará.',
      })
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestCloset={onRequestCloset}
      className="modal__contactanos"
    >
      <section className="section__contactanos">
        <div className="div__form">
            <figure className="figure__form">
                <img src={imgContactanos} alt="" className="img" />
            </figure>
            
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <div className="div__close">
            <button className="btn__close" onClick={onRequestCloset}>
            <span class="material-symbols-outlined">close</span>
          </button>
            </div>
          
            <h3 className="title">Contáctanos</h3>

              <label className="label">
                <input
                  className="input"
                  name="name"
                  type="text"
                  placeholder="Nombre/apellido"
                  {...register("name", { required: true })}
                />
              </label>
              <label className="label">
                <input
                  className="input"
                  name="contac"
                  type="number"
                  placeholder="Celular"
                  {...register("contact", { required: true })}
                />
              </label>
              <label className="label">
                <input
                  className="input"
                  name="email"
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
              </label>
              <label className="label__mensaje">
                <textarea
                 className="input__mensaje"
                 name="message"
                 type="text"
                 placeholder="Déjanos tu mensaje"
                 {...register("message", { required: true })}>
                </textarea>
              </label>
           
            <button className="btn__send" type="submit">
              Enviar
            </button>
          </form>
        </div>
      </section>
    </Modal>
  );
};

export default ModalContactanos;
