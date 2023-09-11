import React from 'react'
import { useForm } from 'react-hook-form'
import './login.scss'
const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => {
      // aquí puedes hacer lo que quieras con los datos del formulario
      console.log(data)
    }

  return (
    <main className="login">
    <img src='https://res.cloudinary.com/dibw7aluj/image/upload/v1694414835/Vector_v5muay.png' alt="Back" className="login__back" /> 
    <section className="login__container register">
      <div className='loginUp register'>

      <figure className='loginFigure'>
          <img className='loginImg' src="https://i.ibb.co/Jc07Cs4/Rectangle-6.png" alt="Imagen" />
      </figure>

      </div>

      <div className="loginDown register">
          <h1 className="loginDown__title"><b>Registro</b></h1>
          <p className="loginDown__subtitle">Completa todos los campos para registrate</p>

          <form onSubmit={handleSubmit(onSubmit)} className="loginDown__form">
          <span className="loginLabel">Nombre</span>
              <input type="text" id="name" {...register("name", { required: true })} placeholder="ejemplo@tuemail.com" className="loginDown__input" /> 
              {errors.email && <span className="loginDown__error">Este campo es obligatorio</span>}
              <span className="loginLabel">Nombre</span>
              <input type="email" id="email" {...register("email", { required: true })} placeholder="ejemplo@tuemail.com" className="loginDown__input" /> 
              {errors.email && <span className="loginDown__error">Este campo es obligatorio</span>}
              <span className="loginLabel">Contraseña</span>
              <input type="password" id="password" {...register("password", { required: true })} placeholder="**********" className="loginDown__input" /> 
              {errors.password && <span className="loginDown__error">Este campo es obligatorio</span>}
              <span className="loginLabel">Verificar Contraseña</span>
              <input type="password" id="password" {...register("password", { required: true })} placeholder="**********" className="loginDown__input" /> 
              {errors.password && <span className="loginDown__error">Este campo es obligatorio</span>}
              <button type="submit" className="loginDown__button">Iniciar sesión</button>
          </form>

      </div>


    </section>
  </main>
  )
}

export default Register;