import React from 'react';
import './skills.css';
import {BsPatchCheckFill} from 'react-icons/bs';

const Skills = () => {
    return (
        <section id='skills'>
            <h5>¿Qué conocimientos tengo?</h5>
            <h2>~ Mis habilidades ~</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Desarrollo Frontend</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                            <h4>Javascript</h4>
                            <small className='text-light'>Avanzado</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                            <h4>ReactJS</h4>
                            <small className='text-light'>Avanzado</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                            <h4>Vuejs</h4>
                            <small className='text-light'>Intermedio</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                            <h4>Angular</h4>
                            <small className='text-light'>Basico</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__backend">
                <h3>Desarrollo Backend</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                            <h4>C#</h4>
                            <small className='text-light'>Avanzado</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                            <h4>Java</h4>
                            <small className='text-light'>Basico</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                            <h4>Sql / MySql</h4>
                            <small className='text-light'>Avanzado</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                            <h4>Python</h4>
                            <small className='text-light'>Intermedio</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
