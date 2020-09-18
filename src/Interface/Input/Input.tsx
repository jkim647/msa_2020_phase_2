import React from 'react';

const input = (props:any) => {
    let inputElement = null;

    switch(props.inputType){
        case('input'):
            inputElement = <input {...props}/>
        case('textarea'):
            inputElement = <textarea {...props}/>
        default:
            inputElement = <textarea {...props}/> 
        
    }
    return(
    <div className="Input">
        <label className="Label">{props.label}</label>
    </div>
    )
}