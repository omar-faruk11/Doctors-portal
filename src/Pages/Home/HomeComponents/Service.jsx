import React from 'react';

const Service = ({service}) => {
    const { name, img , description} = service;
    return (
        <div className="card  bg-base-100 shadow-md">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body text-center">
                <h2 className=" text-xl font-bold">
                    {name}
                </h2>
                <p>{description? description : 'If a dog chews shoes whose shoes does he choose?'} </p>
            </div>
        </div>
    );
};

export default Service;