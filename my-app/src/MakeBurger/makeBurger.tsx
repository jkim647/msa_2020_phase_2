import React, { Component } from 'react';
import BurgerQuizz from  '../BurgerQuizz/burgerQuizz'
import Button from '../Interface/Button/Button'
import AnswerBox from '../Interface/AnswerBox/answerBox'
import uploadScore from '../GetAPI/postAPI'
import updateScore from '../GetAPI/updateAPI'

interface IProps{
    userID: any,
    replayGame:any,
    db_id:any
    scoreShare:(a:any) => void}
interface IState{
    quizzNum:Number,
    quizzStarted:Boolean,
    score: Number
}

class BurgerBuilder extends Component<IProps, IState> {
    state = {
        quizzStarted: false,
        correct: false,
        quizzNum: 0,
        score: 0,
        saveScore: false,
        answers:[
            {1: "",
             2:"",
             3:"",
             4:""
            },
            {
             1:"",
             2:"",
             3:"",
             4:""
            },
            {
                1:"",
                2:"",
                3:"",
                4:""
            }
        ]
        ,
        ingredients: {
            
        }
        
    }
    public getQuizz = () => {
        console.log("working")
        this.setState({quizzStarted: true, quizzNum:0 })
    }
    componentDidUpdate(prevProps:any){
        if(prevProps.replayGame!== this.props.replayGame){
        this.setState({quizzStarted: true, quizzNum:0,score:0 })
        }
    }

    public nextQuizz = () => {
        let score = this.state.score;
        let quizzCount = this.state.quizzNum
        quizzCount ++
        this.setState({quizzNum:quizzCount})
        
        if(quizzCount == this.state.answers.length){
            if(this.props.replayGame !== true){
            uploadScore(this.props.userID,this.state.score)
            this.setState({quizzStarted: false, quizzNum:0})
            this.props.scoreShare(this.state.score)
            }
            else{
                
                updateScore(this.props.db_id,this.state.score,this.props.userID)
                this.setState({quizzStarted: false, quizzNum:0})
            }
            
        
        }

        else{
            score+=10
            this.setState({score:score})
            //this.getQuizz();
        }
    }

    public checkAnswers = (answer:any) => { 
        console.log("after test")
        let origin = {...this.state.answers[this.state.quizzNum]}
        let origin_data = Object.entries(origin);
        let answer_data = Object.values(answer)
        //var answer_data = Object.getOwnPropertyNames(answer);
        let origin_data_container = []
        for(const [prop, val] of origin_data) {
            
            origin_data_container.push(val)
        }
        if(JSON.stringify(origin_data_container) === JSON.stringify(answer_data)){
            this.nextQuizz()
        }
        else{

        }
        
    }
       
    

    //<BurgerQuizz key={1} quizz={this.state.answers[this.state.quizzNum]}/>;
    public render(){
        console.log(this.props.replayGame)
        console.log("test")
        let quizzStarted;
        let BurgerQuiz;
        let BurgerQuiz_list
        if(this.state.quizzStarted || this.props.replayGame){
            console.log(this.state.quizzNum)
             BurgerQuiz = this.state.answers[this.state.quizzNum];
             quizzStarted = this.state.quizzStarted! ;
             BurgerQuiz_list = Object.values(BurgerQuiz)
            }
            
        else{
            
        }
        return(
            <div>
             
            <Button gameStart={this.getQuizz}>Start Game</Button>
            {quizzStarted && <BurgerQuizz open={quizzStarted} quizz={BurgerQuiz_list} score={this.state.score}/>}
            <AnswerBox Check={this.checkAnswers}/>
            
           

            </div>
        )
    }

    
}

export default BurgerBuilder;