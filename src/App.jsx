import { useState, useEffect } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import Messenger from './Messenger'
import './App.css'
//import {Router, Routes, Route} from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  /*
  const [currentPage, setCurrentPage] = useState('home');

  const handleSidebarItemClick = (pageName) => {
    setCurrentPage(pageName);
    console.log(pageName);
  };

  useEffect(() => {
    console.log(currentPage);
  }, [currentPage])
*/
  /*
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'messenger': {
        return <Messenger onSidebarItemClick={handleSidebarItemClick}/>;
        }
      default:
        return <Home />;
    }
  };
  */

  return (
    <div className='grid-container'>
        <Header/>
        <Sidebar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/Messenger" element={<Messenger/>}/>
        </Routes>
    </div>
  )
}

export default App
