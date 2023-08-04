import React, { useState, useEffect } from 'react';

import {
  BrowserRouter, Link, Route, Routes
} from "react-router-dom";
import axios from 'axios';
import Home from './components/pages/home'
import SignUp from './components/pages/signUp';
import Login from './components/pages/login'
import Header from './components/partials/header'
import Footer from './components/partials/footer'
import RouterApp from './routes/router';
import './App.css'
import DataProvider from './components/dataContext';

function App() {

  return (
    <>
    <DataProvider>
    <BrowserRouter>
      <RouterApp />
    
        </BrowserRouter>

    </DataProvider>
     
  
    </>
  );
}

export default App;