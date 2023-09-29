import React from 'react'
import './collage.scss'

const Collage = ( { imagenes } ) => {
    return (
        <div className="row">

            <div className="galeria">
                <a href="#imagen1" className='galeria__ancora1'>
                    <img src={imagenes[0]} alt="" className='imagenes__iniciales1' />
                </a>
                <a href="#imagen2" className='galeria__ancora1'>
                    <img src={imagenes[1]} alt="" className='imagenes__iniciales1' />
                </a>
                <a href="#imagen3" className='galeria__ancora2'>
                    <img src={imagenes[2] } alt="" className='imagenes__iniciales2' />
                </a>
                <a href="#imagen4" className='galeria__ancora2'>
                    <img src={imagenes[3] } alt="" className='imagenes__iniciales2' />
                </a>
                <a href="#imagen5" className='galeria__ancora2'>
                    <img src={imagenes[4] } alt="" className='imagenes__iniciales2' />
                </a>
            </div>

            <div id="imagen1" className='galeria__grande'>
                <a href="#imagen5"> <span className="material-symbols-outlined">
                    arrow_back_ios
                </span></a>
                <img src={imagenes[0]} alt="" />
                <a href="#imagen2"><span className="material-symbols-outlined">
                    arrow_forward_ios
                </span></a>
                <a href="#home" className='close'><span className="material-symbols-outlined">
                    close
                </span></a>
                <div id="home"></div>
            </div>

            <div id="imagen2" className='galeria__grande'>
                <a href="#imagen1"> <span className="material-symbols-outlined">
                    arrow_back_ios
                </span></a>
                <img src={imagenes[1]} alt="" />
                <a href="#imagen3"> <span className="material-symbols-outlined">
                    arrow_forward_ios
                </span></a>
                <a href="#home" className='close'><span className="material-symbols-outlined">
                    close
                </span></a>
            </div>

            <div id="imagen3" className='galeria__grande'>
                <a href="#imagen2"> <span class="material-symbols-outlined">
                    arrow_back_ios
                </span></a>
                <img src={imagenes[2]} alt="" />
                <a href="#imagen4"> <span className="material-symbols-outlined">
                    arrow_forward_ios
                </span></a>
                <a href="#home" className='close'><span className="material-symbols-outlined">
                    close
                </span></a>
            </div>

            <div id="imagen4" className='galeria__grande'>
                <a href="#imagen3"> <span className="material-symbols-outlined">
                    arrow_back_ios
                </span></a>
                <img src={imagenes[3]} alt="" />
                <a href="#imagen5"> <span className="material-symbols-outlined">
                    arrow_forward_ios
                </span></a>
                <a href="#home" className='close'><span className="material-symbols-outlined">
                    close
                </span></a>
            </div>

            <div id="imagen5" className='galeria__grande'>
                <a href="#imagen4"> <span className="material-symbols-outlined">
                    arrow_back_ios
                </span></a>
                <img src={imagenes[4]} alt="" />
                <a href="#imagen1"> <span className="material-symbols-outlined">
                    arrow_forward_ios
                </span></a>
                <a href="#home" className='close'><span className="material-symbols-outlined arrow">
                    close
                </span></a>
            </div>
        </div>
    )
}

export default Collage;