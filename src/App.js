import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Mercury, Venus } from './pages';

const App = () => {
    return (
        <Routes>
            <Route path="/mercury" element={<Mercury />} />
            {/* <Route path="/venus" element={<Venus />} /> */}
            <Route path="/*" element={<Navigate replace to="/mercury" />} />
        </Routes>
    );
};

export default App;
