import React from 'react';
import PropTypes from 'prop-types';
import Shortid from 'shortid'
import {ListGroupItem ,CustomInput, ListGroup, Button} from 'reactstrap';

// const ListItem = ({todo, toggleSelect, toggleComplete}) =>{
//     alert('enterd')
//     return(
//         <h1>{todo.text}</h1>
//     )

// }
   

const ListItem =({todo, toggleSelect, toggleComplete})=>{
    return(
    <ListGroupItem className='d-flex align-items-center'>
        <CustomInput
            type = 'checkbox'
            id = {todo.id}
            checked = {todo.isSelect}
            onChange = {() => toggleSelect(todo.id)}
        />

        <div className='mx-3'>
            <h3> {todo.text}</h3>
            <p>{todo.time.toDateString()}</p>
        
        </div>

        <Button className='ml-auto' color ={todo.iscomplete ? 'danger' : 'success'} onClick ={()=>toggleComplete(todo.id)}>
            {todo.iscomplete ? 'completed' : 'running'}

        </Button>
    
    </ListGroupItem>
    )
}
 
ListItem.propTypes =
{
    todo : PropTypes.object.isRequired,
    toggleSelect : PropTypes.func.isRequired,
    toggleComplete  : PropTypes.func.isRequired
}


const ListView =({todos, toggleSelect , toggleComplete})=>{
    toggleComplete()
    toggleSelect()
    return(
        <div>
        <ListGroup>
        {todos.map(todo=>{
            return(
            <ListItem
            key = {todo.id}
            todo = {todo}
            toggleSelect = {toggleSelect}
            toggleComplete = {toggleComplete}
        />
            )
        }
            
          )}
        </ListGroup>
        </div>
    )
    
    
}

ListView.propTypes =
{
    todos : PropTypes.array.isRequired,
    toggleSelect : PropTypes.func.isRequired,
    toggleComplete : PropTypes.func.isRequired
}

export default ListView 