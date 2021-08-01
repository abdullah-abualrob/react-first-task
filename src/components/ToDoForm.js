import React from 'react';
import '../css/ToDoForm.css'

class ToDoForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputText: '',
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };

    onChange(e) {
        this.setState({
            inputText : e.target.value,
        })
    }

    onSubmit(e){
        if(this.state.inputText !== ''){
            this.props.saveNewTask(this.state.inputText);
        }
        e.preventDefault();
    }

    render(){
        return(
            <form className = "container" onSubmit = {this.onSubmit}>
                <input type = 'text' className="input" placeholder = "What needs to be done?" value = {this.state.inputText} onChange = {this.onChange} />
                <input className = "button" type = 'submit' />
            </form>
        )
    }
}

export default ToDoForm;