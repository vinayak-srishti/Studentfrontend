import React from 'react'
import './registerstudent.css'
function registerstudent() {
    return (
        <div id="big1">

            <ul class="nav nav-underline" id="ul1">
                <li class="nav-item">
                    <a class="nav-link active" href="./homepage.html" id="pro1">HOME</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="./registerstudesnt.html" id="reg1">REGISTER STUDENT</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="./viewteacherprofile.html" id="pro2">PROFILE</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="./add time table .html" id="tim1">TIME TABLE</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="./publish notification.html" id="not1">NOTIFICATION</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="./view all students.html" id="stud1">STUDENT LIST</a>
                </li>
                <li class="nav-item">
                <button type="button" class="btn btn-warning" id="log1">
                    <a href="./login.html">LOGOUT</a>
                </button>
            </li>

        </ul>
       
        <div class="container text-center">
             <div class="row align-items-end" />
             <div class="container">
                <div id="new1">
                     <form>
                         <h1 id="a">REGISTER STUDENT</h1>
                         <table id="table">
                             <tr >
                                 <td>Name : </td>
                                 <td><input type="text" placeholder="enter name" /></td>
                             </tr>
                             <tr >
                                 <td>Student Id : </td>
                                 <td><input type="text" placeholder="enter id" /></td>
                             </tr>
                             <tr>
                                 <td>Email Id :</td>
                                 <td><input type="text" placeholder="enter email" /></td>
                             </tr>
                             <tr>
                                 <td>Password :</td>
                                 <td><input type="text" placeholder="enter password" /></td>
                             </tr>
                             <tr>
                                 <td>Father's Name :</td>
                                 <td><input type="text" placeholder="enter name" /></td>
                            </tr>
                             <tr>
                                <td>Father's Occupation :</td>
                                 <td><input type="text" placeholder="enter occupation" /></td>
                             </tr>
                             <tr>
                                 <td>Mother's Name :</td>
                             </tr>
                             <tr>
                                 <td>Mother's Occupation :</td>
                                 <td><input type="text" placeholder="enter occupation" /></td>
                             </tr>
                             <tr>
                                 <td>Guardian's Name :</td>
                                 <td><input type="text" placeholder="enter name" /></td>
                             </tr>

                             <tr>
                                 <td>Adress</td>
                                 <td><textarea name="message" rows="5" cols="20"></textarea></td>
                             </tr>
                         </table>

                         <button type="submit" class="btn btn-success" id="button">Register</button>
                         {/* <!-- <button type="submit" class="btn btn-success" id="back"><a href="./homepage.html">Back</a></button> --> */}
                     </form>
                 </div>
             </div>
         </div>
         </div >
         
  )
}

export default registerstudent