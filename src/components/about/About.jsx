import React from 'react';
import './about.css';
import {FaAward} from 'react-icons/fa';
import {MdDeveloperMode} from 'react-icons/md'

const About = () => {
    return (
        <section id='about'>
            <h5> Te invito a conocer </h5>
            <h2>~ Sobre Mi ~</h2>

            <div className='container about__container'>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon'/>
                            <h5>Conocimientos</h5>
                            <small>Licenciatura en informatica en la Universidad del Caribe</small>
                        </article>
                        <article className='about__card'>
                            <MdDeveloperMode className='about__icon'/>
                            <h5>Experiencia</h5>
                            <small>Desarrollo web fullStack / frontend de proyectos personales y profesionales</small>
                        </article>
                    </div>

                    <p>
                        ¡Hola! Soy Anyelina, desarrolladora full-stack con sólidos conocimientos en el desarrollo web. Me especializo 
                        en crear soluciones técnologicas y mi trayectoria incluye proyectos para distintos sectores, como el sector
                        financiero y el sector salud. He trabajado en el desarrollo de proyectos que van desde sistemas de turno 
                        y sitios web hasta el mantenimiento y mejora de sistemas financieros, de tickets y de documentos. 
                        <br/>
                        <br/>
                        
                        Si buscas un profesional comprometido y deseas poner a prueba mis conocimientos, no dudes en contactarme:
                    </p>

                    <a href="#contact" className='btn btn-primary'> ¡Contáctame! </a>
                </div>
            </div>
        </section>
    );
}

export default About;
