import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Header from './Header';
import Sidebar from './Sidebar';


const GeneralElement = () => {
    
    return (
        <>
        <Header/>
        <Sidebar/>
            <div className='dashpad m-3'>
                <Form noValidate  className='border bgcol1'>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" >
                            <Form.Label>Enter Data</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                defaultValue=" "
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="4">
                            <Form.Label>Other</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                defaultValue=" "
                            />
                        </Form.Group>
                    </Row>
                    <Button type="submit">Submit form</Button>
                </Form>
            </div>
        </>
    )
}

export default GeneralElement
