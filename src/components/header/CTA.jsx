import React from 'react';
import cvEsp from '../../assets/Anyelina_Almanzar_CV.pdf'

const CTA = () => {
    return (
        <div>
            <div className="cta">
                <a href={cvEsp} download className='btn'>Descargar CV</a>
                <a href="#contact" className='btn btn-primary'>Contáctame</a>
            </div>
        </div>
    );
}

export default CTA;
