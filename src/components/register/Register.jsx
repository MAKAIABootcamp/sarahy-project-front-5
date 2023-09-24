import { useNavigate } from 'react-router-dom';
import React from "react";
import { useForm } from "react-hook-form";
import "../../components/login/login.scss";
import { createAnUser } from "../../redux/store/auth/authAction";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const aunthenticationRedux = useSelector((state) => state.aunthentication);
  // console.log(aunthenticationRedux);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(createAnUser(data));
    console.log("funciona crear cuenta");
  };

  return (
    <main className="login">
      <section className="login__container register">
        <div className="loginDown register">
          <h1 className="loginDown__title">
            <b>Registro</b>
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="loginDown__form">
            <span className="loginLabel">Nombre</span>
            <input
              type="text"
              
              {...register(Nombre, { required: true })}
              placeholder="Ingresa tu nombre"
              className="loginDown__input"
            />
            {/* {errors.email && (
              <span className="loginDown__error">
                Este campo es obligatorio
              </span>
            )}
            
            <span className="loginLabel">Contacto</span>
            <input
              type="number"
              id="password"
              {...register("numero", { required: true })}
              placeholder="Ingresa tu número"
              className="loginDown__input"
            />
            {errors.password && (
              <span className="loginDown__error">
                Este campo es obligatorio
              </span>
            )}

            
            
            <span className="loginLabel">E-mail</span>
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
              placeholder="ejemplo@tuemail.com"
              className="loginDown__input"
            />
            {errors.email && (
              <span className="loginDown__error">
                Este campo es obligatorio
              </span>
            )}
            <span className="loginLabel">Contraseña</span>
            <input
              type="password"
              id="password"
              {...register("password", { required: true })}
              placeholder="**********"
              className="loginDown__input"
            />
            {errors.password && (
              <span className="loginDown__error">
                Este campo es obligatorio
              </span>
            )}
            <span className="loginLabel">Verificar contraseña</span>
            <input
              type="password"
              id="password"
              {...register("verificatePassword", { required: true })}
              placeholder="**********"
              className="loginDown__input"
            />
            {errors.password && (
              <span className="loginDown__error">
                Este campo es obligatorio
              </span>
            )} */}
            <button className="loginDown__button" onClick={() => navigate("/ingresar")}>
              Registrarse
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Register;
