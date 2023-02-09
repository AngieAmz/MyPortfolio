import React from 'react';
import './nav.css';
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai';
import {BiBookBookmark, BiMessageDetail} from 'react-icons/bi';
import {MdWorkOutline} from 'react-icons/md';
import { useState } from 'react';

const Nav = () => {

    const [activeNav, setActiveNav] = useState('#home')

    return (
        <nav>
            <a href="#home" onClick={() => {setActiveNav('#home')}} className={activeNav === '#home' ? 'active': '' }> <AiOutlineHome/></a>
            <a href="#about" onClick={() => {setActiveNav('#about')}} className={activeNav === '#about' ? 'active': '' }> <AiOutlineUser/></a>
            <a href="#skills" onClick={() => {setActiveNav('#skills')}} className={activeNav === '#skills' ? 'active': '' }> <BiBookBookmark/></a>
            <a href="#portfolio" onClick={() => {setActiveNav('#portfolio')}} className={activeNav === '#portfolio' ? 'active': '' }> <MdWorkOutline/></a>
            <a href="#contact" onClick={() => {setActiveNav('#contact')}} className={activeNav === '#contact' ? 'active': '' }> <BiMessageDetail/></a>
        </nav>
    );
}

export default Nav;
