import React from 'react';
import chair from '../../../assets/images/chair.png'
import PrimaryButton from '../../../Sheard/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero my-10 md:min-h-screen bg-while">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="sm:max-w-sm md:max-w-lg rounded-lg shadow-2xl" alt=''/>
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;