import React from 'react';
import './sideDrawer.css';
import SideDrawerItem from '../SideDrawer/SideDrawerItem/SideDrawerItem'



interface IProps{
    open:Boolean;
    users: [];
    closeDrawer:(a:any) => void;
    deleteUser:(a:any) => void;
    replay:() => void;
}

const sideDrawer = (IProps:any) => {
    console.log(IProps.users[0])
    let post = []
    if(IProps.users){
     post = IProps.users.map((post:any) =>{
        return <SideDrawerItem key={post.userId} name={post.name} score={post.score}/>
    })
    }
    else{
        
    }

    return(
        <div>
            Alex
            <div className="SideDrawer">
                
                {post}
                <button onClick={IProps.replay}>Again</button>
                <button onClick={IProps.deleteUser}>Delete Score</button>
                <button onClick={IProps.closeDrawer}>Back</button>
            </div>
        </div>
    )
}

export default sideDrawer;