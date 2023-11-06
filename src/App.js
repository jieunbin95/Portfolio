import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Page/Home'
import Project from './Page/Project'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<Project/>}></Route>
      </Routes>

      <div className='legal'>
        <div className='copyright'>Copyright © {new Date().getFullYear()}. JiEun Vin. All rights reserved. </div>
      </div>
    </div>
  );
}

export default App;
