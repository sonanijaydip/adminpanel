import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Header from './Header';
import Sidebar from './Sidebar';
import { useParams } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

const Viewcourse = () => {

  let [Course, setCourse] = useState([]);
  let [Fee, setFee] = useState('');
  var token = localStorage.getItem('token');
  let [editcourse, seteditcourse] = useState([]);
  let [coursedata, setcoursedata] = useState([]);
  
  let { id } = useParams();

  useEffect(() => {

    axios.get('http://localhost:5000/course/ViewCourse', {
      headers: {
        Authorization: token
      },
    })
      .then(function (response) {
        setCourse(response.data.data);
        setFee(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      })
  })
  
  const btnremove = (index, e) => {
    var token = localStorage.getItem('token');
    const deletecourse = coursedata[index]._id;


    axios.delete(`http://localhost:5000/course/Delete_Course/${deletecourse}`, {
      headers: {
        Authorization: token
      }
    })
      .then(function (response) {
        console.log(response.data);
        const coursedata = this.state.Course.filter(item => item.index !== index);  
        this.setcoursedata({ coursedata });
        
      })
      .catch((error) => {
        console.error(error);
      })
    
  }

  return (
    <>
      <Header />
      <Sidebar />
      <div className='dashpad m-3'>
        

        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              {/* <th>#</th> */}
              <th>Course Name</th>
              <th>Course Fees</th>
              <th>Remove Data</th>
            </tr>
          </thead>
          <tbody>
            {
              Course.map((content, index) => {
                return (
                  <tr>
                    {/* <td>{index}</td> */}
                    <td>{content.coursename}</td>
                    <td>{content.coursefee}</td>
                    <td>
                      <button onClick={(e) => this.btnremove(index, e)}>Delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>

      </div>
    </>
  )
}

export default Viewcourse;
