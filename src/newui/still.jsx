import React from 'react';

export default function Waiting() {
    return (
        <section id='hero' className="relative">
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center px-6 lg:px-12 py-4 lg:py-16">
                {/* Left Content */}
                <div className="text-center lg:text-center">
                    <h1 className="text-4xl md:text-3xl font-bold leading-tight mb-3">
                        Still Waiting na? <span className='font-medium text-sm'>EarnItEasy is the only way to earn money efforlessly.</span>
                    </h1>
                    <div className='bg-gray-300 h-[1px] rounded mb-4'></div>
                    <h1 className="text-gray-500 text-sm leading-tight mb-3">
                        Don't you wanna earn money, easily and by just completing small tasks that pays you a lot, no deposit is required, no extra fees, instant withdrawal within 24 hours.
                    </h1>
                    <div className='flex mt-14 w-full justify-center'>
                    <div>
                    <a
                            href="https://drive.google.com/uc?export=download&id=10l9Kbc8y74KzhbLwxtLhMJ13ijj6nLbS"
                            download
                            className="bg-black text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-700 transition duration-300"
                        >
                            Android App
                        </a>
                    </div>
                    <div className='bg-gray-300 w-[1px] rounded m-4'></div>
                    <div>
                    <a
                            href="#ios"
                            className="bg-gray-200 text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-300 transition duration-300"
                        >
                            IOS App
                        </a>
                    </div>
                    </div>
                    <h1 className="text-gray-500 text-sm leading-tight mt-6">
                        We are with you, end-to-end encrypted app
                    </h1>
                </div>
            </div>
        </section>
    );
}
