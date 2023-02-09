import React from 'react';
import './about.css';
import me from '../../assets/me-about.jpeg';
import {FaAward} from 'react-icons/fa';
import {MdDeveloperMode} from 'react-icons/md'

const About = () => {
    return (
        <section id='about'>
            <h5> Te invito a conocer </h5>
            <h2>~ Sobre Mi ~</h2>

            <div className='container about__container'>
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={me} alt="About" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon'/>
                            <h5>Conocimientos</h5>
                            <small>Estudiante de término de la carrera de informática</small>
                        </article>
                        <article className='about__card'>
                            <MdDeveloperMode className='about__icon'/>
                            <h5>Experiencia</h5>
                            <small>1 año de experiencia desarrollando proyectos independientes</small>
                        </article>
                    </div>

                    <p>
                        ¡Hola! Soy Anyelina, desarrolladora full-stack junior en el area de desarrollo 
                        web. Mi experiencia laboral se reduce a proyectos realizados de forma independiente
                        para venta como freelancer, sin embargo mis objetivos son incorporarme a un equipo y
                        dar lo mejor de mi para destacar en mi area, aprendiendo por el camino todo lo necesario
                        para incrementar mis capacidades como programadora.
                        <br/>
                        
                        Si te interesa lo que tengo para ofrecer o deseas poner a prueba mis capacidades:
                    </p>

                    <a href="#contact" className='btn btn-primary'> ¡Contáctame! </a>
                </div>
            </div>
        </section>
    );
}

export default About;
