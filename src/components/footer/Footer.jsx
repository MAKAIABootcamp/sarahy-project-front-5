import React from 'react'
import './footer.scss'
import logoBlack from "../../assets/images/logoSarahyBlack.png";
import facebook from "../../assets/images/face.png";
import instagram from "../../assets/images/ig.png";
import whatsapp from "../../assets/images/wpp.png";

const Footer = () => {
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
            <span>Alíate con nosotros</span>
            <span>Trabaja con nosotros</span> 
        </div>

        <div className="followme">
        <h5>SIGUENOS</h5>
        <figure className="fig__logo">
            <img className="img__logo" src={logoBlack} alt="" />
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