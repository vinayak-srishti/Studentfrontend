import React from 'react'
import './teacherhomepage.css'
import photo1 from '../../Assets/img1.jpg'
import photo2 from '../../Assets/img2.jpg'
import photo3 from '../../Assets/img3.jpg'
function teacherhomepage() {
  return (
    <div id="big2">
        <div class="container text-center">
        <div class="row align-items-end">
        <div class="container">
          <ul class="nav nav-underline">
            <li class="nav-item">
              <a class="nav-link active" href="./homepage.html" id="pro3">HOME</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="./registerstudesnt.html" id="reg2">REGISTER STUDENT</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="./viewteacherprofile.html" id="pro4">PROFILE</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="./add time table .html" id="tim2">TIME TABLE</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="./publish notification.html" id="not2">NOTIFICATION</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="./view all students.html" id="stud2">STUDENT LIST</a>
            </li>
            <li class="nav-item">
              <button type="button" class="btn btn-warning" id="log2"><a href="./login.html">LOGOUT </a></button>
              </li>
          </ul>
          </div>
        <h1  id="home2">HOME PAGE</h1>
        <hr/>
       {/* <img src="./" id="img"> */}
        <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={photo1}  id="img1" class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src={photo2}  id="img2"class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src={photo3}  id="img3" class="d-block w-100" alt="..."/>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
            </div>
            </div>
          </div>
    </div>
  )
}

export default teacherhomepage