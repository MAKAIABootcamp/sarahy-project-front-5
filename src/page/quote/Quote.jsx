import React, { useEffect, useState } from "react";
// import { isWeekend } from "date-fns";
import "./quote.scss";
import { useForm, Controller } from "react-hook-form";
import { addNewQuote } from "../../services/addNewQuote";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useNavigate } from "react-router-dom";

const Quote = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [totalQuote, setTotalQuote] = useState(0);
    const [one, setOne] = useState(false);
    const [Two, setTwo] = useState(false);
    const [trhee, setThree] = useState(false);
    const [four, setFour] = useState(false);
    const [five, setFive] = useState(false);
    const [six, setSix] = useState(false);
    const [weekend, setWeekend] = useState(false);
    const attendees = watch("attendees", 0);
    const catering = watch('catering', [])
    const photograpy = watch('fotografia', [])
    const decor = watch('decoracion', [])
    const animation = watch('animacion', [])
    const ilumination = watch('ilumination', [])
    const dateSelected = watch('date', '');
    const music = watch('music', []);


    useEffect(() => {
        console.log('La fecha seleccionada es: ', dateSelected, '. ');
        const selectedDate = new Date(dateSelected);
        // const isWeekendDate = isWeekend(selectedDate);
        // isWeekendDate ? console.log('Es Fin de Semana') : console.log('Es Día de Semana.');
    }, [dateSelected]);

    const prices = {
        catering: {
            vegana: 15000,
            carne: 20000,
            pollo: 18000,
            pescado: 25000,
            frutas: 5000
        },
        photograpy: {
            Video: 15000,
            animaciones: 20000,
            fotoRetro: 18000,
            album: 25000,
            foto360: 5000
        },
        decor: {
            pintura: 15000,
            globos: 20000,
            luces: 18000,
            sillas: 25000,
            mesas: 5000
        },
        animation: {
            payaso: 15000,
            magia: 20000,
            musica: 18000,
            baile: 25000,
        },
        ilumination: {
            leds: 15000,
            velas: 20000,
            focos: 18000,
            laser: 25000,
            neon: 5000
        },
        music: {
            rock: 15000,
            pop: 20000,
            reggaeton: 18000,
            electronica: 25000,
            salsa: 5000
        },


        // otros servicios y opciones con sus precios
    };

    const navigate = useNavigate()

    

   
    const [total, setTotal] = useState(0);
    useEffect(() => {
        let total = 0;

        console.log('EL CATERING ES: ', catering);
        console.log('Su lenght es: ', catering.lenght)
        if (catering.length > 0) {
            for (let option of catering) {
                // suma al total el precio de la opción multiplicado por el número de asistentes
                total += prices.catering[option] * attendees;

            }


        }

        if (photograpy.length > 0) {
            for (let option of photograpy) {
                // suma al total el precio de la opción multiplicado por el número de asistentes
                total += prices.photograpy[option];
            }

        }


        if (decor.length > 0) {

            for (let option of decor) {
                // suma al total el precio de la opción multiplicado por el número de asistentes
                total += prices.decor[option];
            }

        }

        if (animation.length > 0) {
            for (let option of animation) {
                // suma al total el precio de la opción multiplicado por el número de asistentes
                total += prices.animation[option];
                console.log('AAAAAAA', prices.animation[option])
            }

        }


        if (ilumination.length > 0) {
            for (let option of ilumination) {
                // suma al total el precio de la opción multiplicado por el número de asistentes
                total += prices.ilumination[option];
            }
        }

        if (music.length > 0) {

            for (let option of music) {
                // suma al total el precio de la opción multiplicado por el número de asistentes
                total += prices.music[option];
            }


        }

        console.log('El total es: ', total);
        setTotalQuote(total);


    }


        , [catering, attendees, photograpy, decor, animation, ilumination, music]);
    useEffect(() => console.log('INVITADOS: ', attendees), [attendees])
    const onSubmit = (data) => {
        data.total = totalQuote;
        console.log(data);

        const saveQuote = async () => {
            await addNewQuote('JlQjLzQgnyNH27JozbhUv28atw22', data);
        }

        saveQuote();
    };




    return (
        <section className="sectionQuote dark:bg-neutral-700">

            <img className='backGroundHeader' src="https://i.ibb.co/fXLf97G/image-127.png" alt="Fondo de Wedding" />

            <main className="containerQuote dark:bg-neutral-800">
                <span className="titleQuote dark:text-neutral-100">Cotización</span>
                <span className="lineTitle"></span>
                <p className="textQuote dark:text-neutral-300">
                    ¡Gracias por considerarnos para tu próximo evento! Por favor,
                    completa el siguiente formulario para obtener una cotización
                    personalizada que se adapte a tus necesidades y haga que tu ocasión
                    sea inolvidable!
                </p>

                <section className="formQuote">

                    <form onSubmit={handleSubmit(onSubmit)} className="loginDown__form dark:bg-neutral-400" >

                        {/* <span className="loginLabel"></span> */}
                        <input type="text" id="empresa" {...register("name", { required: true })} placeholder="Nombre/Empresa" className="loginDown__input" />
                        {errors.name && <span className="loginDown__error">Este campo es obligatorio</span>}

                        {/* <span className="loginLabel">Contacto</span> */}
                        <input type="number" id="contacto" {...register("contacto", { required: true })} placeholder="Contacto" className="loginDown__input" />
                        {errors.contacto && <span className="loginDown__error">Este campo es obligatorio</span>}

                        {/* <span className="loginLabel">Email</span> */}
                        <input type="email" id="contacto" {...register("email", { required: true })} placeholder="Email" className="loginDown__input" />
                        {errors.email && <span className="loginDown__error">Este campo es obligatorio</span>}


                        {/* <span className="loginLabel">Fecha del Evento</span> */}
                        <input type="date" id="date" {...register("date", { required: true })} placeholder="Fecha del Evento" className="loginDown__input" />
                        {errors.date && <span className="loginDown__error">Este campo es obligatorio</span>}

                        {/* <span className="loginLabel">Tipo de Evento</span> */}
                        <input type="text" id="type__Event" {...register("type__Event", { required: true })} placeholder="Tipo de Evento" className="loginDown__input" />
                        {errors.type__Event && <span className="loginDown__error">Este campo es obligatorio</span>}

                        {/* <span className="loginLabel">Número Estimado de Asistentes al Evento</span> */}
                        <input type="number" onChange={(e) => {
                            console.log('Input value changed:', e.target.value);
                            handleAttendeesChange(e);
                        }} id="attendees" {...register("attendees", { required: true })} placeholder="Número Estimado de Asistentes al Evento" className="loginDown__input" />
                        {errors.attendees && <span className="loginDown__error">Este campo es obligatorio</span>}




                        {/* <span className="loginLabel">Seleccionar Ubicación</span>  */}
                        <select id="location" {...register("location", { required: true })} className="loginDown__input"> <option value="">Ubicación</option> <option value="bogota">Bogotá</option> <option value="medellin">Medellín</option> <option value="cali">Cali</option> <option value="cartagena">Cartagena</option> </select> {errors.location && <span className="loginDown__error">Este campo es obligatorio</span>}

                        <span className="selectServices">SELECCIONA LOS SERVICIOS QUE DESEAS EN EL EVENTO</span>


                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}

                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper swiperQuote" >


                            <SwiperSlide className="sliderForm">
                                <img className='imageSliderForm' src="https://i.ibb.co/g9j4DKT/image-128.png" alt="imagen de bodas" />

                                <section className="optionsSliderForm">
                                    <span className="loginLabel"> Catering </span>

                                    <div className="service">
                                        <div className="service__options">
                                            <span>

                                                <input type="checkbox" id="vegana" name="catering[]" value="vegana" {...register("catering", { required: true })} />
                                                <label className="titleOptionService" for="vegana">Alimentación (porción de arroz, proteína, ensalada, postre y bebid)  </label>

                                            </span>

                                            <span>
                                                <input type="checkbox" id="carne" name="catering[]" value="carne" {...register("catering", { required: true })} />
                                                <label className="titleOptionService" for="carne">Adición de proteína </label>
                                            </span>

                                            <span>

                                                <input type="checkbox" id="pollo" name="catering[]" value="pollo" {...register("catering", { required: true })} />
                                                <label className="titleOptionService" for="pollo">Pasabocas </label>

                                            </span>

                                            <span>
                                                <input type="checkbox" id="pescado" name="catering[]" value="pescado" {...register("catering", { required: true })} />
                                                <label className="titleOptionService" for="pescado">Reposteria</label>
                                            </span>

                                            <span>

                                                <input type="checkbox" id="frutas" name="catering[]" value="frutas" {...register("catering", { required: true })} />
                                                <label className="titleOptionService" for="frutas">Frutas</label>

                                            </span>



                                        </div>

                                    </div>
                                </section>
                            </SwiperSlide>

                             <SwiperSlide className="sliderForm">

                                <img className='imageSliderForm' src="https://images.unsplash.com/photo-1495745966610-2a67f2297e5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="imagen de bodas" />

                                <section className="optionsSliderForm">
                                    <span className="loginLabel">Fotografía</span>
                                    <div className="service">
                                        <div className="service__options">
                                            <span>

                                                <input type="checkbox" id="Video" name="fotografia[]" value="Video" {...register("fotografia", { required: true })} />
                                                <label for="Video">Video</label>

                                            </span>

                                            <span>
                                                <input type="checkbox" id="animaciones" name="fotografia[]" value="animaciones" {...register("fotografia", { required: true })} />
                                                <label for="animaciones">Animaciones</label>
                                            </span>

                                            <span>

                                                <input type="checkbox" id="fotoRetro" name="fotografia[]" value="fotoRetro" {...register("fotografia", { required: true })} />
                                                <label for="fotoRetro">Foto Retro</label>

                                            </span>

                                            <span>
                                                <input type="checkbox" id="album" name="fotografia[]" value="album" {...register("fotografia", { required: true })} />
                                                <label for="album">Album</label>
                                            </span>

                                            <span>

                                                <input type="checkbox" id="foto360" name="fotografia[]" value="foto360" {...register("fotografia", { required: true })} />
                                                <label for="foto360">Fotos 360°</label>

                                            </span>



                                        </div>

                                    </div>
                                </section>
                            </SwiperSlide> 

                            <SwiperSlide className="sliderForm">
                                <img className='imageSliderForm' src="https://images.unsplash.com/photo-1554778414-74925d96d495?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80" alt="imagen de bodas" />

                                <section className="optionsSliderForm">
                                    <span className="loginLabel">Decoración</span>

                                    <div className="service__options">
                                        <span>
                                            <input type="checkbox" id="pintura" value="pintura" {...register("decoracion")} />
                                            <label for="pintura">Pintura</label>
                                        </span>

                                        <span>
                                            <input type="checkbox" id="globos" value="globos" {...register("decoracion")} />
                                            <label for="globos">Globos</label>
                                        </span>

                                        <span>
                                            <input type="checkbox" id="luces" value="luces" {...register("decoracion")} />
                                            <label for="luces">Luces</label>
                                        </span>

                                        <span>
                                            <input type="checkbox" id="sillas" value="sillas" {...register("decoracion")} />
                                            <label for="sillas">Sillas</label>
                                        </span>

                                        <span>
                                            <input type="checkbox" id="mesas" value="mesas" {...register("decoracion")} />
                                            <label for="mesas">Mesas</label>
                                        </span>
                                    </div>
                                </section>
                            </SwiperSlide>


                            <SwiperSlide className="sliderForm">
                                <img className='imageSliderForm' src="https://images.unsplash.com/photo-1438762398043-ac196c2fa1e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="imagen de bodas" />



                                <section className="optionsSliderForm">
                                    <span className="loginLabel" onClick={() => setFour(!four)}>Animación</span>
                                    <div className="service__options">

                                        <span>

                                            <input type="checkbox" id="payaso" name="animacion[]" value="payaso" {...register("animacion")} />
                                            <label for="payaso">Payaso</label>

                                        </span>

                                        <span>
                                            <input type="checkbox" id="magia" name="animacion[]" value="magia" {...register("animacion")} /> <label for="magia">Magia</label>
                                        </span>

                                        <span>
                                            <input type="checkbox" id="musica" name="animacion[]" value="musica" {...register("animacion")} />
                                            <label for="musica">Música</label>
                                        </span>

                                        <span>
                                            <input type="checkbox" id="baile" name="animacion[]" value="baile" {...register("animacion")} />
                                            <label for="baile">Baile</label>

                                        </span>


                                    </div>
                                </section>
                            </SwiperSlide>


                            <SwiperSlide className="sliderForm">
                                <img className='imageSliderForm' src="https://images.unsplash.com/photo-1562575214-da9fcf59b907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1372&q=80" alt="imagen de bodas" />

                                <section className="optionsSliderForm">
                                    <span className="loginLabel"> Iluminación </span>

                                    <div className="service__options">
                                        <span>
                                            <input type="checkbox" id="leds" value="leds"{...register("ilumination")} />
                                            <label for="leds">Leds</label>
                                        </span>

                                        <span>
                                            <input type="checkbox" id="velas" value="velas"{...register("ilumination")} />
                                            <label for="velas">Velas</label>
                                        </span>

                                        <span>
                                            <input type="checkbox" id="focos" value="focos"{...register("ilumination")} />
                                            <label for="focos">Focos</label>
                                        </span>

                                        <span>
                                            <input type="checkbox" id="laser" value="laser"{...register("ilumination")} />
                                            <label for="laser">Láser</label>
                                        </span>

                                        <span>
                                            <input type="checkbox" id="neon" value="neon"{...register("ilumination")} />
                                            <label for="neon">Neón</label>
                                        </span>
                                    </div>

                                </section>
                            </SwiperSlide>

                            <SwiperSlide className="sliderForm">
                                <img className='imageSliderForm' src="https://plus.unsplash.com/premium_photo-1682391039360-01afb6ffc72f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGp8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="imagen de bodas" />

                                <section className="optionsSliderForm">
                                    <span className="loginLabel"> Música y Dj </span>

                                    <div className="service__options">
                                        <span>
                                            <input type="checkbox" id="rock" value="rock"{...register("music")} />
                                            <label for="rock">Rock</label>
                                        </span>

                                        <span>
                                            <input type="checkbox" id="pop" name="pop" value="pop"{...register("music")} />
                                            <label for="pop">Pop</label>
                                        </span>

                                        <span>
                                            <input type="checkbox" id="reggaeton" name="reggaeton" value="reggaeton"{...register("music")} />
                                            <label for="reggaeton">Reggaetón</label>
                                        </span>

                                        <span>
                                            <input type="checkbox" id="electronica" name="electronica" value="electronica"{...register("music")} />
                                            <label for="electronica">Electrónica</label>
                                        </span>

                                        <span>
                                            <input type="checkbox" id="salsa" name="salsa" value="salsa"{...register("music")} />
                                            <label for="salsa">Salsa</label>
                                        </span>
                                    </div>
                                </section>
                            </SwiperSlide> 
                        </Swiper>

                        <button type="submit" className="generation" onClick={() => navigate("/Cotizacion")}>Generar Cotización</button>
                        
                    </form>


                </section>
            </main>
        </section>
    );
};

export default Quote;
