import React from 'react';
import SS1 from '../assets/group.png';

export default function Hero() {
    return (
        <section id='hero' className="relative bg-gradient-to-br from-purple-700 to-indigo-600 text-white">
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-12 py-16 lg:py-24">
                {/* Left Content */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                        Earn Money Effortlessly with <span className="text-yellow-400">EarnItEasy</span>
                    </h1>
                    <p className="text-sm md:text-lg font-light mb-8">
                        Earn money with, EarnItEasy app by doing some tasks like Spin & Earn, Watch & Earn, Captcha, Coupon Code, Games, Offerwall, Maths Equation Solve, Daily-Checkins, etc.
                    </p>
                    <div className="flex justify-center lg:justify-start gap-4">
                        <a
                            href="#download"
                            className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-white transition duration-300"
                        >
                            Go to Play Store
                        </a>
                    </div>
                </div>

                {/* Right Image */}
                <div className="lg:w-1/2 mb-8 mt-8 flex justify-center lg:justify-end">
                    <img
                        src={SS1} // Replace with your app's hero image
                        alt="Earning App Preview"
                        className="w-3/4 lg:w-full"
                    />
                </div>
            </div>

            {/* Background Patterns */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-700 rounded-full opacity-20 blur-3xl"></div>
        </section>
    );
}
