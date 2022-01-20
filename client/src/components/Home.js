import React from 'react';
import Login from './Login';
import {Router,Route, Routes, useHistory, BrowserRouter, Navigate, Link} from 'react-router-dom'

function Home() {

  return <div>
      <div className='container text-center'>
          <h1 className='p-4'>Welcome to Nothing</h1>
          <div className='mt-4'>
          <Link className="btn btn-primary " to="/login">Login </Link>
      <Link className="btn btn-primary" to="/register">Register </Link>
          </div>
      
      </div>
      
      
  
  </div>;
}

export default Home;
