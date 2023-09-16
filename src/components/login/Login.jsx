import React from 'react'
import { useForm } from 'react-hook-form'
import './login.scss'
import { loginFacebook, loginGoogle, loginWithEmailAndPassword } from '../../redux/store/auth/authAction'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userLogged } from '../../redux/store/auth/authReducer'


const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    dispatch(loginWithEmailAndPassword(data))

    // console.log(data)
  }
  const salir = () => {
    dispatch(userLogged(false))
    navigate("/")
  }

  const intro = () => {
    dispatch(loginGoogle())
  }

  const introFacebook = () => {
    dispatch(loginFacebook())
  }

  

  
  return (
    <main className="login">
      {/* <img src='https://res.cloudinary.com/dibw7aluj/image/upload/v1694414835/Vector_v5muay.png' alt="Back" className="login__back" />  */}
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
                <button type="submit" className="loginDown__button" onClick={() => navigate("/")}>Iniciar sesión</button>
            </form>

            <span className='red'>

                    <img src="https://assets.stickpng.com/images/5847f9cbcef1014c0b5e48c8.png" alt="Google" onClick={intro}/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png" alt="Facebook" onClick={introFacebook}/>

            </span>
            <a href="#" className="loginDown__register" onClick={() => navigate("/registro")}>¿No tienes una cuenta? Regístrate aquí</a>
        </div>
      </section>
    </main>
  )
}

export default Login;
