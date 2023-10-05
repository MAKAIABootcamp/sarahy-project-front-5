import React from "react";
import logo from "../../assets/image/logo-blanco.png";
import empresasPrincipal from "./assets/empresasPrincipal.jpg";
import empresasFiestas from "./assets/empresaFiestas.jpg";
import empresasLanzamiento from "./assets/empresasLanzamiento.jpg";
import empresasCapacitaciones from "./assets/empresasCapacitaciones.jpg";
import empresasGraduaciones from "./assets/empresasGraduaciones.jpg";
import logoIzquierda from "../../assets/image/gotaIzquierda.png";
import logoDerecha from "../../assets/image/gotaDerecha.png";
import logoNegro from "./assets/logoNegro.png";
import prueba from "./assets/prueba.jpg";
import empresa1 from "./assets/empresa1.webp";
import empresa2 from "./assets/empresa2.png";
import empresa3 from "./assets/empresa3.jpg";
import empresa4 from "./assets/empresa4.jpeg";
import empresa5 from "./assets/empresa5.jpeg";
import empresa6 from "./assets/empresa6.jpeg";
import "./companiesEvents.scss";

import { typEvent } from "./hookTypEvent";
import CollageEvents from "../collageEvents/Collage";
import { useNavigate } from "react-router";

const CompaniesEvents = () => {
  const navigate = useNavigate()
  return (
    <main className="main__home dark:!bg-neutral-700">
      <img src={empresasPrincipal} alt="" className="imgCompanies__intro" />
      <section className="main__info dark:bg-neutral-800">
        <img src={logoIzquierda} alt="" className="logoIzquierda" />
        <div className="container__intro">
          <h1 className="main__title__home dark:text-neutral-100">Eventos Empresariales</h1>
          <p className="main__parrafo dark:text-neutral-300">
            Únete a Celebraciones Sarahy para eventos empresariales y educativos
            de éxito. Nuestra experiencia en planificación y ejecución garantiza
            inspiración, aprendizaje y conexiones valiosas. ¡Haz que tu próximo
            evento sea memorable con nosotros!
          </p>
        </div>
        <img src={logoDerecha} alt="" className="logoDerecha" />
      </section>

      <section className="tipe__events dark:bg-neutral-700">
        <span className="title__events dark:text-neutral-300">Todos los eventos empresariales para ti</span>
      
        <div className="cards__events">
          <article className="details__event">
            <figure className="fig">
              <img src={empresasFiestas} alt="" className="img" />
            </figure>
            <span className="span dark:text-neutral-300">Fiestas empresariales</span>
          </article>
          <article className="details__event">
            <figure className="fig">
              <img src={empresasLanzamiento} alt="" className="img" />
            </figure>
            <span className="span dark:text-neutral-300">Lanzamiento de marca</span>
          </article>
          <article className="details__event">
            <figure className="fig">
              <img src={empresasCapacitaciones} alt="" className="img" />
            </figure>
            <span className="span dark:text-neutral-300">Capacitaciones</span>
          </article>
          <article className="details__event">
            <figure className="fig">
              <img src={empresasGraduaciones} alt="" className="img" />
            </figure>
            <span className="span dark:text-neutral-300">Graduaciones</span>
          </article>
        </div>
      </section>

      <section className="data__events dark:bg-neutral-800">
        <span className="title__data dark:text-neutral-200">
          ¿Cómo Celebraciones Sarahy hace especial y unico tu evento?
        </span>
        <div className="div__events">
          <div className="div__data">
            <article className="logo__title">
              <figure className="fig">
                <img src={logoNegro} alt="" className="img dark:bg-neutral-300" />
              </figure>
              <span className="span dark:text-neutral-300">Experiencia personalizada</span>
            </article>
            <p className="paragraph dark:text-neutral-300">
            Nuestros eventos empresariales son personalizados para cumplir con los objetivos de cada cliente.
            </p>
          </div>

          <div className="div__data">
            <article className="logo__title">
              <figure className="fig">
                <img src={logoNegro} alt="" className="img dark:bg-neutral-300" />
              </figure>
              <span className="span dark:text-neutral-300">Red de expertos</span>
            </article>
            <p className="paragraph dark:text-neutral-300">
            Celebraciones Sarahy se apoya en una red de expertos empresariales para eventos innovadores y actualizados.
            </p>
          </div>

          <div className="div__data">
            <article className="logo__title">
              <figure className="fig">
                <img src={logoNegro} alt="" className="img dark:bg-neutral-300" />
              </figure>
              <span className="span dark:text-neutral-300">Elemento de Celebración</span>
            </article>
            <p className="paragraph dark:text-neutral-300">
            Nuestros eventos fomentan la celebración, el networking y la motivación para lograr metas profesionales.
            </p>
          </div>
        </div>
      </section>

      <section className="galery dark:bg-neutral-700">
            <div className="logo__titleGalery">
              <figure className="fig">
                  <img src={logoNegro} alt="" className="img dark:bg-neutral-300" />
              </figure>
              <span className="span dark:text-neutral-300">Galería</span>
              <button className="button__companies" onClick={() => {navigate("/quote"); window.scrollTo(0, 400)}}>Haz tu cotización </button>
            </div>
            <div className="event__collagePlus">
              <CollageEvents imagenes={typEvent} className="description__img" />
            </div>
          
            {/* <figure className="collage__galery">
            <img src={prueba} alt="" className="img" />
            </figure> */}
      </section>
     
      <section className='btn__mobile'>
    <button className="button__companiesMobile" onClick={() => {navigate("/quote"); window.scrollTo(0, 400)}}>Haz tu cotización </button>
    </section>


      <section className="others__companies dark:bg-neutral-800">
        <span className="title__companies dark:text-neutral-200">Empresas que han vivido la experiencia Sarahy</span>
        <div className="img__companies">
        <figure className="fig">
            <img src={empresa1} alt=""  className="img"/>
        </figure>
        <figure className="fig">
            <img src={empresa2} alt="" className="img" />
        </figure>
        <figure className="fig">
            <img src={empresa3} alt="" className="img" />
        </figure>
        <figure className="fig">
            <img src={empresa4} alt="" className="img" />
        </figure>
        <figure className="fig">
            <img src={empresa6} alt="" className="img" />
        </figure>
        <figure className="fig">
            <img src={empresa5} alt="" className="img" />
        </figure>
        
        </div>
        

      </section>
    </main>
  );
};

export default CompaniesEvents;
