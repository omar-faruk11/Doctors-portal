import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = () => {
    const today = new Date();
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(today);

  const footer = selectedDay ? (
    <p>You selected {format(selectedDay, 'PPP')}.</p>
  ) : (
    <p>Please pick a day.</p>
  );
    return (
        <div className="hero md:min-h-screen bg-while">
            <div style={{ background: `url(${bg})`, backgroundSize: 'cover' }} className='w-full h-full'>
                <div className="hero-content flex-col lg:flex-row-reverse pt-40 mx-auto">
                    <img src={chair} className="sm:max-w-sm md:max-w-lg rounded-lg shadow-2xl" alt='' />
                    <div>
                        <DayPicker
                            mode="single"
                            required
                            selected={selectedDay}
                            onSelect={setSelectedDay}
                            footer={footer}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;