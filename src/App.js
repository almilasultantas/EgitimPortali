
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Registration from './Components/Registration';
import Profile from './Components/Users/Profile';
import Education from './Components/Users/Education';
import Dashboard from './Components/Users/Dashboard';

import AdminEducation from './Components/Admin/AdminEducation';
import AdminDashboard from './Components/Admin/AdminDashboard';
import './App.css';

import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/myprofile' element={<Profile/>}/>
        <Route path='/myeducation' element={<Education/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>

        <Route path='/admineducation' element={<AdminEducation/>}/>
        <Route path='/admindashboard' element={<AdminDashboard/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
