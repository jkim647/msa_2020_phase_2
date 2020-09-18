import * as React from 'react';
import User_id from '../src/Interface/ID_INPUT/ID_input'
import ToolBar from '../src/Interface/Navigation/ToolBar'
import GetRank from '../src/GetAPI/getAPI'
import Button from '../src/Interface/Button/Button'
import MakeBurger from '../src/MakeBurger/makeBurger'
import  Webcam from "react-webcam";


interface IState{
  user_id: any;
  show_user_input: boolean;
  show_navigation: boolean;
  show_rank_bar: boolean;
  score: number;
  gameStart: boolean;
  replay: boolean;
  current_id:any;
  score_share:number;
  authenticated: boolean;
  predictionResult: any;
  refCamera: any;

  

}
class App extends React.Component<{}, IState>{
  
  public constructor(props: any) {
    super(props);
    this.state = {
      user_id:"",
      show_user_input: true,
      show_navigation: false,
      show_rank_bar: false,
      score: 0,
      gameStart:false,
      replay:false,
      current_id: 0,
      score_share:0,
      predictionResult: null,
      refCamera: React.createRef(),
      authenticated:false
    }
    this.authenticate=this.authenticate.bind(this)
}

  public setUserId = (user:any) => {
    console.log(user)
    this.setState({user_id: user, show_user_input:false, show_navigation: true})
  }

  public getRank = () => {
    this.setState({show_rank_bar:true})
    console.log("working")
  }
  public openGame = () => {
    this.setState({gameStart:true})
  }
  
  public closeRank = () => {
    this.setState({show_rank_bar:false})
  }
  public replay = (current:any) => {
    let id_user = current
    this.setState({current_id: id_user})
    this.setState({replay: true})
    console.log(this.state.replay)
  }
  public shareScore = (score:any) => {
    console.log(score)
    this.setState({score_share: score})
  }
  

  public render() {
    const{authenticated} = this.state
    return (
      
      <div>
        <div>
        {(!authenticated) ?
        <div>
        <Webcam
        audio={false}
        height={720}
        width={1280}
        screenshotFormat="image/jpeg"
        ref={this.state.refCamera}
        />
        <div>cds</div>
        <div className="btn btn-primary bottom-button" onClick={this.authenticate}>Login</div>
      </div>
      : ""}
      </div>
        {(authenticated)?
        <div>   
        {this.state.show_user_input && <User_id SetUserId={this.setUserId}/>}
        {this.state.show_navigation && <ToolBar user_id ={this.state.user_id} user_score={this.state.score} getRank={this.getRank} f_score={this.state.score_share}/>}
        {this.state.show_navigation && <Button gameStart={this.openGame}>Game Start</Button>}
        {this.state.show_rank_bar && <GetRank closeRank={this.closeRank} replay={this.replay}/>}
        {this.state.show_navigation && <MakeBurger userID = {this.state.user_id} replayGame={this.state.replay} db_id = {this.state.current_id} scoreShare={this.shareScore}/>}
        </div>:""}
      </div>
  
       
   );
  }

  private getFaceRecognitionResult(image: string) {
    const url = "https://australiaeast.api.cognitive.microsoft.com/customvision/v3.0/Prediction/8917e882-1b08-4267-b977-a625bf84bfb3/classify/iterations/Iteration1/image"
    if (image === null) {
        return;
    }
    const base64 = require('base64-js');
    const base64content = image.split(";")[1].split(",")[1]
    const byteArray = base64.toByteArray(base64content);
    fetch(url, {
        body: byteArray,
        headers: {
          "Content-Type": "application/octet-stream", 
          "Prediction-Key": "485b4dd204c84dc9b369fc13ce32da66", 
          "cache-control": "no-cache",
          
          
        },
        method: "POST"
    })
        .then((response: any) => {
            if (!response.ok) {
              console.log("not working")
                // Error State
                alert(response.statusText)
                console.log(response)
            } else {
                response.json().then((json: any) => {
                    console.log(json.predictions[0])

                    this.setState({ predictionResult: json.predictions[0] })
                    if (this.state.predictionResult.probability > 0.3) {
                        this.setState({ authenticated: true })
                    } else {
                        this.setState({ authenticated: false })
                        console.log(json.predictions[0].tagName)
                    }
                })
            }
        })
}

private authenticate() {
  const screenshot = this.state.refCamera.current.getScreenshot();
  this.getFaceRecognitionResult(screenshot);
}

}

export default App;