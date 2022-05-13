import React from 'react';

const InfoCard = ({img, header, bgColor}) => {
    return (
        <div className={`card card-side shadow-xl ${bgColor} text-white`}>
            <figure><img src={img} className='pl-4' alt=""/></figure>
            <div className="card-body">
                <h2 className="card-title">{header}</h2>
                <p>Click the button to watch on Jetflix app.</p>
            </div>
        </div>
    );
};

export default InfoCard;