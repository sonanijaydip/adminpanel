import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Sidebar from './Sidebar';
import {AiOutlineBars } from "react-icons/ai";

export const HeaderOffcanvas = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div id='sidebarOffcanvas'>
            <Button className='button_sidebar text-center' onClick={handleShow}>
                <AiOutlineBars></AiOutlineBars>
            </Button>
            <div >
                <Offcanvas show={show} onHide={handleClose} onClick={()=>setShow(false)}>
                    <Offcanvas.Header closeButton>
                        {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
                    </Offcanvas.Header>
                    <Offcanvas.Body>


                        <Sidebar />
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </div>
    )
}
export default HeaderOffcanvas;