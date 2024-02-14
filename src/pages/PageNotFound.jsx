import React from 'react'
import Navigation from '../components/navigation/Navigation'
import Navbar from '../components/navbar/Navbar';
import NotFound from '../components/notFound/NotFound';

export default function PageNotFound() {
  return (
    <div>
        <Navigation/> 
        <NotFound />
        <Navbar />
    </div>
  );
}
