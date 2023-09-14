import React from "react";
import "./aboutUs.scss";
import team from "../../assets/image/team.jpg";

function AboutUs() {
  return (
    <>
      <section className="title__locations">
        <h2 className="title">Quienes somos</h2>
        <hr className="line__locations" />
      </section>

      <section className="container__aboutUs">

        <div className="info">
            <figure className="fig">
              <img src={team} alt="" className="img" />
            </figure>
          
          <div className="paragraph">
            <span className="span">Celebraciones Sarahy</span>
            <p className="details">
              Somos una empresa creada para prestación de servicios a nivel
              regional especializada en la organización de todo tipo de eventos
              grandes o pequeños: Fiestas de cumpleaños, Bodas, Reuniones y
              eventos corporativos, Recepciones, Conferencias, Eventos
              deportivos; Ofrecemos planificación de eventos, diseño y
              producción. Sea lo que sea que necesite, disponemos de lo
              necesario para hacer que su evento sea inolvidable.
            </p>
          </div>
        </div>

        <div className="containers__data">

            <div className="data">
                <span className="span">Misión</span>
                <hr className="line"/>
                <p className="paragraph">Garantizar la satisfacción de nuestros clientes, brindando diferentes alternativas en la celebración de sus fiestas y eventos en general, basados en la confianza y en la credibilidad, trabajando en equipo con un compromiso innovador manteniendo un estándar de calidad en todos nuestros productos .</p>
            </div>

            <div className="data">
                <span className="span">Visión</span>
                <hr className="line"/>
                <p className="paragraph">Garantizar la satisfacción de nuestros clientes, brindando diferentes alternativas en la celebración de sus fiestas y eventos en general, basados en la confianza y en la credibilidad, trabajando en equipo con un compromiso innovador manteniendo un estándar de calidad en todos nuestros productos .</p>
            </div>

        </div>

      </section>
    </>
  );
}

export default AboutUs;
