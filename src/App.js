import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import routes from './router/routes';
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
          {routes.map((route) => <Route key={route.path} exact path={route.path} element={route.element}></Route>)}
        </Routes>
        <NavUi />
      </Router>
    </div>
  );
}

export default App;
