import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Review from './Review';

const reviews = [
    {
        _id:1,
        name: 'Winson Herry',
        review: '',
        location: 'california',
        img: people1
    },
    {
        _id:2,
        name: 'Winson Herry',
        review: '',
        location: 'california',
        img: people2
    },
    {
        _id:3,
        name: 'Winson Herry',
        review: '',
        location: 'california',
        img: people3
    },
];
const Testimonial = () => {
    return (
        <div className='container mx-auto mt-20'>
            <div className="flex justify-between items-center p-4">
                <div>
                    <p className='text-secondary'>Testimonial</p>
                    <p className=' text-2xl'>What Our Patients Says</p>
                </div>
                <div>
                    <img className='w-20 md:w-44' src={quote} alt="" />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-16">
               {
                   reviews.map(review => <Review
                    key={review._id}
                    reviewText={review} 
                   />)
               }
            </div>
        </div>
    );
};

export default Testimonial;