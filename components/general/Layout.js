import React from 'react';
import HeadInfo from './HeadInfo';
import Header from './Header';
import Footer from './Footer';
import MobileNavigation from './MobileNavigation';

const Layout = ({children, type}) => {
    return (
        <> 
            <HeadInfo />
            <Header type={type}/>
            {children}
            {/* <Footer /> */}
            
            <MobileNavigation type={type}/>
            
        </>
    );
}
 
export default Layout;