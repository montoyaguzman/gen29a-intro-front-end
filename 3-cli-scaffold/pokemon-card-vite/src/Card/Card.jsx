import React from 'react';
import './Card.css';

function Card() {

    const bulbasaur = {
        url: 'https://static.wikia.nocookie.net/espokemon/images/4/43/Bulbasaur.png',
        alt: ''
    };

    return (
        // JSX: SINTAXIS ESPECIAL PARA USAR HTML Y JS JUNTOS
        <>
            {/* <React.Fragment> */}
            <div className="container-img">
                <img src={bulbasaur.url} alt="mi pokemon" />
            </div>
            <div>
                Holaaaaaa
            </div>
            {/* </React.Fragment> */}
        </>
    );
}

export { Card };