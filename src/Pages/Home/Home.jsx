import React from 'react';
import MakeAppointment from './HomeComponents/MakeAppointment';
import Banner from './HomeComponents/Banner';
import Exceptional from './HomeComponents/Exceptional';
import Info from './HomeComponents/Info';
import Services from './HomeComponents/Services';
import Testimonial from './HomeComponents/Testimonial';

const Home = () => {
    return (
        <>
            <Banner/>
            <Info/>
            <Services/>
            <Exceptional/>
            <MakeAppointment/>
            <Testimonial/>
        </>
    );
};

export default Home;