import React, { useState } from 'react';
import './ID_input.css'

interface Iprops{
    SetUserId:(a:any) => void;
}

function CreateUser (props:Iprops) {

    const [UserName, setUserName] = useState<string>("");

    const handleUserIdQuery = (e:any) => {
        setUserName(e.target.value);
    }

    const handleSubmit = () => {
        props.SetUserId(UserName)
    }


    return <div>
        <div className="input_box">
            <input className="id_input" type="text" name="" placeholder="Type player's ID" value={UserName} onChange={handleUserIdQuery}></input>
            <a className="id_input" href="#" onClick={handleSubmit}>Start</a>
        </div>
    </div>
}





export default CreateUser;