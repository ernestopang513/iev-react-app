import React from 'react';

import chicaPizarron from '../../styles/img/chica-pizarron.jpg';

export const RedesCursos = () => {
    return (
        <>
            <div className="redesCursos__redes-sociales">

                <div className="redesCursos__flex-redes-sociales generales__contenedor">
                    <h2>Nuestras Redes Sociales</h2>

                    <div className="contenedor-redes">

                        <a   target="_blank" href="https://www.instagram.com/iev.cuajimalpa/"><i className="fab fa-instagram"></i></a>
                        <a  target="_blank"  href="https://twitter.com/IEV_CUAJIMALPA"><i className="fab fa-twitter"></i></a>
                        <a  target="_blank"  href="https://es-la.facebook.com/iev.cuajimalpa"><i className="fab fa-facebook"></i></a>
                    </div>
                </div>

            </div>


            <main className="generales__contenedor redesCursos__cursos">

                <h2 className="generales__centrar-texto generales__color-texto">Algunos de nuestros cursos</h2>

                <div className="redesCursos__flex-cursos">

                    <div className="redesCursos__contenedor-curso">

                        <img className="redesCursos__imagenes-cursos" src={chicaPizarron} alt="imagen"/>

                        <h3>Curso preparación a la prepa </h3>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis maxime tempore culpa, ducimus quae assumenda commodi optio, vero aliquid excepturi ipsam eaque amet natus cupiditate? Debitis facere a dolores minima. Lorem ipsum dolor
                            sit, amet consectetur adipisicing elit. Praesentium iure corrupti adipisci saepe commodi fugit facilis doloribus, sapiente et debitis minus dolore! Illo qui dolorem quis? Reiciendis facere provident nostrum?</p>

                    </div>

                    <div className="redesCursos__contenedor-curso">

                        <img className="redesCursos__imagenes-cursos" src="img/chicos-estudiando.jpg" alt="imagen"/>

                        <h3>Curso preparación a la Universidad </h3>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis maxime tempore culpa, ducimus quae assumenda commodi optio, vero aliquid excepturi ipsam eaque amet natus cupiditate? Debitis facere a dolores minima. Lorem ipsum dolor
                            sit, amet consectetur adipisicing elit. Praesentium iure corrupti adipisci saepe commodi fugit facilis doloribus, sapiente et debitis minus dolore! Illo qui dolorem quis? Reiciendis facere provident nostrum?</p>

                    </div>

                    <div className="redesCursos__contenedor-curso">

                        <img className="redesCursos__imagenes-cursos" src="img/chica-pizarron.jpg" alt="imagen"/>

                        <h3>Prepa en un exámen </h3>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis maxime tempore culpa, ducimus quae assumenda commodi optio, vero aliquid excepturi ipsam eaque amet natus cupiditate? Debitis facere a dolores minima. Lorem ipsum dolor
                            sit, amet consectetur adipisicing elit. Praesentium iure corrupti adipisci saepe commodi fugit facilis doloribus, sapiente et debitis minus dolore! Illo qui dolorem quis? Reiciendis facere provident nostrum?</p>

                    </div>

                    <div className="redesCursos__contenedor-curso">

                        <img className="redesCursos__imagenes-cursos" src="img/chicos-estudiando.jpg" alt="imagen"/>

                        <h3>Curso de ingles </h3>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis maxime tempore culpa, ducimus quae assumenda commodi optio, vero aliquid excepturi ipsam eaque amet natus cupiditate? Debitis facere a dolores minima. Lorem ipsum dolor
                            sit, amet consectetur adipisicing elit. Praesentium iure corrupti adipisci saepe commodi fugit facilis doloribus, sapiente et debitis minus dolore! Illo qui dolorem quis? Reiciendis facere provident nostrum?</p>

                    </div>

                    <div className="redesCursos__contenedor-curso">

                        <img className="redesCursos__imagenes-cursos" src="img/chica-pizarron.jpg" alt="imagen"/>

                        <h3>Prepa en un exámen </h3>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis maxime tempore culpa, ducimus quae assumenda commodi optio, vero aliquid excepturi ipsam eaque amet natus cupiditate? Debitis facere a dolores minima. Lorem ipsum dolor
                            sit, amet consectetur adipisicing elit. Praesentium iure corrupti adipisci saepe commodi fugit facilis doloribus, sapiente et debitis minus dolore! Illo qui dolorem quis? Reiciendis facere provident nostrum?</p>

                    </div>

                    <div className="redesCursos__contenedor-curso">

                        <img className="redesCursos__imagenes-cursos" src="img/chicos-estudiando.jpg" alt="imagen"/>

                        <h3>Curso de ingles </h3>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis maxime tempore culpa, ducimus quae assumenda commodi optio, vero aliquid excepturi ipsam eaque amet natus cupiditate? Debitis facere a dolores minima. Lorem ipsum dolor
                            sit, amet consectetur adipisicing elit. Praesentium iure corrupti adipisci saepe commodi fugit facilis doloribus, sapiente et debitis minus dolore! Illo qui dolorem quis? Reiciendis facere provident nostrum?</p>

                    </div>

                </div>

                



            </main>
        </>
    )
}
