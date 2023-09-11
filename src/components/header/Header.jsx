import React from 'react'
import logo from '../../assets/image/logo.png'
import lupa from '../../assets/image/lupa.png'
import perfil from '../../assets/image/perfil.png'
import './header.scss'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
  return (
    <header className="header__home">
    <div className='header__info'>
        <span className='slogan'>Tu momento, nuestra pasión</span>
        <div className='header__icons'>
            <img src={lupa} alt="icono buscar" />
            <img src={perfil} alt="icono perfil" />
        </div>
    </div>
    <div className="header__logo">
        <img src={logo} alt="logo" className='logo__home'/>
        <nav className="header__nav">
            <ul className='header__list'>
                <li className='header__list--item'>Inicio</li>
                <li className='header__list--item' onClick={() => navigate('/prueba')}>Eventos sociales</li>
                <li className='header__list--item' onClick={() => navigate('/prueba')}>Eventos Empresariales</li>
                <li className='header__list--item'>Servicios</li>
                <li className='header__list--item'>Ubicaciones</li>
                <li className='header__list--item'>Quienes somos</li>
            </ul>
        </nav>
    </div>
</header>
  )
}

export default Header