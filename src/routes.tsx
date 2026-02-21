// import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
// import About from './pages/About/About';
// import Services from './pages/Services/Services';
// import Contact from './pages/Contact/Contact';
// import NotFound from './pages/NotFound/NotFound';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            // {
            //     path: 'about',
            //     element: <About />,
            // },
            // {
            //     path: 'services',
            //     element: <Services />,
            // },
            // {
            //     path: 'contact',
            //     element: <Contact />,
            // },
            // {
            //     path: '*',
            //     element: <NotFound />,
            // },
        ],
    },
]);