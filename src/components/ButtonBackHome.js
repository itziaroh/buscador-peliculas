import React from 'react';
import { Link } from 'react-router-dom';

const ButtonBackHome = () => {
    return (
        <Link
            to='/'
            className="button is-info"
        >
            Volver a la portada
           </Link>
    )
}

export default ButtonBackHome;