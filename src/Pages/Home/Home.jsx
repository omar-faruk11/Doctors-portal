import React from 'react';
import Banner from './HomeComponents/Banner';
import Info from './HomeComponents/Info';
import Services from './HomeComponents/Services';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner/>
            <Info/>
            <Services/>
            
        </div>
    );
};

export default Home;