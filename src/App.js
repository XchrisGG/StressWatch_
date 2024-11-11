import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Login from './components/views/Login';
import Register from './components/views/Register';
import Menu from './components/views/Menu';

function App() {
  return (
    <Router>
    <div className='App'>
      <Routes>

        <Route exact path='/' element={<Login/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/menu' element={<Menu/>}/>

      </Routes>

    </div>
    </Router>
  );
}

export default App;
