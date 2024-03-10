import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./pages/NavBar";
import About from "./pages/About";
import LogOut from "./pages/LogOut";
import Student from "./pages/Student";
import Faculty from "./pages/Faculty"
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProjectDesc from "./components/Student/ProjectDesc";
import Profile from "./pages/Profile";
import Signup from "./pages/SignUp"; 
import SignIn from "./components/authentication/SignIn";
import ProjectCategories from "./pages/ProjectCategories"; 
import History from './pages/History';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="LogOut" element={<LogOut />} />
          <Route path="Student" element={<Student />} />
          <Route path="ProjectCategories" element={<ProjectCategories />} /> 
          <Route path="ProjectDesc" element={<ProjectDesc />} />
          <Route path="Profile" element={<Profile/>}/>
          <Route path="History" element={<History />} />
          <Route path="Login" element={<Login />} />
          <Route path="Login" element={<SignIn />} />
          <Route path="SignUp" element={<Signup />} />
          <Route path="Faculty" element={<Faculty />} />
          <Route path="About" element={<About />} />
      
          
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
