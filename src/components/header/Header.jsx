import React, { useEffect, useState } from 'react'
import perfil1 from '../../assets/image/pefil1.png'
import lupa from '../../assets/image/lupaBlack.png'
import { useNavigate } from 'react-router-dom'
import logo from "../../assets/image/logo-blanco.png";
import './header.scss';
import { useForm } from 'react-hook-form';


const Header = () => {
  const navigate = useNavigate()
    const [theme, setTheme] = useState(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          return "dark";
        }
    
        return "light";
      });
    
      useEffect(() => {
        if (theme === "dark") {
          document.querySelector("html").classList.add("dark");
        } else {
          document.querySelector("html").classList.remove("dark");
        }
      }, [theme]);
    
      const handleChangeTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
      };
    const [search, setSearch] = useState(true);


    const { register, setValue } = useForm();

    const elementsSearch = ['Boda', 'Cumpleaños', 'Quinceañeros', 'San Valentín', 'Graduación', 'Comentarios'];
    const [searchValue, setSearchValue] = useState("");

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    };


    const filteredResults = elementsSearch.filter(result =>
        result.toLowerCase().includes(searchValue.toLowerCase())
    );

    // Función para cerrar el buscador y limpiar el input
    const closeSearch = () => {
        setSearch(!search);
        setSearchValue(""); // Limpiar el valor del input
    };

    const navigatePage = (ruta) =>
    {
        setSearch(!search);
        navigate(`/${ruta}`);
        closeSearch();
    }

    const goToCommentsSection = () => {
        navigate('/'); // Navega a la página principal
        setTimeout(() => {
          // Espera un breve momento para que la página cargue completamente
          const commentsSection = document.getElementById('comentarios');
          if (commentsSection) {
            commentsSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }

    return (
        <header className="header__home">
            <div className='header__info'>
                <span  className='slogan'>Tu momento, nuestra pasión</span>
                <div className='header__icons'>
                    {/* <img src={lupa} alt="icono buscar" onClick={() => navigate('/perfil')} className='buscar' /> */}
                    {/* <img src={perfil1} alt="icono perfil" onClick={() => navigate('/ingresar')} className='perfil' /> */}

                    <label className="switchBtn" >
                        <input type="checkbox" name="" id="" onClick={handleChangeTheme}/>
                        <div className="slide">light On</div>
                    </label>

                    {search ? (
                        <img src={lupa} alt="icono buscar" onClick={() => closeSearch()} className='buscar' />
                    ) : (
                        <span className='newSearch'>
                            <div className='newSearch__input'>
                                <img src={lupa} alt="icono buscar" onClick={() => closeSearch()} className='buscar' />
                                <input
                                    type="text"
                                    name="search"
                                    placeholder="Buscar..."
                                    value={searchValue}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="resultDown">
                                {searchValue ? (
                                    filteredResults.length > 0 ? (
                                        filteredResults.map((result, index) => (
                                            <p onClick={() => goToCommentsSection()} key={index}>{result}</p>
                                        ))
                                    ) : (
                                        <p>Sin Resultados</p>
                                    )
                                ) : null}
                            </div>
                        </span>
                    )}
                    <img src={perfil1} alt="icono perfil" onClick={() => navigate('/ingresar')} className='perfil' />
                </div>
            </div>
            <div className="header__transparent">
                <nav className="header__navbar">
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
    );
}

export default Header;
