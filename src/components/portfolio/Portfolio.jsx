import React from 'react';
import './portfolio.css';
import weatherApp from '../../assets/wheatherApp.jpeg';
import appPresupuesto from '../../assets/AppPresupuesto.jpg';
import AppTurnos from '../../assets/AppTurnos.jpg';
import cmem from '../../assets/PaginaClinica.jpg';
import appMVC from '../../assets/AppMVC.jpg';
import todoapp from '../../assets/todoAPP.jpg';

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>Mis proyectos</h5>
            <h2>~ Portafolio ~</h2>

            <div className="container portfolio__container">
                <article className='portfolio__item'>
                    <div className="portolio__item-image">
                    <img src={weatherApp} alt="" />
                    </div>
                    <h3>App del clima</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/AngieAmz/AngieAmz.github.io" rel='noreferrer' className='btn' target='_blank'>GitHub</a>
                        <a href="https://wondrous-speculoos-d7c7cd.netlify.app/" rel='noreferrer' className='btn btn-primary' target='_blank'>Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className="portolio__item-image">
                    <img src={appPresupuesto} alt="" />
                    </div>
                    <h3>Calcular presupuesto</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/AngieAmz/AppPresupuesto" rel='noreferrer' className='btn' target='_blank'>GitHub</a>
                        <a href="https://tourmaline-naiad-05b45f.netlify.app/" rel='noreferrer' className='btn btn-primary' target='_blank'>Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className="portolio__item-image">
                    <img src={cmem} alt="" />
                    </div>
                    <h3>Pagina web Centro Médico</h3>
                    <div className="portfolio__item-cta">
                        <a href="http://www.centrometropolitanord.com/" rel='noreferrer' className='btn btn-primary' target='_blank'>Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className="portolio__item-image">
                    <img src={AppTurnos} alt="" />
                    </div>
                    <h3>Gestor de turnos</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/AngieAmz/AppTurnos" rel='noreferrer' className='btn' target='_blank'>GitHub</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className="portolio__item-image">
                    <img id="img" src={appMVC} alt="" />
                    </div>
                    <h3>Crud con imagen MVC</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/AngieAmz/AppMVC" className='btn' rel='noreferrer' target='_blank'>GitHub</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className="portolio__item-image">
                    <img id='img' src={todoapp} alt="" />
                    </div>
                    <h3>To-do list App</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/AngieAmz/Todo-App" className='btn' rel='noreferrer' target='_blank'>GitHub</a>
                        <a href="https://prueba-todo-app-list.netlify.app/" rel='noreferrer' className='btn btn-primary' target='_blank'>Demo</a>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Portfolio;
