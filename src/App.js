import { Route, Routes } from 'react-router-dom';
import './App.css';
import Project from './Page/Project'
import Main from './Page/Main';
import About from './Page/About';
import Nav from './Component/Nav'


function App() {

  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/project' element={<Project/>}></Route>
      </Routes>

      <div className='legal'>
        <div className='copyright'>Copyright © {new Date().getFullYear()}. JiEun Vin. All rights reserved. </div>
      </div>
    </div>
  );
}

export default App;