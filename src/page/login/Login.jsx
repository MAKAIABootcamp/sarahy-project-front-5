import React from 'react'
import { useForm } from 'react-hook-form'
import './login.scss'


const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = (data) => {
    // aquí puedes hacer lo que quieras con los datos del formulario
    console.log(data)
  }

  return (
    <main className="login">
      <img src='https://res.cloudinary.com/dibw7aluj/image/upload/v1694414835/Vector_v5muay.png' alt="Back" className="login__back" /> 
      <section className="login__container">
        <div className='loginUp'>

        <figure className='loginFigure'>
            <img className='loginImg' src="https://i.ibb.co/Jc07Cs4/Rectangle-6.png" alt="Imagen" />
        </figure>

        </div>

        <div className="loginDown">
            <h1 className="loginDown__title"><b>Inicio de sesión</b></h1>
            <p className="loginDown__subtitle">Inicia sesión con tu cuenta de preferencia</p>

            <form onSubmit={handleSubmit(onSubmit)} className="loginDown__form">
                <span className="loginLabel">Email</span>
                <input type="email" id="email" {...register("email", { required: true })} placeholder="ejemplo@tuemail.com" className="loginDown__input" /> 
                {errors.email && <span className="loginDown__error">Este campo es obligatorio</span>}
                <span className="loginLabel">Contraseña</span>
                <input type="password" id="password" {...register("password", { required: true })} placeholder="**********" className="loginDown__input" /> 
                {errors.password && <span className="loginDown__error">Este campo es obligatorio</span>}
                <button type="submit" className="loginDown__button">Iniciar sesión</button>
            </form>

            <span className='red'>

                    <img src="https://assets.stickpng.com/images/5a951939c4ffc33e8c148af2.png" alt="Google" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png" alt="Facebook" />
            </span>
            <a href="#" className="loginDown__register">¿No tienes una cuenta? Regístrate aquí</a>
        </div>


      </section>
    </main>
  )
}

export default Login
