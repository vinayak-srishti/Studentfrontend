import React from 'react'
import './viewteacherprofile.css'
import photo4 from '../../Assets/imgteacher5.jpg'
function viewteacherprofile() {
  return (
    <div id="big4">
        <ul class="nav nav-underline" id="ul">
            <li class="nav-item">
                <a class="nav-link active" href="./homepage.html" id="pro5">HOME</a>
              </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="./registerstudesnt.html" id="reg4">REGISTER STUDENT</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="./viewteacherprofile.html" id="pro6">PROFILE</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="./add time table .html" id="tim4">TIME TABLE</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="./publish notification.html" id="not4">NOTIFICATION</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="./view all students.html" id="stud4">STUDENT LIST</a>
            </li>
            <li class="nav-item">
              <button type="button" class="btn btn-warning" id="log4"><a href="./login.html">LOGOUT</a></button>
            </li>
          </ul>
    
        <div id="new4">
        <h1>PROFILE</h1>
        <img src={photo4}  id="img4"alt="image"/>
        <table id="table4">
            <tr>
                <td>NAME :</td>
                <td>SONIYA P</td>
            </tr>
            <tr>
                <td>TEACHER ID :</td>
                <td>PWC0018</td>
            </tr>
            <tr>
                <td>EMAIL ID :</td>
                <td>soniyasuresh6@gmail.com</td>
            </tr>
            <tr>
                <td>PHONE NUMBER :</td>
                <td>9188780383</td>
            </tr>
            <tr>
                <td>DEPARTMENT :</td>
                <td>MATHEMATICS</td>
            </tr>
            <tr>
                <td>ADRESS :</td>
                <td>c-189, ISRO STAFF QUARTERS,THUMBA.</td>
            </tr>
        </table>
        <button type="submit" id="h4" class="btn btn-success">EDIT</button>
         {/* <button type="submit" id="back" class="btn btn-success"><a href="./homepage.html">BACK</a></button>     */}
    </div>
    </div>
  )
}

export default viewteacherprofile