import React, { useState } from 'react'
import { Form, Button, Collapse } from 'react-bootstrap'
import { AiOutlineSearch, AiFillFile } from "react-icons/ai";
import { FaTachometerAlt, FaChartPie, FaTree ,FaFile} from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { BsCircle } from "react-icons/bs";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { HiTable } from "react-icons/hi";
import { Link } from 'react-router-dom';


const Sidebar = () => {

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

  return (
    <>
      <Dashboard/>
      <div className='sidebar_scroll '>
        <ul className='bgcolorsidebar list-unstyled'>
          {/* ------------Logo-------------- */}
          <li className='border-bottom pt-2 pb-2'>
            <img src={require('../images/AdminLTELogo.png')} width='30px' /><span> <Link to='/dashboard'>AdminLTE 3</Link></span>
          </li>
          {/* ------------Logo 2------------- */}
          <li className='border-bottom pt-3 pb-3'>
            <img className='rounded-circle' src={require('../images/user2.jpg')} width='30px' /><span>Alexander Pierce</span>
          </li>
          {/* ------------search------------- */}
          <li className='p-2'>
            <Form className="d-flex">
              <Form.Control
                type="search outline-secondary"
                placeholder="Search"
                className=""
                aria-label="Search"

              />
              <Button className='bg-dark'><AiOutlineSearch className='text-white fs-4 fw-bold '></AiOutlineSearch></Button>
            </Form>
          </li>
          {/* ------------Dashboard------------- */}


          <li>
            <Button
              onClick={() => setOpen(!open)}
              aria-controls='example-collapse-text'
              aria-expanded={open} className='text-start btn1' >

              <span className='outline-light'><FaTachometerAlt className='me-3 fs-5'></FaTachometerAlt>Dashboard <MdOutlineKeyboardArrowLeft className=''></MdOutlineKeyboardArrowLeft></span>
            </Button>
            <Collapse in={open}>
              <ul id='example-collapse-text' className='list-unstyled ps-0 text-start'>
                <li><Link to='Dashboard_1'><BsCircle className='me-3 fs-6'></BsCircle>Dashboard v1</Link></li>
                <li><Link to='Dashboard_2'><BsCircle className='me-3 fs-6'></BsCircle>Dashboard v2</Link></li>
                <li><Link to='Dashboard_3'><BsCircle className='me-3 fs-6'></BsCircle>Dashboard v3</Link></li>
              </ul>
            </Collapse>
          </li>
          {/* ------------Widgets------------- */}
          <li className='list-unstyled text-start'>
            <Button
              variant="outline-secondary"
              aria-controls='example-collapse-text'
              aria-expanded={open} className='text-start colorlayout btn1' >

              <span className='outline-light'><BsFillGrid3X3GapFill className='me-3 fs-5'></BsFillGrid3X3GapFill>Widgets</span>
            </Button>

          </li>
          {/* ------------Layout all------------- */}
          {/* <li>
            <Button
              variant="outline-secondary"
              onClick={() => setOpen1(!open1)}
              aria-controls='example-collapse-text'
              aria-expanded={open1} className='text-start colorlayout btn1' >

              <span className='outline-light'><AiFillFile className='me-3 fs-5'></AiFillFile>Layout <MdOutlineKeyboardArrowLeft className='text-end '></MdOutlineKeyboardArrowLeft></span>
            </Button>
            <Collapse in={open1}>
              <ul id='example-collapse-text' className='list-unstyled ps-0 text-start'>
                <li><Link to='Dashboard_1'><BsCircle className='me-3 fs-6'></BsCircle>Top Navigation</Link></li>
                <li><Link to='Dashboard_2'><BsCircle className='me-3 fs-6'></BsCircle>Top Navigation + Sidebar</Link></li>
                <li><Link to='Dashboard_3'><BsCircle className='me-3 fs-6'></BsCircle>Boxed</Link></li>
                <li><Link to='Dashboard_3'><BsCircle className='me-3 fs-6'></BsCircle>Fixed Sidebar</Link></li>
                <li><Link to='Dashboard_3'><BsCircle className='me-3 fs-6'></BsCircle>Fixed Navbar</Link></li>
                <li><Link to='Dashboard_3'><BsCircle className='me-3 fs-6'></BsCircle>Fixed Footer</Link></li>
                <li><Link to='Dashboard_3'><BsCircle className='me-3 fs-6'></BsCircle>Collapsed Sidebar</Link></li>
              </ul>
            </Collapse>
          </li> */}
          {/* ------------Charts------------- */}
          <li>
            <Button
              onClick={() => setOpen2(!open2)}
              variant="outline-secondary"
              aria-controls='example-collapse-text'
              aria-expanded={open2} className='text-start colorlayout btn1' >

              <span className='outline-light'><FaChartPie className='me-3 fs-5' ></FaChartPie>Charts<MdOutlineKeyboardArrowLeft className=''></MdOutlineKeyboardArrowLeft></span>
            </Button>
            <Collapse in={open2}>
              <ul id='example-collapse-text' className='list-unstyled ps-0 text-start'>
                <li><Link to='chart js'><BsCircle className='me-3 fs-6'></BsCircle>Chart JS</Link></li>
                <li><Link to='flot'><BsCircle className='me-3 fs-6'></BsCircle>Flot</Link></li>
                <li><Link to='inline'><BsCircle className='me-3 fs-6'></BsCircle>Inline</Link></li>
                <li><Link to='uploat'><BsCircle className='me-3 fs-6'></BsCircle>uPlot</Link></li>
              </ul>
            </Collapse>
          </li>
          {/* ------------Ui Elements------------- */}
          {/* <li>
            <Button
              onClick={() => setOpen3(!open3)}
              variant="outline-secondary"
              aria-controls='example-collapse-text'
              aria-expanded={open3} className='text-start colorlayout btn1' >

              <span className=''><FaTree className='me-3 fs-5'></FaTree>UI Elements<MdOutlineKeyboardArrowLeft className=''></MdOutlineKeyboardArrowLeft></span>
            </Button>
            <Collapse in={open3}>
              <ul id='example-collapse-text' className='list-unstyled ps-0 text-start'>
                <li><Link to='general'><BsCircle className='me-3 fs-6'></BsCircle>General</Link></li>
                <li><Link to='icons'><BsCircle className='me-3 fs-6'></BsCircle>Icons</Link></li>
                <li><Link to='buttons'><BsCircle className='me-3 fs-6'></BsCircle>Buttons</Link></li>
                <li><Link to='sliders'><BsCircle className='me-3 fs-6'></BsCircle>Sliders</Link></li>
                <li><Link to='modals & alert'><BsCircle className='me-3 fs-6'></BsCircle>Modals & Alerts</Link></li>
                <li><Link to='modals & tabs'><BsCircle className='me-3 fs-6'></BsCircle>Modals & Tabs</Link></li>
                <li><Link to='timeline'><BsCircle className='me-3 fs-6'></BsCircle>Timeline</Link></li>
                <li><Link to='ribbons'><BsCircle className='me-3 fs-6'></BsCircle>Ribbons</Link></li>
              </ul>
            </Collapse>
          </li> */}
          {/* ------------Forms------------- */}
          <li>
            <Button
              onClick={() => setOpen4(!open4)}
              variant="outline-secondary"
              aria-controls='example-collapse-text'
              aria-expanded={open4} className='text-start colorlayout btn1' >

              <span className='outline-light'><FaFile className='me-3 fs-5'></FaFile>Forms<MdOutlineKeyboardArrowLeft className=''></MdOutlineKeyboardArrowLeft></span>
            </Button>
            <Collapse in={open4}>
              <ul id='example-collapse-text' className='list-unstyled ps-0 text-start'>
                <li><Link to='/addcourse'><BsCircle className='me-3 fs-6'></BsCircle>Add Course</Link></li>
                <li><Link to='/viewcourse'><BsCircle className='me-3 fs-6'></BsCircle>View Course</Link></li>
                <li><Link to='/Admission'><BsCircle className='me-3 fs-6'></BsCircle>Admission</Link></li>
                <li><Link to='validation'><BsCircle className='me-3 fs-6'></BsCircle>Validation</Link></li>
              </ul>
            </Collapse>
          </li>
          {/* ------------tables------------- */}
          <li>
            <Button
              onClick={() => setOpen5(!open5)}
              variant="outline-secondary"
              aria-controls='example-collapse-text'
              aria-expanded={open5} className='text-start colorlayout btn1' >

              <span className=''><HiTable className='me-3 fs-5' ></HiTable>Tables<MdOutlineKeyboardArrowLeft className=''></MdOutlineKeyboardArrowLeft></span>
            </Button>
            <Collapse in={open5}>
              <ul id='example-collapse-text' className='list-unstyled ps-0 text-start'>
                <li><Link to='simple tables'><BsCircle className='me-3 fs-6'></BsCircle>Simple Tables</Link></li>
                <li><Link to='datatables'><BsCircle className='me-3 fs-6'></BsCircle>DataTables</Link></li>
                <li><Link to='jsgrid'><BsCircle className='me-3 fs-6'></BsCircle>jsGrid</Link></li>
              </ul>
            </Collapse>
          </li>

        </ul>
      </div>
    </>
  )
}

export default Sidebar
