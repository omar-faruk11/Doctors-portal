import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import phone from '../../../assets/icons/phone.svg'
import marker from '../../../assets/icons/marker.svg'
import InfoCard from './InfoCard';

const Info = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:mx-5 md:grid-cols-3 gap-5'>
            <InfoCard 
            img={clock}
            header={'Opening Hours'}
            bgColor={'bg-gradient-to-r from-secondary to-primary'}
            />
            <InfoCard 
            img={marker}
            header={'Opening Hours'}
            bgColor={'bg-[#3A4256]'}
            />
            <InfoCard 
            img={phone}
            header={'Opening Hours'}
            bgColor={'bg-gradient-to-r from-secondary to-primary'}
            />
        </div>
    );
};

export default Info;