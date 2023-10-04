import React from 'react'
import './footer.scss'
import logoBlack from "../../assets/image/logoSarahyBlack.png";
import facebook from "../../assets/image/face.png";
import instagram from "../../assets/image/ig.png";
import whatsapp from "../../assets/image/wpp.png";
import logoWhite from "../../assets/image/logo-blanco.png";
import { useNavigate } from 'react-router-dom';
import logo2 from '../../assets/image/logo.png';


const Footer = () => {
    const navigate = useNavigate()
    return (
        <footer id='miFooter' className="footer">
            <div className="footer__information">
                <h5 className='titulo__sec--footer'>CONTÁCTANOS</h5>
                <span className='span__footer1'>Celebraciones Sarahy</span>
                <span className='span__footer2'>Medellín-Colombia</span>
                <span className='span__footer3'>CEL: 3003003232</span>
                <span className='span__footer4'>E-MAIL:</span>
                <span className='span__footer5'>celebracionessarahy@gmail.com</span>
            </div>

            <div className="footer__information">
                <h5 className='titulo__sec--footer'>INFORMACIÓN</h5>
                <span className='span__footer6'>Quienes somos</span>
                <span className='span__footer7' onClick={() => navigate('/aliados')} >Alíate con nosotros</span>
                <span className='span__footer8' onClick={() => navigate('/administrador')}>Trabaja con nosotros</span>
            </div>

            <div className="followme">
                <h5>SIGUENOS</h5>
                <figure className="fig__logo">
                    <img className="img__logo" src={logoWhite} alt="" />
                </figure>
                <article className="networks">
                    <img className="img__network" src={facebook} alt="" />
                    <img className="img__network" src={instagram} alt="" />
                    <img className="img__network" src={whatsapp} alt="" href="https://api.whatsapp.com/send?phone=33003003232&text=Hola%20bienvenido%20a%20Sarahy%20te%20asesoramos%20por%20whatsapp%20gestiona%20tu%20evento%20por%20este%20canal." />
                </article>
            </div>

            <section className="footer-mobile">
                <img src={logoWhite}  className ="logo--mobile" alt="" />
                <article className="networks">
                    <img className="img__network" src={facebook} alt="" />
                    <img className="img__network" src={instagram} alt="" />
                    <img className="img__network" src={whatsapp} alt="" href="https://api.whatsapp.com/send?phone=33003003232&text=Hola%20bienvenido%20a%20Sarahy%20te%20asesoramos%20por%20whatsapp%20gestiona%20tu%20evento%20por%20este%20canal." />
                </article>
                <div className="contacto__footer">
                    <h5 className='contacto__footer--mobile'>CONTÁCTANOS</h5>
                    <span className='span__footer--mobile'>Medellín-Colombia</span>
                    <span className='span__footer--mobile'>3003003232</span>
                    <span className='span__footer--mobile'>celebracionessarahy@gmail.com</span>
                </div>

                <div className="footer__information--mobile">
                    <h5 className='titulo__sec--footer'>INFORMACIÓN</h5>
                    <span className='span__footer--mobile' onClick={() => navigate('/aliados')} >Alíate con nosotros</span>
                    <span className='span__footer--mobile' onClick={() => navigate('/administrador')}>Trabaja con nosotros</span>
                    <span className='span__footer--mobile'>Cotiza Aquí</span>
                </div>
                <hr className="linea__footer" />
                <span className='span__footer--mobile'>© 2023 Sarahy. Todos los derechos reservados.</span>
            </section>

        </footer>
    )
}

export default Footer;