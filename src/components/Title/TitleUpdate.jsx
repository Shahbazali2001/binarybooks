import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const TitleUpdate = () => {

    const location = useLocation();

    const routeTitles = {
        '/': 'Home',
        '/products': 'Products',
        '/product/:id': 'Product Details',
        '/about': 'About',
        '/contact': 'Contact',
        '/login': 'Login',
        '/register': 'Register',
        '/cart': 'Cart',
        '/checkout': 'Checkout'
    };

    useEffect(() => {
        let title = 'Binary Books';
        if (routeTitles[location.pathname]) {
            title = routeTitles[location.pathname];
        } else if (routeTitles[location.pathname.startsWith('/product/:id')]) {
            title = 'Products Details';
        }  

        document.title = title;
        
    },[location.pathname]);  


  return null;
}

export default TitleUpdate