import React from 'react'
import { Button ,Offcanvas  } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiFillDatabase, AiOutlineSearch ,AiOutlineFullscreen } from "react-icons/ai";
import { BiMessageRounded ,BiBell} from "react-icons/bi";
import { FaThLarge} from "react-icons/fa";
import HeaderOffcanvas from './HeaderOffcanvas';
import { useState } from 'react';

const Header = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <div className='head'>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
          <HeaderOffcanvas/>
          <Container className='headcol'>
            {/* <Button className='headbut'> <AiFillDatabase></AiFillDatabase></Button> */}
            {/* <Navbar.Brand href="#home">HOme</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

              <Nav className="me-auto">
                <Nav.Link href="#Home">Home</Nav.Link>
                <Nav.Link href="#pricing">Contact</Nav.Link>

              </Nav>
              <Nav className='headicon'>
                <Nav.Link> <AiOutlineSearch className='padin'></AiOutlineSearch></Nav.Link>
                <Nav.Link><BiMessageRounded className='padin'></BiMessageRounded></Nav.Link>
                <Nav.Link><BiBell className='padin'></BiBell></Nav.Link>
                <Nav.Link><AiOutlineFullscreen className='padin'></AiOutlineFullscreen> </Nav.Link>
                {/* <Nav.Link><BsFillGridFill></BsFillGridFill></Nav.Link> */}
                <Nav.Link>
                                    <li><a><FaThLarge onClick={handleShow}></FaThLarge></a></li>
                                <div className='openhedersidebar'>
                                    <Offcanvas show={show} onHide={handleClose} >
                                        <Offcanvas.Header closeButton>
                                            <Offcanvas.Title><h5>Customize AdminLTE</h5></Offcanvas.Title>
                                        </Offcanvas.Header>
                                        <Offcanvas.Body>
                                            <div>
                                                <input type='checkbox' value='1' /><span className='ms-2'>Dark Mode</span>
                                            </div>
                                            <ul className='py-3 list-unstyled'>
                                                <h6>Header Options</h6>
                                                <li><input type='checkbox' value='1' /><span className='ms-2 subname'>Fixed</span></li>
                                                <li><input type='checkbox' value='1' /><span className='ms-2 subname'>Dropdown Legacy Offset</span></li>
                                                <li><input type='checkbox' value='1' /><span className='ms-2 subname'>No border</span></li>
                                            </ul>
                                            <ul className='py-3 list-unstyled'>
                                                <h6>Sidebar Options</h6>
                                                <li><input type='checkbox' value='1' /><span className='ms-2 subname'>Collapsed</span></li>
                                                <li><input type='checkbox' value='1' /><span className='ms-2 subname '>Fixed</span></li>
                                                <li><input type='checkbox' value='1' /><span className='ms-2 subname'>Sidebar Mini</span></li>
                                                <li><input type='checkbox' value='1' /><span className='ms-2 subname'>Sidebar Mini MD</span></li>
                                                <li><input type='checkbox' value='1' /><span className='ms-2 subname'>Sidebar Mini XS</span></li>
                                                <li><input type='checkbox' value='1' /><span className='ms-2 subname'>Nav Flat Style</span></li>
                                                <li><input type='checkbox' value='1' /><span className='ms-2 subname'>Nav Legacy Style</span></li>
                                                <li><input type='checkbox' value='1' /><span className='ms-2 subname'>Nav Compact</span></li>
                                                <li><input type='checkbox' value='1' /><span className='ms-2 subname'>Nav Child Indent</span></li>
                                                <li><input type='checkbox' value='1' /><span className='ms-2 subname'>Nav Child Hide on Collapse</span></li>
                                                <li><input type='checkbox' value='1' /><span className='ms-2 subname'>Disable Hover/Focus Auto-Expand</span></li>
                                            </ul>
                                            <ul className='py-3 list-unstyled'>
                                                <h6>Footer Options</h6>
                                                <li><input type='checkbox' value='1' /><span className='ms-2 subname '>Fixed</span></li>
                                            </ul>
                                            <ul className='py-3 list-unstyled'>
                                                <h6>Small Text Options</h6>
                                                <li><input type='checkbox' value='1' /><span className='ms-2 subname '>Body</span></li>
                                                <li><input type='checkbox' value='1' /><span className='ms-2 subname '>Navbar</span></li>
                                                <li><input type='checkbox' value='1' /><span className='ms-2 subname '>Brand</span></li>
                                                <li><input type='checkbox' value='1' /><span className='ms-2 subname '>Sidebar Nav</span></li>
                                                <li><input type='checkbox' value='1' /><span className='ms-2 subname '>Footer</span></li>
                                            </ul>
                                            <div>
                                                <h6>Navbar Variants</h6>
                                                <select className='selece_width'>
                                                    <option selected>White</option>
                                                    <option className='bg-primary'>Primary</option>
                                                    <option className='bg-warning'>Warning</option>
                                                </select>
                                            </div>
                                            
                                        </Offcanvas.Body>
                                    </Offcanvas>
                                </div>
                            </Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </div>
    </>
  )
}

export default Header
