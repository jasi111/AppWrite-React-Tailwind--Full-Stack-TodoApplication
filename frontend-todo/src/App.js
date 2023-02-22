
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar';

import Signup from "./components/Signup"
import Profile from "./components/Profile"
import Signin from "./components/Signin";

// import TaskForm from './components/TaskForm';

function App() {
  return (
    <div>
        <Navbar />
<BrowserRouter>
   
   <Routes>
    <Route path="/" element={<Signin/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/profile" element={<Profile/>}/> 


   </Routes>
   </BrowserRouter>


    </div>
  );
}

export default App;
