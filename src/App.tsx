import React from 'react';
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// import { RouterProvider } from 'react-router-dom';
// import { router } from './routes';

// import AdminLogin from './admin/pages/AdminLogin';
// import AdminDashboard from './admin/pages/AdminDashboard';

import { GalleryProvider } from './contexts/GalleryContext';
import Gallery from './components/Gallery';
import Preloader from './components/Layout/Preloader';

import './scss/app.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App: React.FC = () => {

    // const [preloaderComplete, setPreloaderComplete] = useState(false);

    // const handlePreloaderComplete = () => {
    //     // console.log('Preloader complete callback');
    //     setPreloaderComplete(true);
    // };

    return (
        <GalleryProvider>
            <Preloader
                minDisplayTime={1.5}
                minDisplayDelay={1800}
            // onComplete={handlePreloaderComplete}
            />

            {<Gallery />}

            {/* {preloaderComplete && ( */}
            {/* <Router>
                <Routes>
                    <Route path="/admin/login" element={<AdminLogin />} />
                    <Route path="/admin/*" element={<AdminDashboard />} />

                    <Route path="*" element={<Navigate to="/" replace />} />
                    <Route path="/" element= />
                </Routes>
            </Router> */}
            {/* )} */}
        </GalleryProvider>
    );
};

export default App;
