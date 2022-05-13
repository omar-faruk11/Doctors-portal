import React from 'react';
import chair from '../../../assets/images/chair.png'
import PrimaryButton from '../../../Sheard/PrimaryButton';
import bg from '../../../assets/images/bg.png'

const Banner = () => {
    return (
        <div className="hero md:min-h-screen bg-while">
            <div  style={{ background: `url(${bg})`, backgroundSize: 'cover' }} className='w-full h-full'>
                <div className="hero-content flex-col lg:flex-row-reverse pt-40 mx-auto">
                    <img src={chair} className="sm:max-w-sm md:max-w-lg rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;