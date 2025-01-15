import React from 'react';
import SS1 from '../assets/group.png';

export default function Hero() {
    return (
        <section id='hero' className="relative">
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-12 py-16 lg:py-24">
                {/* Left Content */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                        Earn Money Effortlessly with <span className="text-yellow-400">EarnItEasy</span>
                    </h1>
                    <p className="text-sm md:text-sm font-regular mb-4">
                        Earn money with, EarnItEasy app by doing some tasks like Spin & Earn, Watch & Earn, Captcha, Coupon Code, Games, Offerwall, Maths Equation Solve, Daily-Checkins, etc.
                    </p>
                    <div className='bg-gray-300 h-[1px] rounded mb-4'></div>
                    <p className="text-sm md:text-sm text-gray-600 font-regular mb-2">
                        Download to get
                    </p>
                    <p className="text-md md:text-md font-regular mb-8">
                        Bonus of Unlimited Scratches, Spins and 1000 Captcha Tasks on New Joining.
                    </p>
                    <div className="flex justify-center lg:justify-start gap-4">
                        <a href="https://github.com/earniteasy/EarnItEasy/raw/refs/heads/main/src/download/release.apk" download className="bg-black text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-700 transition duration-300">Download App</a>
                    </div>
                </div>

                {/* Right Image */}
                <div className="lg:w-1/3 mb-8 mt-2 mr-10 flex justify-center lg:justify-end">
                    <img
                        src={SS1} // Replace with your app's hero image
                        alt="Earning App Preview"
                        className="w-3/4 lg:w-full shadow-xl rounded-xl bg-gray-100 p-8"
                    />
                </div>
            </div>

            {/* Background Patterns */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-700 rounded-full opacity-20 blur-3xl"></div>
        </section>
    );
}
