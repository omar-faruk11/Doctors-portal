import React from 'react';

const InfoCard = ({ img, header, bgColor }) => {
    return (
        <div className={`card lg:card-side text-white mx-6  md:mx-0 shadow-xl ${bgColor}`}>
            <figure><img className=' p-6' src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{header}</h2>
                <p>Click the button to watch on Jetflix app.</p>
            </div>
        </div>
    );
};

export default InfoCard;