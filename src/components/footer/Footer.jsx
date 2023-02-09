import React from 'react';
import './footer.css';
import {BsLinkedin, BsGithub} from 'react-icons/bs';
import {GoMail} from 'react-icons/go';

const Footer = () => {
    return (
        <section id='footer'>
            <div className='container footer__container'>

                <ul className='links__container'>
                    <li><a href="#home">Inicio</a></li>
                    <li><a href="#about">Sobre mi</a></li>
                    <li><a href="#skills">Habilidades</a></li>
                    <li><a href="#portfolio">Portafolios</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>

                <br />

                <div className="socials__container">
                    <a href="https://github.com/AngieAmz" rel='noreferrer' target='_blank'><BsGithub/></a>
                    <a href="https://www.linkedin.com/in/anyelina-almanzar-de-la-rosa-89465a212" rel='noreferrer' target='_blank'><BsLinkedin/></a>
                    <a href="mailto:anyelinaalmanzar.opx@gmail.com"><GoMail/></a>
                </div>
            </div>
        </section>
    );
}

export default Footer;
