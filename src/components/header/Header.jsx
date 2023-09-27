import React from 'react'
import perfil1 from '../../assets/image/pefil1.png'
import lupa from '../../assets/image/lupaBlack.png'
import { useNavigate } from 'react-router-dom'
import logo from "../../assets/image/logo-blanco.png";
import './header.scss'



const Header = () => {
    const navigate = useNavigate()
    return (
        <header className="header__home">
            <div className='header__info'>
                <span className='slogan'>Tu momento, nuestra pasión</span>
                <div className='header__icons'>
                    <img src={lupa} alt="icono buscar" onClick={() => navigate('/perfil')} className='buscar' />
                    <img src={perfil1} alt="icono perfil" onClick={() => navigate('/ingresar')} className='perfil' />

                    <label class="switchBtn">
                        <input type="checkbox" name="" id="" />
                            <div class="slide">lingth   On</div>
                    </label>

                </div>
            </div>
            <div className="header__transparent">
                <nav clasName="header__navbar">
                    <ul className='header__navbar--lista'>
                        <li className='navbar__items' onClick={() => { navigate("/") }}>Inicio</li>
                        <li className='navbar__items' >Eventos sociales</li>
                        <li className='navbar__items'>Eventos empresariales</li>
                        <li className='navbar__items--logo'>{<img src={logo} className='logo__item--img' />}</li>
                        <li className='navbar__items'>Seamos aliados</li>
                        <li className='navbar__items'>Contáctanos</li>
                        <li className='navbar__items'>Cotiza aquí</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
