import React from 'react';
import ListView from '../ListView'
import TableView from '../tableView';
import Controllers from '../controller';
import {Modal, ModalBody, ModalHeader} from 'reactstrap';
import CreateTodo from '../create-todo-form';
import shortid from 'shortid';

class Todos extends React.Component{
    state = {
        todos : [
            {
                id : 'a',
                text : 'this is first dummy text',
                description : "first text",
                time : new Date(),
                isSelect : false,
                isComplete : false
            },
            {
                id : 'b',
                text : 'this is second dummy text',
                description : "second text",
                time : new Date(),
                isSelect : false,
                isComplete : false
            },
            {
                id : 'c',
                text : 'this is third dummy text',
                description : "third text",
                time : new Date(),
                isSelect : false,
                isComplete : false,
            }
            
        ],
        isOpenTodoForm : false,
        searchTerm : '',
        view: 'List',
        filter: "all"
        
    }

    clearSelected=()=>{
        const todos= this.state.todos.filter(todo=> !todo.isSelect)
        this.setState({todos})
    }

    clearCompleted=()=>{
        const todos= this.state.todos.filter(todo=> !todo.isComplete)
        this.setState({todos})
    }
    reset=()=>{
        this.setState({
            searchTerm: " ",
            isOpenTodoForm: false,
            view: "List ",
            filter:"all"

            
        })

    }


    changeView=(event)=>{this.setState({view: event.target.value})}
    handleFilter=(filter)=>{
        this.setState({filter})
    }
    performFilter=(todos)=>{
        const {filter}= this.state
        if(filter==="completed"){
            return todos.filter(todo=> todo.isComplete)
        }else if(filter==="running"){
            return todos.filter(todo=> !todo.isComplete)
        }else{
            return todos
        }

    }
    // handleSearch=e=>{
    //     this.setState({searchTerm: e.target.value})

    // }

    handleSearch = (value) =>{
        this.setState({searchTerm: value})
    }
    peformSearch = () =>{
        return(
            this.state.todos.filter( todo=>
                todo.text.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
        )
    }

    getView=()=>{
        let todos = this.peformSearch()
        todos= this.performFilter(todos)
        return(
            this.state.view==='List'
            ? <ListView
            todos = {todos}
            toggleSelect = {this.toggleSelect}
            toggleComplete = {this.toggleComplete}
         />
         : <TableView
         todos = {todos}
         toggleSelect = {this.toggleSelect}
         toggleComplete = {this.toggleComplete}
      />
        )
    }
    toggleSelect = (todoID)=> {
        const todos = [...this.state.todos]
        const todo = todos.find(t => t.id===todoID)
        console.log(todoID,'todo is selected');
        // todo.isSelect = !todo.isSelect
        // this.setState({todos})
        }
    toggleComplete = (todoID)=> {
        const todos = [...this.state.todos]
        let todo = todos.find(t => t.id===todoID)
        console.log(todoID,'todo is completed');
        // todo.isComplete = !todo.isComplete
        // this.setState({todos})
    }
    toggleForm =() =>{ this.setState({ isOpenTodoForm : ! this.state.isOpenTodoForm})}
   

    createTodo = todo =>{
        todo.id = shortid.generate;
        todo.time = new Date();
        todo.isSelect = false;
        todo.isComplete = false

        const todos = [todo,...this.state.todos]
        this.setState({todos})
        this.toggleForm()
    }



    render(){
        console.log(this.state.todos);
        return(
            <div>
                 <h1 className =' display-4 text-center mb-5'>TODO List</h1>
                 <Controllers
                 term = {this.state.searchTerm}
                 view={this.state.view}
                 handleSearch = {this.handleSearch}
                 handleFilter ={this.handleFilter}
                 toggleForm = {this.toggleForm}
                 clearCompleted={this.clearCompleted}
                 clearSelected={this.clearSelected}
                 changeView={this.changeView}
                 reset={this.reset}
                 />
                 <div> {this.getView()}
                     {/* <ListView
                        todos = {this.state.todos}
                        toggleSelect = {this.toggleSelect}
                        toggleComplete = {this.toggleComplete}
                     />
                 </div>

                 <div>
                     <TableView
                        todos = {this.state.todos}
                        toggleSelect = {this.toggleSelect}
                        toggleComplete = {this.toggleComplete}
                     /> */}
                 </div>
                 
                    <Modal
                    isOpen = {this.state.isOpenTodoForm}
                    toggle = {this.toggleForm}
                    >
                        <ModalHeader toggle = {this.toggleForm}>
                            Create New Todo Item
                        </ModalHeader>

                        <ModalBody>
                                <CreateTodo createTodo = {this.createTodo}/>
                        </ModalBody>
                    </Modal>
            </div>
           
        )
    }
}

export default Todos