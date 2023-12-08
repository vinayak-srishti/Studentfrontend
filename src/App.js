import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Soniya from './Components/teacher/teacherlogin'
import Login from './Components/teacher/teacherlogin'
import Home from './Components/teacher/teacherhomepage'
import Regi from './Components/teacher/registerstudent'
import Prof from './Components/teacher/viewteacherprofile'
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
      <Route path='/log' element={<Login/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/reg' element={<Regi/>}/>
      <Route path='/pro' element={<Prof/>}/>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
