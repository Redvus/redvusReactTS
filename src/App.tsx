// import React from 'react';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// import { RouterProvider } from 'react-router-dom';
// import { router } from './routes';

// import AdminLogin from './admin/pages/AdminLogin';
// import AdminDashboard from './admin/pages/AdminDashboard';

import { GalleryProvider } from './contexts/GalleryContext';
import Gallery from './components/Gallery';
import Preloader from './components/Preloader';

import './scss/app.scss';
import './assets/fonts/fontawesome-free-7.0.0-web/scss/fontawesome.scss';
import './assets/fonts/fontawesome-free-7.0.0-web/scss/regular.scss';
import './assets/fonts/fontawesome-free-7.0.0-web/scss/solid.scss';
import './assets/fonts/fontawesome-free-7.0.0-web/scss/brands.scss';

const App: React.FC = () => {

    const [preloaderComplete, setPreloaderComplete] = useState(false);

    const handlePreloaderComplete = () => {
        console.log('Preloader complete callback');
        setPreloaderComplete(true);
    };

    return (
        <GalleryProvider>
            <Preloader
                minDisplayTime={2500}
                onComplete={handlePreloaderComplete}
            />

            {/* {preloaderComplete && ( */}
            <Router>
                <Routes>
                    {/* <Route path="/admin/login" element={<AdminLogin />} /> */}
                    {/* <Route path="/admin/*" element={<AdminDashboard />} /> */}

                    <Route path="*" element={<Navigate to="/" replace />} />
                    <Route path="/" element={<Gallery />} />
                </Routes>
            </Router>
            {/* )} */}
        </GalleryProvider>
    );
};

export default App;
