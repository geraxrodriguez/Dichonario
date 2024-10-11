import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import DichosPage from './pages/DichosPage'
import SingleDichoPage from './pages/SingleDichoPage';
import SubmitDichoPage from './pages/SubmitDichoPage';
import SuccessPage from './pages/SuccessPage';
import SearchResultsPage from './pages/SearchResultsPage';
import AdminCreateDichoPage from './pages/AdminCreateDichoPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={< MainLayout />}>
        <Route index element={< Home />} />
        <Route path="/dichos" element={< DichosPage />} />
        <Route path="/dichos/:id" element={< SingleDichoPage />} />
        <Route path="/submit-dicho" element={< SubmitDichoPage />} />
        <Route path="/success" element={< SuccessPage />} />
        <Route path="/search" element={<SearchResultsPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/admin/create-dicho" element={< AdminCreateDichoPage />} />
    </Routes>
  );
};

export default App;