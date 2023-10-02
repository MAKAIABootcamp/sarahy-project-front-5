import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import useScreenSize from '../../services/screen';
import perfil1 from '../../assets/image/pefil1.png';
import lupa from '../../assets/image/lupaBlack.png';
import logo from '../../assets/image/logo-blanco.png';
import './header.scss';

const Header = () => {
  const dataUser = useSelector((state) => state.aunthentication.isLogged);
  const navigate = useNavigate();
  const { register, setValue } = useForm();

  const elementsSearch = [
    'Boda',
    'Cumpleaños',
    'Quinceañeros',
    'San Valentín',
    'Graduación',
    'Comentarios',
  ];
  const [searchValue, setSearchValue] = useState('');
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const filteredResults = elementsSearch.filter((result) =>
    result.toLowerCase().includes(searchValue.toLowerCase())
  );

  const closeSearch = () => {
    setSearch(!search);
    setSearchValue('');
  };

  const navigatePage = (ruta) => {
    setSearch(!search);
    navigate(`/${ruta}`);
    closeSearch();
  };

  const goToCommentsSection = () => {
    navigate('/');
    setTimeout(() => {
      const commentsSection = document.getElementById('comentarios');
      if (commentsSection) {
        commentsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const { width, height } = useScreenSize();
  const [search, setSearch] = useState(true);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header__home " id="miHeader">
      {width < 600 ? (
        <span className="menu-toggle" onClick={toggleMenu}>
          <span className="material-symbols-outlined">menu</span>
        </span>
      ) : (
        <>
          <div className="header__info">
            <span className="slogan">Tu momento, nuestra pasión</span>
            <div className="header__icons">
              <label className="switchBtn">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  onClick={handleChangeTheme}
                />
                <div className="slide">light On</div>
              </label>
              {search ? (
                <img
                  src={lupa}
                  alt="icono buscar"
                  onClick={() => closeSearch()}
                  className="buscar"
                />
              ) : (
                <span className="newSearch">
                  <div className="newSearch__input">
                    <img
                      src={lupa}
                      alt="icono buscar"
                      onClick={() => closeSearch()}
                      className="buscar"
                    />
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
                          <p onClick={() => goToCommentsSection()} key={index}>
                            {result}
                          </p>
                        ))
                      ) : (
                        <p>Sin Resultados</p>
                      )
                    ) : null}
                  </div>
                </span>
              )}
              {dataUser ? (
                <img
                  src={perfil1}
                  alt="icono perfil"
                  onClick={() => navigate('/perfil')}
                  className="perfil"
                />
              ) : (
                <img
                  src={perfil1}
                  alt="icono perfil"
                  onClick={() => navigate('/ingresar')}
                  className="perfil"
                />
              )}
            </div>
          </div>
          <div className="header__transparent">
            <nav className="header__navbar">
              <ul className="header__navbar--lista">
                <li
                  className="navbar__items"
                  onClick={() => navigate('/sociales')}
                >
                  Eventos Sociales
                </li>
                <li
                  className="navbar__items"
                  onClick={() => navigate('/empresariales')}
                >
                  Eventos Empresariales
                </li>
                <li className="navbar__items--logo">
                  {<img src={logo} className="logo__item--img" onClick={() => navigate('/')}/>}
                </li>
                <li className="navbar__items">Contáctanos</li>
                <li
                  className="navbar__items"
                  onClick={() => navigate('/quote')}
                >
                  Cotiza Aquí
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}

<div className={`mobile-menu ${isOpen && width < 600 ? 'show' : ''}`}>
        <ul>
          <li onClick={() => navigate('/')}>Inicio</li>
          <li onClick={() => navigate('/sociales')}>Eventos Sociales</li>
          <li onClick={() => navigate('/empresariales')}>Eventos Empresariales</li>
          <li onClick={() => navigate('/contactanos')}>Contactanos</li>
          <li>Contáctanos</li>
          <li onClick={() => navigate('/quote')}>Cotiza Aquí</li>
        </ul>
      </div>
    </header>
  );
};


export default Header;
