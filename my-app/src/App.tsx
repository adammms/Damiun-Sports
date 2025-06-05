import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import OtherSport from './OtherSport';
import DetailSport from './DetailSport';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/othersport" element={<OtherSport/>} />
        <Route path="/detailsport" element={<DetailSport/>} />
        </Routes> 
   </BrowserRouter>
  );
}

export default App;
