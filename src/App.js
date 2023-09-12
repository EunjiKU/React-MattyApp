import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './components/view/LoginPage';
import MainPage from './components/view/MainPage'
import BookPage from './components/view/BookPage'
import ContactPage from './components/view/ContactPage'
import MyPage from './components/view/MyPage'
import NavUi from './components/ui/NavUi';
import HeaderUi from './components/ui/HeaderUi';

import './App.css'
import './assets/css/common.css'


function App() {
  return (
    <div id="app">
      <HeaderUi />
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginPage />}></Route>
          <Route exact path="/main" element={<MainPage />}></Route>
          <Route exact path="/book" element={<BookPage />}></Route>
          <Route exact path="/contact" element={<ContactPage />}></Route>
          <Route exact path="/my" element={<MyPage/>}></Route>
        </Routes>
        <NavUi />
      </Router>
    </div>
  );
}

export default App;
