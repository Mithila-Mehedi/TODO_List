import React from 'react';
import PropTypes from 'prop-types'
import SearchPannel from './search-pannel'
import {Row,Col}from 'reactstrap'
import BulkController from './bulk-controller'
import FilterController from './filter_controlle'
import ViewController from './view-controller'

const Controllers = ({term,handleSearch, toggleForm, view, handleFilter,changeView,reset, clearSelected,clearCompleted}) =>{
    return(
        <div>
         <SearchPannel
        term = {term}
        handleSearch = {handleSearch}
        toggleForm = {toggleForm}
    />

    <Row className='my-4'>
        <Col md={{size: 4}}>
            <FilterController handleFilter={handleFilter}/>
        </Col>
        <Col md={{size: 4}}>
            <ViewController view={view} changeView={changeView}/>
        </Col>
        <Col md={{size: 4}} className='d-flex'>
            <div className='ml-auto'>
                <BulkController
                   clearCompleted={clearCompleted}
                    clearSelected={clearSelected}
                    reset={reset}
                />

            </div>

        </Col>
    </Row>

    </div>
    )
    
   
}
Controllers.propTypes={
    clearSelected : PropTypes.func.isRequired,
    clearCompleted : PropTypes.func.isRequired,
    reset:  PropTypes.func.isRequired,
    term : PropTypes.string.isRequired,
    handleSearch : PropTypes.func.isRequired,
    toggleForm : PropTypes.func.isRequired,
    handleFilter : PropTypes.func.isRequired,
    view: PropTypes.string.isRequired,
    changeView : PropTypes.func.isRequired
}
export default Controllers