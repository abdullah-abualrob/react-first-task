import React, { Component } from 'react'
import '../css/Task.css'
import '../App.css'

class Task extends Component{
    constructor(props){
        super(props);
        this.state = {checked : false};
    }

    render(){
        return (
            <div className="item task">
                <div className = "text">
                    <input type="checkbox" className = "check" onClick={() => this.setState({checked : !this.state.checked})}/>
                    {this.state.checked ?
                    <div className = "task-text checked">{this.props.task}</div> : 
                    <div className = "task-text">{this.props.task}</div>
                     }
                    
                </div>
                <button className="delete" onClick = {() => this.props.deleteTask(this.props.id)}>
                    delete
                </button>
            </div>
        )
    };
}

export default Task;