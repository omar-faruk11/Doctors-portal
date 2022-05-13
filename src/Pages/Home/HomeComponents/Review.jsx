import React from 'react';

const Review = ({reviewText}) => {
    const {name, img ,review,location} = reviewText;
    return (
        <div className="card shadow-xl mx-4 sm:mx-0">
            <div className="card-body">
                <p>{review? review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptates quo incidunt harum minus mollitia!"}</p>
            </div>
            <div className="flex jutify-center items-center ">
                <img className=' w-14 border-2 border-secondary rounded-full m-2' src={img} alt="" />
                <div>
                    <h5 className=' text-md font-bold'>{name}</h5>
                    <p>{location}</p>
                </div>
            </div>
            
        </div>
    );
};

export default Review;