import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
    return (
        <header id='home'>
            <div className="container header__container">
                <h5>Hola, mi nombre es</h5>
                <h1>Anyelina Almanzar</h1>
                <h5 className="text-light">Desarrolladora Web Full-stack</h5>
                <CTA/>
                <HeaderSocials/>
                <div className="me">
                    <img src={ME} alt="" />
                </div>
            </div>
        </header>
    );
}

export default Header;
