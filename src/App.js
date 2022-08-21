import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/views/Home';
import NotMatch from './components/views/NotMatch';
import Record from './components/views/Record';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:stateId" element={<Record />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </>
  );
}

export default App;
