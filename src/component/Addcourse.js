import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const Addcourse = () => {

  let [course, setCourse] = useState('');
  let [Fee, setFee] = useState('');

  var token = localStorage.getItem('token');
  let { id } = useParams();

  var obj = {
    coursename: course,
    coursefee: Fee 
  }


  // let [editcourse, seteditcourse] = useState('');

  // useEffect(() => {
  //   axios.get('http://localhost:5000/course/Get_Single_Course/${id}', {
  //     headers: {
  //       'Authorization': token
  //     }
  //   })
  //     .then(function (response) {
  //       console.log(response.data);
  //       seteditcourse(response.data.coursename);

  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  // })8

  
  const btnhandler = () => {


    console.log(obj);
    axios.post('http://localhost:5000/course/AddCourse', obj, {
      headers: {
        Authorization: token
      }
    })
      .then(function (response) {
        console.log(response.data);
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

        <h2 className='mt-5'>Add Course</h2>

        <input className='me-3' type="text" value={course} placeholder="Course Name" onChange={(e) => { setCourse(e.target.value) }} />
        <input className='me-3' type="text" name="" value={Fee} placeholder="Course Fee" onChange={(e) => { setFee(e.target.value) }} />
        <button onClick={btnhandler} >Click Here</button>


      </div>
    </>
  )
}

export default Addcourse;
