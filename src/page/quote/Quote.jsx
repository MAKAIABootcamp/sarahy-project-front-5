import React, { useState } from "react";
import "./quote.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useForm, Controller } from "react-hook-form";


const Quote = () => {
  const { register, handleSubmit, formState: { errors }  } = useForm();

  const [one, setOne] = useState(false); 
  const [Two, setTwo] = useState(false); 
  const [trhee, setThree] = useState(false); 
  const [four, setFour] = useState(false); 
  const [five, setFive] = useState(false); 
  const [six, setSix] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="sectionQuote">

      <main className="containerQuote">
        <span className="titleQuote">Cotización</span>
        <span className="lineTitle"></span>
        <p className="textQuote">
          ¡Gracias por considerarnos para tu próximo evento! Por favor,
          completa el siguiente formulario para obtener una cotización
          personalizada que se adapte a tus necesidades y haga que tu ocasión
          sea inolvidable!
        </p>

        <section className="formQuote">
        
            <form onSubmit={handleSubmit(onSubmit)} className="loginDown__form">

                <span className="loginLabel">Nombre/Empresa</span>
                <input type="text" id="empresa" {...register("name", { required: true })} placeholder="" className="loginDown__input" /> 
                {errors.name && <span className="loginDown__error">Este campo es obligatorio</span>}

                <span className="loginLabel">Contacto</span>
                <input type="number" id="contacto" {...register("contacto", { required: true })} placeholder="" className="loginDown__input" /> 
                {errors.contacto && <span className="loginDown__error">Este campo es obligatorio</span>}

                <span className="loginLabel">Email</span>
                <input type="email" id="contacto" {...register("email", { required: true })} placeholder="" className="loginDown__input" /> 
                {errors.email && <span className="loginDown__error">Este campo es obligatorio</span>}


                <span className="loginLabel">Fecha del Evento</span>
                <input type="date" id="date" {...register("date", { required: true })} placeholder="" className="loginDown__input" /> 
                {errors.date && <span className="loginDown__error">Este campo es obligatorio</span>}                
                
                <span className="loginLabel">Tipo de Evento</span>
                <input type="text" id="type__Event" {...register("type__Event", { required: true })} placeholder="" className="loginDown__input" /> 
                {errors.type__Event && <span className="loginDown__error">Este campo es obligatorio</span>}
                
                <span className="loginLabel">Número Estimado de Asistentes al Evento</span>
                <input type="number" id="attendees " {...register("attendees ", { required: true })} placeholder="" className="loginDown__input" /> 
                {errors.type__attendees  && <span className="loginDown__error">Este campo es obligatorio</span>}

                <span className="loginLabel">Número Estimado de Asistentes al Evento</span>
                <input type="number" id="attendees " {...register("attendees ", { required: true })} placeholder="" className="loginDown__input" /> 
                {errors.type__attendees  && <span className="loginDown__error">Este campo es obligatorio</span>}


                <span className="loginLabel">Seleccionar Ubicación</span> <select id="location" {...register("location", { required: true })} className="loginDown__input"> <option value="">Ninguna</option> <option value="bogota">Bogotá</option> <option value="medellin">Medellín</option> <option value="cali">Cali</option> <option value="cartagena">Cartagena</option> </select> {errors.location && <span className="loginDown__error">Este campo es obligatorio</span>}

                <span className="selectServices">Selecciona los Servicios Deseados</span>

                
                <span className="loginLabel">1. Catering <img onClick={() => setOne(!one)} src={!one ? 'https://res.cloudinary.com/dibw7aluj/image/upload/v1694702149/expand_more_FILL0_wght400_GRAD0_opsz24_dhc0o5.svg':'https://res.cloudinary.com/dibw7aluj/image/upload/v1694702128/expand_less_FILL0_wght400_GRAD0_opsz24_g48cub.svg'} alt="up" /></span>
{ one &&                <div className="service">
                    <div className="service__options"> 
                        <span>

                            <input type="checkbox" id="vegana" name="catering[]" value="vegana" {...register("catering", { required: true })}/>
                            <label for="vegana">Vegana</label>

                        </span>

                        <span>
                            <input type="checkbox" id="carne" name="catering[]" value="carne" {...register("catering", { required: true })}/> 
                            <label for="carne">Carne</label> 
                        </span>

                        <span>

                            <input type="checkbox" id="pollo" name="catering[]" value="pollo" {...register("catering", { required: true })}/> 
                            <label for="pollo">Pollo</label> 

                        </span>

                        <span>
                        <input type="checkbox" id="pescado" name="catering[]" value="pescado" {...register("catering", { required: true })}/>
                        <label for="pescado">Pescado</label> 
                        </span>

                        <span>

                        <input type="checkbox" id="frutas" name="catering[]" value="frutas" {...register("catering", { required: true })}/> 
                        <label for="frutas">Frutas</label> 

                        </span>


                        
                    </div> 

                </div>}

                <span className="loginLabel">2. Fotografía <img onClick={() => setTwo(!Two)} src={!Two ? 'https://res.cloudinary.com/dibw7aluj/image/upload/v1694702149/expand_more_FILL0_wght400_GRAD0_opsz24_dhc0o5.svg':'https://res.cloudinary.com/dibw7aluj/image/upload/v1694702128/expand_less_FILL0_wght400_GRAD0_opsz24_g48cub.svg'} alt="up" /></span>
{ Two &&                <div className="service">
                    <div className="service__options"> 
                        <span>

                            <input type="checkbox" id="Video" name="fotografia[]" value="Video" {...register("fotografia", { required: true })}/>
                            <label for="Video">Video</label>

                        </span>

                        <span>
                            <input type="checkbox" id="animaciones" name="fotografia[]" value="animaciones" {...register("fotografia", { required: true })}/> 
                            <label for="animaciones">Animaciones</label> 
                        </span>

                        <span>

                            <input type="checkbox" id="fotoRetro" name="fotografia[]" value="fotoRetro" {...register("fotografia", { required: true })}/> 
                            <label for="fotoRetro">Foto Retro</label> 

                        </span>

                        <span>
                        <input type="checkbox" id="album" name="fotografia[]" value="album" {...register("fotografia", { required: true })}/>
                        <label for="album">Album</label> 
                        </span>

                        <span>

                        <input type="checkbox" id="foto360" name="fotografia[]" value="foto360" {...register("fotografia", { required: true })}/> 
                        <label for="foto360">Fotos 360°</label> 

                        </span>


                        
                    </div> 

                </div>}



                    <span className="loginLabel">3. Decoración <img onClick={() => setThree(!trhee)} src={!trhee ? 'https://res.cloudinary.com/dibw7aluj/image/upload/v1694702149/expand_more_FILL0_wght400_GRAD0_opsz24_dhc0o5.svg':'https://res.cloudinary.com/dibw7aluj/image/upload/v1694702128/expand_less_FILL0_wght400_GRAD0_opsz24_g48cub.svg'} alt="up" /></span>

{       trhee &&             <div className="service__options"> 
    <span>
        <input type="checkbox" id="pintura" value="pintura" {...register("decoracion")}/> 
        <label for="pintura">Pintura</label> 
    </span>
    
    <span>
        <input type="checkbox" id="globos" value="globos" {...register("decoracion")}/> 
        <label for="globos">Globos</label> 
    </span>

    <span>
        <input type="checkbox" id="luces" value="luces" {...register("decoracion")}/> 
        <label for="luces">Luces</label> 
    </span>

    <span>
        <input type="checkbox" id="sillas" value="sillas" {...register("decoracion")}/> 
        <label for="sillas">Sillas</label> 
    </span>

    <span>
        <input type="checkbox" id="mesas" value="mesas" {...register("decoracion")}/> 
        <label for="mesas">Mesas</label> 
    </span>
</div>  }

                    <span className="loginLabel" onClick={() => setFour(!four)}>4. Animación <img src={!four ? 'https://res.cloudinary.com/dibw7aluj/image/upload/v1694702149/expand_more_FILL0_wght400_GRAD0_opsz24_dhc0o5.svg':'https://res.cloudinary.com/dibw7aluj/image/upload/v1694702128/expand_less_FILL0_wght400_GRAD0_opsz24_g48cub.svg'} alt="up" /></span>



                         { four && <div className= "service__options"> 
                        
                            <span>
                                    <input type="checkbox" id="payaso" name="animacion[]" value="payaso" {...register("animacion")}/> 
                                    <label for="payaso">Payaso</label> 

                            </span>

                            <span>
                                <input type="checkbox" id="magia" name="animacion[]" value="magia" {...register("animacion")}/> <label for="magia">Magia</label> 
                            </span>

                            <span>
                                    <input type="checkbox" id="musica" name="animacion[]" value="musica" {...register("animacion")}/> 
                                    <label for="musica">Música</label> 
                            </span>

                            <span>
                                    <input type="checkbox" id="baile" name="animacion[]" value="baile" {...register("animacion")}/> 
                                        <label for="baile">Baile</label> 

                            </span>
                            

                        </div> }


                    <span className="loginLabel">5. Iluminación <img onClick={() => setFive(!five)} src={!five ? 'https://res.cloudinary.com/dibw7aluj/image/upload/v1694702149/expand_more_FILL0_wght400_GRAD0_opsz24_dhc0o5.svg':'https://res.cloudinary.com/dibw7aluj/image/upload/v1694702128/expand_less_FILL0_wght400_GRAD0_opsz24_g48cub.svg'} alt="up" /></span>

{ five &&                   <div className="service__options"> 
    <span>
        <input type= "checkbox" id= "leds" value= "leds"{...register("ilumination")}/> 
        <label for= "leds">Leds</label> 
    </span>
    
    <span>
        <input type= "checkbox"id= "velas"value= "velas"{...register("ilumination")}/> 
        <label for= "velas">Velas</label> 
    </span>

    <span>
        <input type= "checkbox"id= "focos"value= "focos"{...register("ilumination")}/> 
        <label for= "focos">Focos</label> 
    </span>

    <span>
        <input type= "checkbox"id= "laser"value= "laser"{...register("ilumination")}/> 
        <label for= "laser">Láser</label> 
    </span>

    <span>
        <input type= "checkbox"id= "neon"value= "neon"{...register("ilumination")}/> 
        <label for= "neon">Neón</label> 
    </span>
</div>}



                    <span className="loginLabel">6. Música y Dj <img onClick={() => setSix(!six)} src={!six ? 'https://res.cloudinary.com/dibw7aluj/image/upload/v1694702149/expand_more_FILL0_wght400_GRAD0_opsz24_dhc0o5.svg':'https://res.cloudinary.com/dibw7aluj/image/upload/v1694702128/expand_less_FILL0_wght400_GRAD0_opsz24_g48cub.svg'} alt="up" /></span>

                    
{six && <div className="service__options"> 
    <span>
        <input type= "checkbox" id= "rock" value= "rock"{...register("music")}/> 
        <label for= "rock">Rock</label> 
    </span>
    
    <span>
        <input type= "checkbox"id= "pop"name= "pop"value= "pop"{...register("music")}/> 
        <label for= "pop">Pop</label> 
    </span>

    <span>
        <input type= "checkbox"id= "reggaeton"name= "reggaeton"value= "reggaeton"{...register("music")}/> 
        <label for= "reggaeton">Reggaetón</label> 
    </span>

    <span>
        <input type= "checkbox"id= "electronica"name= "electronica"value= "electronica"{...register("music")}/> 
        <label for= "electronica">Electrónica</label> 
    </span>

    <span>
        <input type= "checkbox"id= "salsa"name= "salsa"value= "salsa"{...register("music")}/> 
        <label for= "salsa">Salsa</label> 
    </span>
</div>}
                <button type="submit" className="generation">Generar Cotización</button>
            </form>


        </section>
      </main>
    </section>
  );
};

export default Quote;
