import React from 'react';
import './NavigationItem.css';

const navigationItem = (props:any) => (
    <li className="NavigationItem">
        <a>
            {props.children}
        </a>
    </li>
);

export default navigationItem;