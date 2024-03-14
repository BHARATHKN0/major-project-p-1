// import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/accounts/Login';
import DataProvider from './context/DataProvider';
import Home from './components/home/Home';
import Header from './components/header/Header';


function App() {
  return (
    
      <DataProvider>
        <BrowserRouter>
        <Header />
        <div >
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Home/>} />
          </Routes>
          {/* <Login />
          <Home /> */}
        </div>
        </BrowserRouter>
      </DataProvider>
    
  );
}

export default App;
