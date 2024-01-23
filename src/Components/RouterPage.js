import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Registration from './Registration';
import Profile from './Users/Profile';
import Education from './Users/Education';
import Dashboard from './Users/Dashboard';

import AdminEducation from './Admin/AdminEducation';
import AdminDashboard from './Admin/AdminDashboard';

export default function RouterPage() {
  return (
    <Router>
      <Routes>
        
        <Route path='/login' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/myprofile' element={<Profile/>}/>
        <Route path='/myeducation' element={<Education/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>

        <Route path='/admineducation' element={<AdminEducation/>}/>
        <Route path='/admindashboard' element={<AdminDashboard/>}/>
      </Routes>
    </Router>
  )
}

