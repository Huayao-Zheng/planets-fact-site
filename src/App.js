import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
// import data from './data.json';
import Mercury from './pages/Mercury';

const App = () => {
    return (
        <Routes>
            <Route path="/*" element={<Navigate replace to="/mercury" />} />
            <Route path="/mercury" element={<Mercury />} />
            <Route path="/venus" element={<Mercury />} />
        </Routes>
    );
};

export default App;
