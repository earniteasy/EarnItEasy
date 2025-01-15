import React from 'react';
import SS1 from '../assets/group.png';

export default function CompanyBiography() {
    return (
        <section id='hero' className="relative">
            <div className="container bg-gray-50 mx-auto flex flex-col-reverse lg:flex-row items-center justify-center px-6 lg:px-12 py-4 lg:py-16">
                {/* Left Content */}
                <div className="text-center lg:text-center">
                    <h1 className="text-4xl md:text-3xl font-bold leading-tight mb-3">
                        India's first ever
                    </h1>
                    <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 leading-tight mb-6">Highest Paying App</h1>
                    <h1 className="text-4xl md:text-3xl font-bold leading-tight mb-6">By completing little tasks.</h1>
                    <div className='bg-gray-300 h-[1px] rounded mb-4'></div>
                    <div className='flex'>
                    <div>
                        <p>Launched</p>
                        <h1 className='text-2xl font-bold'>Latest New App</h1>
                    </div>
                    <div className='bg-gray-300 w-[1px] rounded m-4'></div>
                    <div>
                        <p>Withdrawal</p>
                        <h1 className='text-2xl font-bold'>Within 24h</h1>
                    </div>
                    <div className='bg-gray-300 w-[1px] rounded m-4'></div>
                    <div>
                        <p>Method</p>
                        <h1 className='text-2xl font-bold'>Easy Tasks</h1>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
