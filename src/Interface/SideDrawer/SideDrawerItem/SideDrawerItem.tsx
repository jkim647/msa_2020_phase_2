import React from 'react';
import './SideDrawerItem.css';

interface IProps{
    name:any;
    score:any;
    key:any;
}

const Items = (IProps:any) =>{
    return(
    <div className="SideDrawer_items">
        {IProps.name} {IProps.score}
    </div>
    )
    
}
export default Items