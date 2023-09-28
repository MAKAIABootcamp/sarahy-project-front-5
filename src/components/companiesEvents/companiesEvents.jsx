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
import "./companiesEvents.scss";

import { typEvent } from "./hookTypEvent";
import CollageEvents from "../collageEvents/Collage";

const CompaniesEvents = () => {
  return (
    <main className="main__home">
      <img src={empresasPrincipal} alt="" className="imgCompanies__intro" />
      <section className="main__info">
        <img src={logoIzquierda} alt="" className="logoIzquierda" />
        <div className="container__intro">
          <h1 className="main__title__home">Eventos Empresariales</h1>
          <p className="main__parrafo">
            Únete a Celebraciones Sarahy para eventos empresariales y educativos
            de éxito. Nuestra experiencia en planificación y ejecución garantiza
            inspiración, aprendizaje y conexiones valiosas. ¡Haz que tu próximo
            evento sea memorable con nosotros!
          </p>
        </div>
        <img src={logoDerecha} alt="" className="logoDerecha" />
      </section>

      <section className="tipe__events">
        <span className="title__events">TODOS LOS EVENTOS EMPRESARIALES PARA TI</span>
        <div className="cards__events">
          <article className="details__event">
            <figure className="fig">
              <img src={empresasFiestas} alt="" className="img" />
            </figure>
            <span className="span">FIESTAS EMPRESARIALES</span>
          </article>
          <article className="details__event">
            <figure className="fig">
              <img src={empresasLanzamiento} alt="" className="img" />
            </figure>
            <span className="span">LANZAMIENTO DE MARCA</span>
          </article>
          <article className="details__event">
            <figure className="fig">
              <img src={empresasCapacitaciones} alt="" className="img" />
            </figure>
            <span className="span">CAPACITACIONES</span>
          </article>
          <article className="details__event">
            <figure className="fig">
              <img src={empresasGraduaciones} alt="" className="img" />
            </figure>
            <span className="span">GRADUACIONES</span>
          </article>
        </div>
      </section>

      <section className="data__events">
        <span className="title__data">
          ¿CÓMO CELEBRACIONES SARAHY HACE ESPECIAL Y UNICO TU EVENTO?
        </span>
        <div className="div__events">
          <div className="div__data">
            <article className="logo__title">
              <figure className="fig">
                <img src={logoNegro} alt="" className="img" />
              </figure>
              <span className="span">Esperiencia personalizada</span>
            </article>
            <p className="paragraph">
              Nuestros eventos empresariales se distinguen por su enfoque
              personalizado, diseñados para satisfacer las necesidades y
              objetivos específicos de cada cliente.
            </p>
          </div>

          <div className="div__data">
            <article className="logo__title">
              <figure className="fig">
                <img src={logoNegro} alt="" className="img" />
              </figure>
              <span className="span">Red de expertos</span>
            </article>
            <p className="paragraph">
              Celebraciones Sarahy se enorgullece de contar con una red de
              expertos de élite en diversas áreas empresariales, asegurando que
              cada evento esté impregnado de conocimiento actualizado y
              perspectivas innovadoras.
            </p>
          </div>

          <div className="div__data">
            <article className="logo__title">
              <figure className="fig">
                <img src={logoNegro} alt="" className="img" />
              </figure>
              <span className="span">Elemento de Celebración</span>
            </article>
            <p className="paragraph">
              Nuestros eventos incorporan momentos de celebración y networking,
              creando un ambiente propicio para fortalecer las relaciones
              profesionales y motivar a los participantes a alcanzar sus metas.
            </p>
          </div>
        </div>
      </section>

      <section className="galery">
            <div className="logo__titleGalery">
            <figure className="fig">
                <img src={logoNegro} alt="" className="img" />
            </figure>
            <span className="span">Galería</span>
            <button className="button__companies">Haz tu cotización </button>
            </div>
            <div className="event__collagePlus">
              <CollageEvents imagenes={typEvent} className="description__img" />
            </div>
            {/* <figure className="collage__galery">
            <img src={prueba} alt="" className="img" />
            </figure> */}
            
      </section>

      <section className="others__companies">
        <span className="title__companies">EMPRESAS QUE HAN VIVIDO LA EXPERIENCIA SARAHY</span>
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
            <img src={empresa5} alt="" className="img" />
        </figure>
        </div>
        

      </section>
    </main>
  );
};

export default CompaniesEvents;
