
import React, {Component } from 'react'
import PropTypes from 'prop-types'
import {Form, FormGroup, Button, Label, Input } from 'reactstrap';


class CreateTodoForm extends Component{
    state={
        text: '',
        description : ''
    }


changeHandler =(event)=>{
    this.setState({
        [event.target.name] : event.target.value
    })
}
submitHandler = (event) =>{
    this.props.createTodo(this.state);
    // event.target.reset();
    this.setState({
        text :'',
        description : ''
    })
}

render(){
    return(
        <Form>
            <FormGroup>
                <Label>Enter Task</Label>
                <Input
                name = 'text'
                placeholder = 'enter your task'
                value = {this.state.text}
                onChange = {this.changeHandler}
                
                />
            </FormGroup>

            <FormGroup>
                <Label>Enter Description</Label>
                <Input
                type = "textarea"
                name = 'description'
                placeholder = ' write some short description about your task'
                value = {this.state.description}
                onChange = {this.changeHandler}
                
                />
            </FormGroup>
            <Button onClick={this.submitHandler}>Create Task</Button>
        </Form>
    )
}
}
CreateTodoForm.propTypes={
    createTodo : PropTypes.func.isRequired
}
   


export default CreateTodoForm