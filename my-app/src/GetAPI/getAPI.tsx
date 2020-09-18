import * as React from 'react';
import SideDrawer from '../Interface/SideDrawer/sideDrawer'
import deleteUser from '../GetAPI/deleteAPI'
import MakeBurger from '../MakeBurger/makeBurger'

interface IState{
  User: any[];
  sideDrawer: Boolean;
  currentUser:Number
}
interface IProps{
  closeRank:(a:any) => void;
  replay:(a:any) => void
}

class App extends React.Component<IProps, IState>{
  
  public constructor(props: any) {
    super(props);
    this.state = {
        User:[],
        sideDrawer: false,
        currentUser: 0
        
       
    }
}

public componentDidMount = () => {
    console.log("Test")
    this.getRanking()
}

//public componentDidUpdate = (prevState:any) => {
//  if(this.state.sideDrawer_open !== prevState.sideDrawer_open){
 //   console.log("update")
 //   this.getRanking()
//  }
  
//}

public getRanking = async () => {
    fetch("http://msaburgergame.azurewebsites.net//api/Users/",{
        headers:{
            Accept: "text/plain"
        },
        method:"GET"
    }).then(response=>response.json()).then(answer =>{
        console.log(answer)
        this.setState({User:answer})
        console.log(this.state.User)
        if(answer.length >= 1){
        const get_current = answer[answer.length-1].userId
        this.setState({currentUser:get_current})
        }
        else{
          alert("Please start game")
        }
    }
    );
}
public deleteScore = () => {
  deleteUser(this.state.currentUser)
}

public replay = () => {
  this.props.replay(this.state.currentUser)
}


public render() {
      console.log("getApi working")
    return (
      <div>
        <SideDrawer closeDrawer={this.props.closeRank} users={this.state.User} deleteUser={this.deleteScore} replay={this.replay}/>
      </div>
  );
  }

}

export default App;