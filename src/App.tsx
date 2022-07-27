import React, { CSSProperties } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Chat from './pages/Chat';
import ClipLoader from "react-spinners/ClipLoader";
import  'bootstrap/dist/css/bootstrap.min.css' ;
import Login from './pages/Login';

const  App = ()=> {
  return (
   <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
