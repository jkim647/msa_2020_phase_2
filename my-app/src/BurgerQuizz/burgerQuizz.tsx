import React, { Component } from 'react';

import './BurgerQuizz.css'

interface IProps{
    quizz: any
    open:any,
    score:Number

}
class BurgerQuizz extends Component<IProps>{
    state={
        new_quizz:[],
        tem_open: true
    }
    componentDidMount = () =>{
        setTimeout(() => this.setState({tem_open:false}), 1000);
    }
    componentDidUpdate =(prevProps:any) =>{
        if(prevProps.quizz !== this.props.quizz){
            this.setState({new_quizz:this.props.quizz})
            this.setState({tem_open:true})
            setTimeout(() => this.setState({tem_open:false}), 1000);
        }
        
        console.log(this.props.quizz)
    }

    public render(){
        console.log("render")
        let answer_list
        if(this.props.quizz){
            answer_list = this.props.quizz.map((answer:any) =>
            
            <li>{answer}</li>
            )
        }
        

        return(
            <div className="box">
                <h2>Current Score: {this.props.score}</h2>
                {this.state.tem_open&&<div>{answer_list}</div>}
            </div>
        )
    }

}

export default BurgerQuizz