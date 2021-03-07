import React from 'react';
import {Label,CustomInput} from 'reactstrap'
import PropTypes from 'prop-types'

const viewController= ({view, changeView})=>{
    return(
        <div className='d-flex'>
            <Label for='List-View' className='mr-4'>
                <CustomInput
                  type='radio'
                  name='view'
                  value='List'
                  id='List-View'
                  onChange={changeView}
                  className='d-inline-block'
                  checked={view==='List'}
                />
                    List-View
            </Label>

            <Label for='Table-View' className='mr-4'>
                <CustomInput
                  type='radio'
                  name='view'
                  value='Table'
                  id='Table-View'
                  onChange={changeView}
                  className='d-inline-block'
                  checked={view==='Table'}
                />
                    Table View
            </Label>

        </div>
    )
}

viewController.propTypes={
    view : PropTypes.string.isRequired,
    changeView :PropTypes.func.isRequired
}
export default viewController