import React from 'react';
import MakeAppointment from './HomeComponents/MakeAppointment';
import Banner from './HomeComponents/Banner';
import Exceptional from './HomeComponents/Exceptional';
import Info from './HomeComponents/Info';
import Services from './HomeComponents/Services';
import Testimonial from './HomeComponents/Testimonial';
import Contact from './HomeComponents/Contact';
import Footer from '../../Sheard/Footer/Footer';

const Home = () => {
    return (
        <>
            <Banner/>
            <Info/>
            <Services/>
            <Exceptional/>
            <MakeAppointment/>
            <Testimonial/>
            <Contact/>
            <Footer/>
        </>
    );
};

export default Home;