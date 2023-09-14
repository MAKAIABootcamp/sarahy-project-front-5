import React from 'react'
import './footer.scss'
import logoBlack from "../../assets/image/logoSarahyBlack.png";
import facebook from "../../assets/image/face.png";
import instagram from "../../assets/image/ig.png";
import whatsapp from "../../assets/image/wpp.png";
import logoWhite from "../../assets/image/logo-blanco.png";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate()
    return (
        <footer className="footer">
            <div className="footer__information">
                <h5>CONTÁCTANOS</h5>
                <span>Celebraciones Sarahy</span>
                <span>Medellín-Colombia</span>
                <span>CEL: 3003003232</span>
                <span>E-MAIL:</span>
                <span>celebracionessarahy@gmail.com</span>
            </div>

            <div className="footer__information">
                <h5>INFORMACIÓN</h5>
                <span>Quienes somos</span>
                <span onClick={() => navigate('/aliados')} className='aliados'>Alíate con nosotros</span>
                <span>Trabaja con nosotros</span>
            </div>

            <div className="followme">
                <h5>SIGUENOS</h5>
                <figure className="fig__logo">
                    <img className="img__logo" src={logoWhite} alt="" />
                </figure>
                <article className="networks">
                    <img className="img__network" src={facebook} alt="" />
                    <img className="img__network" src={instagram} alt="" />
                    <img className="img__network" src={whatsapp} alt="" />
                </article>
            </div>

        </footer>
    )
}

export default Footer;