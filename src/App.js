import React from 'react';
import Signin from './components/Signin';
import Signup from './components/Signup'
import Forgotpassword from './components/Forgotpassword';
import Redirect from './components/Redirect';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/Signin' />}></Route>
        <Route path='/' element={<Navigate to='/Signup' />}></Route>
        <Route path='/' element={<Navigate to='/Forgotpassword' />}></Route>
        <Route path='/' element={<Navigate to='/Redirect' />}></Route>
        <Route path='/Signin' element={<Signin />}></Route>
        <Route path='/Signup' element={<Signup />}></Route>
        <Route path='/Forgotpassword' element={<Forgotpassword />}></Route>
        <Route path='/Redirect' element={<Redirect />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;