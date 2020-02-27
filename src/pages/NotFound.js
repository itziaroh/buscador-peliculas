import React from 'react';
import ButtonBackHome from '../components/ButtonBackHome';

const NotFound = () => {
    return (
        <div>
            <h1 className="title">404!</h1>
            <h2 className="subtitle">No existe la página</h2>
            <ButtonBackHome />
        </div>
    )
}

export default NotFound;