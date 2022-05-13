import React from 'react';

import Dashboard from './Page/Dashboard';

import Search from './Page/Search';

import Home from './Page/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Search' element={<Search />}/>
          <Route path='/Add' element={<Dashboard />}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
