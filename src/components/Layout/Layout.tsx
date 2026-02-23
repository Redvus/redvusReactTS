import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import PageTransition from '../Animations/PageTransition/PageTransition';

const Layout: React.FC = () => {
    return (
        <div className="app">
            <Header />
            <main className="main-content">
                <PageTransition>
                    <Outlet />
                </PageTransition>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;