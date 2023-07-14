import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import User from './User';
import CreateUser from './CreateUser';
import EditUser from './EditUser';



function App() {
  
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<User/>}></Route>
        <Route path='/create' element={<CreateUser/>}></Route>
        <Route path='edit/:id' element={<EditUser/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
