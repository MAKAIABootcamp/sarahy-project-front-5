import React from "react";
import "./quote.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useForm, Controller } from "react-hook-form";


const Quote = () => {
  const { register, handleSubmit, formState: { errors }  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="sectionQuote">
      <Header />
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

                
                <span className="loginLabel">1. Catering</span>
                <div className="service">
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

                </div>

                <span className="loginLabel">2. Fotografía</span>

                    
                    <div className="service__options"> 
                    
                        <span>

                            <input type="radio" id="si-foto" name="fotografia" value="si-foto" {...register("fotografia")}/> 
                            <label for="si-foto">Sí</label> 

                        </span>

                        <span>

                            <input type="radio" id="no-foto" name="fotografia" value="no-foto" {...register("fotografia")}/> 
                            <label for="no-foto">No</label>

                        </span>
                
                    </div> 

                    <span className="loginLabel">3. Decoración</span>

                    <div className="service__options"> 
                        <span>

                            <input type= "radio" id= "si-deco" name= "decoracion" value= "si-deco"{...register("decoracion")}/> 
                            <label for= "si-deco">Sí</label> 

                        </span>
                        
                        <span>

                            <input type= "radio"id= "no-deco"name= "decoracion"value= "no-deco"{...register("decoracion")}/> 
                            <label for= "no-deco">No</label> 

                        </span>
                    </div>

                    <span className="loginLabel">4. Animación</span>



                    <div class= "service__options"> 
                       
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
                        

                    </div> 


                    <span className="loginLabel">5. Iluminación</span>

                    <div className="service__options"> 
                        <span>

                            <input type= "radio" id= "si-ilumination" name= "decoracion" value= "si-ilumination"{...register("ilumination")}/> 
                            <label for= "si-ilumination">Sí</label> 

                        </span>
                        
                        <span>

                            <input type= "radio"id= "no-ilumination"name= "ilumination"value= "no-ilumination"{...register("ilumination")}/> 
                            <label for= "no-ilumination">No</label> 

                        </span>
                    </div>


                    <span className="loginLabel">6. Música y Dj</span>

                    <div className="service__options"> 
                        <span>

                            <input type= "radio" id= "si-music" name= "music" value= "si-music"{...register("music")}/> 
                            <label for= "si-music">Sí</label> 

                        </span>
                        
                        <span>

                            <input type= "radio"id= "no-music"name= "music"value= "no-music"{...register("music")}/> 
                            <label for= "no-music">No</label> 

                        </span>
                    </div>
                <span type="submit" className="generation">Generar Cotización</span>
            </form>


        </section>
      </main>
      <Footer />
    </section>
  );
};

export default Quote;
