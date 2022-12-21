import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main'
import './components/styles.css'


import './App.css';

function App() {
  return( 
  <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='#' ></Route>
      </Routes>
    </BrowserRouter>
    </div> 
  );
}

export default App;
