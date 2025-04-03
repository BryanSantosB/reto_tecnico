import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BusList from './components/BusList';
import BusForm from './components/BusForm';
import BusSearch from './components/BusSearch';
import MarcaList from './components/MarcaList';
import MarcaForm from './components/MarcaForm';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div>
        
        <Header/>
        <Routes>
          <Route path="/buses" element={<BusList />} />
          <Route path="/buses/create" element={<BusForm />} />
          <Route path="/buses/search" element={<BusSearch />} />
          <Route path="/marcas" element={<MarcaList />} />
          <Route path="/marcas/create" element={<MarcaForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;