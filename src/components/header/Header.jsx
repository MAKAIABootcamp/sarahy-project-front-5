import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { set, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import facebook from "../../assets/image/face.png";
import instagram from "../../assets/image/ig.png";
import whatsapp from "../../assets/image/wpp.png";
import useScreenSize from '../../services/screen';
import perfil1 from '../../assets/image/pefil1.png';
import lupa from '../../assets/image/lupaBlack.png';
import logo from '../../assets/image/logo-blanco.png';
import logo2 from '../../assets/image/logo.png';
import './header.scss';
import ModalContactanos from '../modalContactanos/modalContactanos';

const Header = () => {
  const dataUser = useSelector((state) => state.aunthentication.isLogged);
  const navigate = useNavigate();
  const { register, setValue } = useForm();
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

const goToSection = (ruta, idSection) => {
  navigate(ruta)
  setTimeout(() => {
    const sectionGo = document.getElementById(idSection);
    if (sectionGo) {
      sectionGo.scrollIntoView({ behavior: 'smooth' });
    }

  })
}

  const elementsSearch = [
    // { name: 'Boda', ruta: '/detalles' },
    { name: 'Cotizar', ruta: '/quote' },
    { name: 'Trabajemos', ruta: '/trabajemos' },
    { name: 'San Valentín', ruta: '/sanvalentin' },
    { name: 'Graduación', ruta: '/graduacion' },
    { name: 'Comentarios', ruta: '/' },
    { name: 'Eventos Sociales', ruta: '/sociales' },
    { name: 'Contactanos', ruta: '/contactanos' },
    { name: 'Trabaja con nosotros', ruta: '/trabajemos' },
    { name: 'Aliados', ruta: '/aliados' },
    { name: 'Empresariales', ruta: '/empresariales' },
    { name: 'Iniciar sesion', ruta: '/ingresar' },
    { name: 'Registro', ruta: '/registro' },
    { name: 'Inicio', ruta: '/' },
    { name: 'Perfil', ruta: '/perfil' },
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
    result.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const closeSearch = () => {
    setSearch(!search);
    setSearchValue('');
  };

  const navigatePage = (ruta, idSection) => {
    if (!idSection) {
      setSearch(!search);
      navigate(`/${ruta}`);
      closeSearch();

    }else{
      setSearch(!search);
      goToSection(ruta, idSection)
      closeSearch();

    }
  };

  // const goToCommentsSection = () => {
  //   navigate('/');
  //   setTimeout(() => {
  //     const commentsSection = document.getElementById('comentarios');
  //     if (commentsSection) {
  //       commentsSection.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   }, 100);
  // };

  const goToResultPage = (ruta) => {
    navigate(ruta);
    closeSearch();
  };

  const { width, height } = useScreenSize();
  const [search, setSearch] = useState(true);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header__home " id="miHeader">
      {width < 600 ? (
        <span className="menu-toggle" onClick={toggleMenu}>
          <span className="material-symbols-outlined menu__h">menu</span>
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
                          <p onClick={() => goToResultPage(result.ruta)} key={index}>
                            {result.name}
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
                  {<img src={logo} className="logo__item--img" onClick={() => navigate('/')} />}
                </li>
                <div>
                  <li className="navbar__items" onClick={openModal}>Contáctanos</li>
                  <ModalContactanos isOpen={modal} onRequestCloset={closeModal} />
                </div>


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
        <span className='menu__slogan'>Tu momento, nuestra pasión</span>
        <ul>
          <li onClick={() => { navigate('/'); closeMobileMenu(); }}>Inicio</li>
          <li onClick={() => { navigate('/ingresar'); closeMobileMenu(); }}>Ingresar</li>
          <li onClick={() => { navigate('/perfil'); closeMobileMenu(); }}>Perfil</li>
          <li onClick={() => { navigate('/registro'); closeMobileMenu(); }}>Registro</li>
          <li onClick={() => { navigate('/sociales'); closeMobileMenu(); }}>Eventos Sociales</li>
          <li onClick={() => { navigate('/empresariales'); closeMobileMenu(); }}>Eventos Empresariales</li>
          <div>
            <li className="navbar__items" onClick={() => { openModal(); closeMobileMenu() }}>Contáctanos</li>
            <ModalContactanos isOpen={modal} onRequestCloset={closeModal} />
          </div>

          {/* <li onClick={() => {navigate('/contactanos'); closeMobileMenu(); }}>Contactanos</li> */}
          <li onClick={() => { navigate('/quote'); closeMobileMenu(); }}>Cotiza Aquí</li>
        </ul>

        <article className="redes__header">
          <a href="https://www.facebook.com/banquetessarahy?mibextid=LQQJ4d" target="_blank">
            <img className="red__header" src="https://www.pngplay.com/wp-content/uploads/9/Facebook-Logo-PNG-Background.png" alt="facebook" />
          </a>
          <a href="https://www.instagram.com/banquetessarahy/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank">
            <img className="red__header" src="https://cdn-icons-png.flaticon.com/512/87/87390.png" alt="instagram" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=3163048505&text=Hola%20bienvenido%20a%20Sarahy%20te%20asesoramos%20por%20whatsapp%20gestiona%20tu%20evento%20por%20este%20canal." target="_blank">
            <img className="red__header" src="https://cdn-icons-png.flaticon.com/512/1384/1384095.png" alt="whatsapp" />
          </a>
          
        </article>
        <img src={logo2} alt="" className='logo2black' />
      </div>
    </header>
  );
};


export default Header;
