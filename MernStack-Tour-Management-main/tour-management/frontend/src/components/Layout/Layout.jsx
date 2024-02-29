import React from "react"
import Header from './../Header/Header'
import Routers from '../../router/Routers'; // Make sure the path is correct

import Footer from './../Footer/Footer'
const Layout = () => {
    return(
     <>
    <Header />
    <Routers />
    <Footer />
    
     </>
    );
};
 export default Layout