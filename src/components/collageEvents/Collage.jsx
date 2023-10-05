import React from "react";
import "./collage.scss";

const CollageEvents = ({ imagenes }) => {
  return (
    <div className="row__events">
      <div className="galeria">

        <div className="line1">
          <a href="#imagen1" >
            <img src={imagenes[0]} alt="" className="imagenes1" />
          </a>
          <a href="#imagen2">
            <img src={imagenes[1]} alt="" className="imagenes2" />
          </a>
          <a href="#imagen3">
            <img src={imagenes[2]} alt="" className="imagenes3" />
          </a>
          <a href="#imagen4">
            <img src={imagenes[3]} alt="" className="imagenes4" />
          </a>
        </div>

        <div className="line2">
          <a href="#imagen5" >
            <img src={imagenes[4]} alt="" className="imagenes1" />
          </a>
          <a href="#imagen6">
            <img src={imagenes[5]} alt="" className="imagenes2" />
          </a>
          <a href="#imagen7">
            <img src={imagenes[6]} alt="" className="imagenes3" />
          </a>
          <a href="#imagen8">
            <img src={imagenes[7]} alt="" className="imagenes4" />
          </a>
          <a href="#imagen9">
            <img src={imagenes[8]} alt="" className="imagenes5" />
          </a>
        </div>


        
        <div className="line3">
          <a href="#imagen8">
            <img src={imagenes[7]} alt="" className="imagenes4" />
          </a>
          <a href="#imagen9">
            <img src={imagenes[8]} alt="" className="imagenes5" />
          </a>
        </div>

      </div>

      <div id="imagen1" className="galeria__grande">
        <a href="#imagen5">
          {" "}
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </a>
        <img src={imagenes[0]} alt="" />
        <a href="#imagen2">
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </a>
        <a href="#cerrar" className="close">
          <span className="material-symbols-outlined">close</span>
        </a>
        <div id="cerrar"></div>
      </div>

      <div id="imagen2" className="galeria__grande">
        <a href="#imagen1">
          {" "}
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </a>
        <img src={imagenes[1]} alt="" />
        <a href="#imagen3">
          {" "}
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </a>
        <a href="#cerrar" className="close">
          <span className="material-symbols-outlined">close</span>
        </a>
      </div>

      <div id="imagen3" className="galeria__grande">
        <a href="#imagen2">
          {" "}
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </a>
        <img src={imagenes[2]} alt="" />
        <a href="#imagen4">
          {" "}
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </a>
        <a href="#cerrar" className="close">
          <span className="material-symbols-outlined">close</span>
        </a>
      </div>

      <div id="imagen4" className="galeria__grande">
        <a href="#imagen3">
          {" "}
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </a>
        <img src={imagenes[3]} alt="" />
        <a href="#imagen5">
          {" "}
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </a>
        <a href="#cerrar" className="close">
          <span className="material-symbols-outlined">close</span>
        </a>
      </div>

      <div id="imagen5" className="galeria__grande">
        <a href="#imagen4">
          {" "}
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </a>
        <img src={imagenes[4]} alt="" />
        <a href="#imagen6">
          {" "}
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </a>
        <a href="#cerrar" className="close">
          <span className="material-symbols-outlined arrow">close</span>
        </a>
      </div>

      <div id="imagen6" className="galeria__grande">
        <a href="#imagen5">
          {" "}
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </a>
        <img src={imagenes[5]} alt="" />
        <a href="#imagen7">
          {" "}
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </a>
        <a href="#cerrar" className="close">
          <span className="material-symbols-outlined arrow">close</span>
        </a>
      </div>

      <div id="imagen7" className="galeria__grande">
        <a href="#imagen6">
          {" "}
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </a>
        <img src={imagenes[6]} alt="" />
        <a href="#imagen8">
          {" "}
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </a>
        <a href="#cerrar" className="close">
          <span className="material-symbols-outlined arrow">close</span>
        </a>
      </div>

      <div id="imagen8" className="galeria__grande">
        <a href="#imagen7">
          {" "}
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </a>
        <img src={imagenes[7]} alt="" />
        <a href="#imagen9">
          {" "}
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </a>
        <a href="#cerrar" className="close">
          <span className="material-symbols-outlined arrow">close</span>
        </a>
      </div>

      <div id="imagen9" className="galeria__grande">
        <a href="#imagen8">
          {" "}
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </a>
        <img src={imagenes[8]} alt="" />
        <a href="#imagen1">
          {" "}
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </a>
        <a href="#cerrar" className="close">
          <span className="material-symbols-outlined arrow">close</span>
        </a>
      </div>
    </div>
  );
};

export default CollageEvents;
