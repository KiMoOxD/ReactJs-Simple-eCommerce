import React from 'react';
import { useState, useEffect } from 'react';

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "December, 31, 2024";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-end gap-3">
        <div className='flex flex-col gap-0.5 items-center'>
            <p className='text-xs font-mono'>Days</p>
            <p className='text-2xl font-bold'>{days}</p>
        </div>
        <span className='text-3xl self-end'>:</span>
        <div className='flex flex-col gap-0.5 items-center'>
            <p className='text-xs font-mono'>Hours</p>
            <p className='text-2xl font-bold'>{hours}</p>
        </div>
        <span className='text-3xl self-end'>:</span>
        <div className='flex flex-col gap-0.5 items-center'>
            <p className='text-xs font-mono'>Minutes</p>
            <p className='text-2xl font-bold'>{minutes}</p>
        </div>
        <span className='text-3xl self-end'>:</span>
        <div className='flex flex-col gap-0.5 items-center'>
            <p className='text-xs font-mono'>Seconds</p>
            <p className='text-2xl font-bold'>{seconds}</p>
        </div>
    </div>
  );
};

export default Timer;