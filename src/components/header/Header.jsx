import React from 'react'
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
                    <img src={lupa} alt="icono buscar" onClick={() => navigate('/perfil')} className='buscar'/>
                    <img src={perfil} alt="icono perfil" onClick={() => navigate('/ingresar')} className='perfil'/>
                </div>
            </div>
        </header>
    )
}

export default Header
