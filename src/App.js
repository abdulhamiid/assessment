import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/views/Home';
import Cases from './components/views/Cases';
import NotMatch from './components/views/NotMatch';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:stateId" element={<Cases />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </>
  );
}

export default App;
