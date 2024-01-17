import React from 'react'
import Form from 'react-bootstrap/Form';
import Sidebar from './Sidebar';
import Header from './Header';

const AdvancedElement = () => {
    return (
        <>
        <Header/>
        <Sidebar/>
        <div className='dashpad m-3'>
            <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
                <option value="5">Five</option>
            </Form.Select>
        </div>
        </>
    )
}

export default AdvancedElement
