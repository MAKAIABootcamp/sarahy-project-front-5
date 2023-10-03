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

  const navigateToLogin = () => {
    navigate("/ingresar");
    window.scrollTo(0, 0);
  }

  const onSubmit = (data) => {
    // console.log(data)
    dispatch(createAnUser(data));
    console.log("funciona crear cuenta");
    navigateToLogin()
  };

  return (
    <main className="login dark:bg-neutral-800">
      <section className="login__container register">
        <div className="loginDown register dark:bg-neutral-800">
          <h1 className="loginDown__title">
            Registro
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="loginDown__form">
            <span className="loginLabel dark:text-neutral-300">Nombre</span>
            <input
              type="text"
              // id="name"
              {...register("name", { required: true })}
              placeholder="Ingresa tu nombre"
              className="loginDown__input"
            />
            {errors.name && (
              <span className="loginDown__error dark:text-neutral-300">
                Este campo es obligatorio
              </span>
            )}
            
            <span className="loginLabel dark:text-neutral-300">Contacto</span>
            <input
              type="number"
              // id="number"
              {...register("number", { required: true })}
              placeholder="Ingresa tu número"
              className="loginDown__input"
            />
            {errors.number && (
              <span className="loginDown__error dark:text-neutral-300">
                Este campo es obligatorio
              </span>
            )}

            
            
            <span className="loginLabel dark:text-neutral-300">E-mail</span>
            <input
              type="email"
              // id="email"
              {...register("email", { required: true })}
              placeholder="ejemplo@tuemail.com"
              className="loginDown__input dark:text-neutral-300"
            />
            {errors.email && (
              <span className="loginDown__error dark:text-neutral-300">
                Este campo es obligatorio
              </span>
            )}
            <span className="loginLabel dark:text-neutral-300">Contraseña</span>
            <input
              type="password"
              // id="password"
              {...register("password", { required: true })}
              placeholder="**********"
              className="loginDown__input dark:text-neutral-300"
            />
            {errors.password && (
              <span className="loginDown__error">
                Este campo es obligatorio
              </span>
            )}
            <span className="loginLabel dark:text-neutral-300">Verificar contraseña</span>
            <input
              type="password"
              // id="passwordtwo"
              {...register("passwordtwo", { required: true })}
              placeholder="**********"
              className="loginDown__input dark:text-neutral-300"
            />
            {errors.passwordtwo && (
              <span className="loginDown__error dark:text-neutral-300">
                Este campo es obligatorio
              </span>
            )}
            <button type="submit" className="loginDown__button dark:!bg-neutral-300 dark:!text-neutral-900" >
              Registrarse
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Register;