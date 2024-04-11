import './App.css'
import Login from './App/pages/Login'
import { Routes, Route } from "react-router-dom";
import HomePage from './App/pages/HomePage';
import ProtectedRouted from './App/components/ProtectedRouted';
import AboutUs from './App/pages/AboutUs';
import CompanyShowcase from './App/pages/CompanyShowcase';
import JobListings from './App/pages/JobListings';
import Contact from './App/pages/Contact';
import Employees from './App/pages/Employees';
import AddJobPosts from './App/pages/AddJobPosts';
import JobPosts from './App/pages/JobPosts';

function App() {

  const user = localStorage.getItem("token");

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <Routes>
              <Route exact path="/" element={<Login/>} />
              <Route element={<ProtectedRouted allowedRoles={["employee"]}/>}>
                <Route exact path='/home' element={<HomePage/>}/>
                <Route exact path='/aboutus' element={<AboutUs/>}/>
                <Route exact path='/companyshowcase' element={<CompanyShowcase/>}/>
                <Route exact path='/joblistings' element={<JobListings/>}/>
                <Route exact path='/contact' element={<Contact/>}/>
                <Route exact path='/jobPosts' element={<JobPosts/>}/>
              </Route>
              <Route element={<ProtectedRouted allowedRoles={["admin"]}/>}>
                <Route exact path='/employees' element={<Employees/>}/>
                <Route exact path='/addjob' element={<AddJobPosts/>}/>
              </Route>
            </Routes>
    </>
  )
}

export default App
