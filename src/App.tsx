import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
// import AdminLogin from './admin/pages/AdminLogin';
// import AdminDashboard from './admin/pages/AdminDashboard';
// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';

// import Gallery from './components/Gallery';

const App: React.FC = () => {

    // return (
    //     <Router>
    //         <Routes>
    //             <Route path="/" element={<Gallery />} />
    //             <Route path="/admin/login" element={<AdminLogin />} />
    //             <Route path="/admin/*" element={<AdminDashboard />} />
    //             <Route path="*" element={<Navigate to="/" replace />} />
    //         </Routes>
    //     </Router>
    // );

    return <RouterProvider router={router} />;
};

export default App;
