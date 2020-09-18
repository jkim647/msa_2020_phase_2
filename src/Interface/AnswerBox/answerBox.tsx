import React, { Component } from 'react';

import './answerBox.css'
interface IProps{
    Check:(a:any) => void;
    }
interface IState{
    answer: any;
}
class ContactData extends Component<IProps, IState> {
    state = {
        answer:{
        1: '',
        2: '',
        3: '',
        4: ''
        }
        }
    public orderHandler = (event:any) => {
        const answer = {
            ...this.state.answer
        }
        this.props.Check(answer)

    }
    public firstAnswer = (event:any) => {
        let updateAnswerForm = {
            ...this.state.answer
        }
        updateAnswerForm[1] = event.target.value
        this.setState({answer:updateAnswerForm})
    }
    public secondAnswer = (event:any) => {
        let updateAnswerForm = {
            ...this.state.answer
        }
        updateAnswerForm[2] = event.target.value
        this.setState({answer:updateAnswerForm})
    }
    public thridAnswer = (event:any) => {
        let updateAnswerForm = {
            ...this.state.answer
        }
        updateAnswerForm[3] = event.target.value
        this.setState({answer:updateAnswerForm})
    }
    public fourthAnswer = (event:any) => {
        let updateAnswerForm = {
            ...this.state.answer
        }
        updateAnswerForm[4] = event.target.value
        this.setState({answer:updateAnswerForm})
    }

    

    

    render () {
        
        return (
            <form className="ContactData" onSubmit={this.orderHandler}>
                <div>
                    <h4>Enter your answer</h4>
                    <input className="inputvalue" type="text" placeholder="First word" value={this.state.answer[1]} onChange={this.firstAnswer}></input>
                    <input className="inputvalue"  placeholder="Second word" id='second' value={this.state.answer[2]} onChange={this.secondAnswer}></input>
                    <input className="inputvalue" placeholder="Third word" id='third' value={this.state.answer[3]} onChange={this.thridAnswer}></input>
                    <input className="inputvalue" placeholder="Forth word" id='firth' value={this.state.answer[4]} onChange={this.fourthAnswer}></input>
                    <button className="submit">Submit</button>
                    
                </div>
                
            </form>
        );
    }
}

export default ContactData;