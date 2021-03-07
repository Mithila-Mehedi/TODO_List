import React from 'react';
import {Input, Button } from 'reactstrap'
import PropTypes from 'prop-types'
const SearchPannel= ({term, handleSearch, toggleForm}) =>{
    return(
    <div className= 'd-flex'>
         <Input
         className ='mr-3'
        placeholder = "search any term"
        name = 'term'
        value = {term}
        onChange = {(e)=>handleSearch(e.target.value)}

    />
    <Button onClick = {toggleForm} color = 'success'>New</Button>

    </div>
   
    )
}

SearchPannel.propTypes={
    term : PropTypes.string.isRequired,
    handleSearch : PropTypes.func.isRequired,
    toggleForm : PropTypes.func.isRequired
}
export default SearchPannel