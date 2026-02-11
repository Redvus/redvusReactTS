import './scss/app.scss';

// import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// import { RouterProvider } from 'react-router-dom';
// import { router } from './routes';

// import AdminLogin from './admin/pages/AdminLogin';
// import AdminDashboard from './admin/pages/AdminDashboard';

import Gallery from './components/Gallery';

const App: React.FC = () => {

    return (
        <Router>
            <Routes>
                {/* <Route path="/admin/login" element={<AdminLogin />} /> */}
                {/* <Route path="/admin/*" element={<AdminDashboard />} /> */}

                <Route path="*" element={<Navigate to="/" replace />} />
                <Route path="/" element={<Gallery />} />
            </Routes>
        </Router>
    );

    // return <RouterProvider router={router} />;
};

export default App;
