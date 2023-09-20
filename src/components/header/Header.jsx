import React from 'react'
import perfil1 from '../../assets/image/pefil1.png'
import lupa from '../../assets/image/lupaBlack.png'
import { useNavigate } from 'react-router-dom'
import './header.scss'

const Header = () => {
    const navigate = useNavigate()
    return (
        <header className="header__home">
            <div className='header__info'>
                <span className='slogan'>Tu momento, nuestra pasión</span>
                <div className='header__icons'>
                    <img src={lupa} alt="icono buscar" onClick={() => navigate('/perfil')} className='buscar'/>
                    <img src={perfil1} alt="icono perfil" onClick={() => navigate('/ingresar')} className='perfil'/>
                </div>
            </div>
        </header>
    )
}

export default Header
