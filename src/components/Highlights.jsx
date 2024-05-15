import React from 'react';

const Highlights = ({ stats }) => {
    return (
        <div className='bg-gradient-to-b from-gray-800 to-gray-700 p-4 rounded-lg shadow-md text-white flex flex-col justify-start items-center'>
            <h2 className='text-lg font-bold mt-2'>{stats.title}</h2>

            <div className='mt-4 flex items-center'>
                <span className='text-4xl font-bold'>{stats.value}</span>
                <span className='text-xl ml-1'>{stats.unit}</span>
            </div>

            {stats.direction && (
                <div className='flex items-center mt-2'>
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-5 h-5 text-slate-200'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5' />
                    </svg>
                    <div className='ml-2 text-sm'>{stats.direction}</div>
                </div>
            )}

            {stats.title === 'Humidity' && (
                <div className='w-full bg-gray-200 rounded-full h-1.5 mt-4 mb-2'>
                    <div className='bg-blue-600 h-1.5 rounded-full' style={{ width: `${stats.value}%` }}></div>
                </div>
            )}
        </div>
    );
};

export default Highlights;
