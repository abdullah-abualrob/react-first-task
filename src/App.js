import React from 'react';
import ToDoForm from './components/ToDoForm.js'
import Task from './components/Task.js';
import './App.css';

class App extends React.Component {
	constructor(probs){
		super(probs);
			this.state = {
				count:0,
				tasks: [
					
				],
		}

		this.saveNewTask = this.saveNewTask.bind(this);
		this.deleteTask = this.deleteTask.bind(this);
		this.changeStyle =this.changeStyle.bind(this);
	}

	async saveNewTask(task){
		console.log(task)
		this.setState({
			count:this.state.count + 1,
			tasks : [...this.state.tasks , {task ,checked: false, id : this.state.count + 1,}],
		})
	}

	async deleteTask(id){
		let updatedTasks = this.state.tasks.filter(oldtask => oldtask.id !== id);
		this.setState({tasks : updatedTasks})
	}

	async changeStyle(id){		

		let curTasks=this.state.tasks;
		for(let i=0;i<curTasks.length;i++){
			if(curTasks[i].id===id){
				curTasks[i].checked=!curTasks[i].checked;
			}
		}

		this.setState({
			
		});
	}

	render(){
		return(
			<div className="App">
				<title>to do list</title>
				<ToDoForm saveNewTask = {this.saveNewTask}/>
				<div className="tasks-list">
					<div className = "item">
						To Do List
					</div>
					{this.state.count > 0 && this.state.tasks.map((task , index)=>{
						return (
							<Task key = {index} task = {task.task} id = {task.id} deleteTask = {this.deleteTask} changeStyle = {this.changeStyle}/>
						);
					})}
				</div>
				{/* <Test /> */}
			</div>
		);
	}
}

export default App;
