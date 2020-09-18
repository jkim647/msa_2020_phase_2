import React from 'react';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems'
import './ToolBar.css';

interface Iprops{
    user_id: any;
    user_score:any;
    getRank:(a:any) => void;
    f_score:any;
}

const ToolBar = (Iprops:any) => (
    <div>
    <header className="toolbar">
        <div >
            Logo
        </div>

        <nav className="DesktopOnly">
            <NavigationItems user_id={Iprops.user_id} user_score={Iprops.user_score} get_rank={Iprops.getRank} f_score={Iprops.f_score}/>
        </nav>
    </header>
    </div>
)

export default ToolBar