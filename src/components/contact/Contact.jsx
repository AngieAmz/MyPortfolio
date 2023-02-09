import React from 'react';
import './contact.css';
import {FiMail} from 'react-icons/fi';
import {BsInstagram, BsTelephone} from 'react-icons/bs';


const Contact = () => {
    return (
        <section id='contact'>
            <h5>¡Vamos a hablar!</h5>
            <h2>~ Contáctame ~</h2>

            <div className="container contact__container">
                <div className="contact__cards">
                    <FiMail className='icon'/>
                    <h2>Email</h2>
                    <h5 className='text-light'>anyelinaalmanzar.opx@gmail.com</h5>
                    <a href="mailto:anyelinaalmanzar.opx@gmail.com">Envíame un mensaje</a>
                </div>
                <div className="contact__cards">
                    <BsInstagram className='icon'/>
                    <h2>Instagram</h2>
                    <h5 className='text-light'>Anyi Amz</h5>
                    <a href="https://www.instagram.com/anyiamz/" rel='noreferrer' target='_blank'>Escríbeme DM</a>
                </div>
                <div className="contact__cards">
                    <BsTelephone className='icon'/>
                    <h2>Teléfono</h2>
                    <h5 className='text-light'>(809)698-8504</h5>
                    <a href="tel:+18096988504">Llámame</a>
                </div>
            </div>
        </section>
    );
}

export default Contact;
