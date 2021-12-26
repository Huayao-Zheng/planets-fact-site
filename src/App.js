import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import data from './data.json';
import Mercury from './pages/Mercury';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Mercury />}></Route>
                <Route path="mercury" element={<Mercury />}></Route>
            </Routes>
        </>
    );
};

export default App;
