import React from "react";
import "./collage.scss";

const CollageEvents = ({ imagenes }) => {
  return (
    <div className="row__events">
      <div class="galeria">
        <div className="line1">
          <a href="#imagen1" >
            <img src={imagenes[0]} alt="" className="imagenes1" />
          </a>
          <a href="#imagen2">
            <img src={imagenes[1]} alt="" className="imagenes1" />
          </a>
          <a href="#imagen3">
            <img src={imagenes[2]} alt="" className="imagenes1" />
          </a>
        </div>

        {/* <a href="#imagen3" className="galeria__ancora">
          <img src={imagenes[2]} alt="" className="imagenes__iniciales2" />
        </a>
        <a href="#imagen4" className="galeria__ancora">
          <img src={imagenes[3]} alt="" className="imagenes__iniciales2" />
        </a>
        <a href="#imagen5" className="galeria__ancora">
          <img src={imagenes[4]} alt="" className="imagenes__iniciales2" />
        </a> */}
      </div>

      <div id="imagen1" class="galeria__grande">
        <a href="#imagen5">
          {" "}
          <span class="material-symbols-outlined">arrow_back_ios</span>
        </a>
        <img src={imagenes[0]} alt="" />
        <a href="#imagen2">
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </a>
        <a href="#cerrar" className="close">
          <span class="material-symbols-outlined">close</span>
        </a>
        <div id="cerrar"></div>
      </div>

      <div id="imagen2" class="galeria__grande">
        <a href="#imagen1">
          {" "}
          <span class="material-symbols-outlined">arrow_back_ios</span>
        </a>
        <img src={imagenes[1]} alt="" />
        <a href="#imagen3">
          {" "}
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </a>
        <a href="#cerrar" className="close">
          <span class="material-symbols-outlined">close</span>
        </a>
      </div>

      <div id="imagen3" class="galeria__grande">
        <a href="#imagen2">
          {" "}
          <span class="material-symbols-outlined">arrow_back_ios</span>
        </a>
        <img src={imagenes[2]} alt="" />
        <a href="#imagen4">
          {" "}
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </a>
        <a href="#cerrar" className="close">
          <span class="material-symbols-outlined">close</span>
        </a>
      </div>

      <div id="imagen4" class="galeria__grande">
        <a href="#imagen3">
          {" "}
          <span class="material-symbols-outlined">arrow_back_ios</span>
        </a>
        <img src={imagenes[3]} alt="" />
        <a href="#imagen5">
          {" "}
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </a>
        <a href="#cerrar" className="close">
          <span class="material-symbols-outlined">close</span>
        </a>
      </div>

      <div id="imagen5" class="galeria__grande">
        <a href="#imagen4">
          {" "}
          <span class="material-symbols-outlined">arrow_back_ios</span>
        </a>
        <img src={imagenes[4]} alt="" />
        <a href="#imagen1">
          {" "}
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </a>
        <a href="#cerrar" className="close">
          <span class="material-symbols-outlined arrow">close</span>
        </a>
      </div>
    </div>
  );
};

export default CollageEvents;
