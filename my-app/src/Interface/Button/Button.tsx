import React, { Children } from 'react';
import './Button.css'

const button = (props:any) => {
    
    return(
        <button className="BurgerButton" onClick={props.gameStart}>
            <p className="ButtonText">{props.children}</p>
        </button>
    )
};

export default button;