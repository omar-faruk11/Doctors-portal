import React from 'react';
import background from '../../../assets/images/appointment.png'

const Contact = () => {
    return (
        <div className='mt-28 p-8' style={{ background: `url(${background})` }}>
            <div className="text-center">
                <p className='text-secondary'>Contact Us</p>
                <p className="text-2xl text-white my-2">Stay connected with us</p>
            </div>
            <form className=' flex justify-center items-center flex-col gap-5 mt-8'>
                <input type="email" name='email' placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
                <input type="text" name='subject' placeholder="Subject" className="input input-bordered w-full max-w-xs" />
                <textarea className="textarea w-full max-w-xs" name='message' placeholder="Your message"></textarea>
                <input className="btn  border-0 text-white bg-gradient-to-r from-secondary to-primary " type="button" value="Submit" />           
                 </form>
        </div>
    );
};

export default Contact;