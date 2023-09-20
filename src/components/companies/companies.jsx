import React from "react";
import "./companies.scss";
import empresas from "../../assets/image/empresas.jpg";
import fiestaEmpresarial from "../../assets/image/fiestaempresa.jpg";
import fiestaProducto from "../../assets/image/presentacion.jpg";
import conferencias from "../../assets/image/conferencias.jpg";

function Companies() {
  return (
    <>
      <section className="title__companies">
        <h2 className="title">Eventos Empresariales</h2>
        <hr className="line__companies" />
      </section>

      <section className="section__companies">
        <figure className="figure__companies">
          <img src={empresas} alt="" className="img" />
        </figure>

        <div className="details__companies">
          <p className="paragraph">
            "¿Listos para un evento empresarial inolvidable? En Celebraciones
            Sarahy, hacemos realidad tus ideas para fortalecer tu equipo y
            celebrar el éxito de tu empresa. ¡Hagámoslo juntos!"
          </p>
          {/* <span className="span">Nuestros servicios</span> */}
          {/* <hr className="line" /> */}
        </div>

        <div className="cards">
          <div className="two__cards">
            <article className="details__cards">
              <figure className="fig">
                <img className="img" src={fiestaEmpresarial} alt="" />
              </figure>
              <span className="span">Fiestas empresariales</span>
            </article>

            <article className="details__cards">
              <figure className="fig">
                <img className="img" src={fiestaProducto} alt="" />
              </figure>
              <span className="span">Lanzamiento de marca</span>
            </article>
          </div>

          <div className="one__card">
            <article className="details__cards2">
              <figure className="fig">
                <img className="img" src={conferencias} alt="" />
              </figure>
              <span className="span">Conferenciass</span>
            </article>
          </div>

          <div className="two__cards">
            <article className="details__cards">
              <figure className="fig">
                <img className="img" src={fiestaEmpresarial} alt="" />
              </figure>
              <span className="span">Fiestas empresariales</span>
            </article>

            <article className="details__cards">
              <figure className="fig">
                <img className="img" src={fiestaProducto} alt="" />
              </figure>
              <span className="span">Lanzamiento de marca</span>
            </article>
          </div>
        </div>

        <div className="general__information">
            <span>Vamos a donde lo necesites</span>

        </div>
      </section>
    </>
  );
}

export default Companies;
