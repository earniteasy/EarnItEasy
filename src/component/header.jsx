import React, { useState, useEffect } from 'react';
import '../App.css';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`fixed top-0 w-full z-10 transition-all duration-300 ${scrolled ? 'backdrop-blur-lg' : 'backdrop-blur-none'}`}>
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <p className="font-light text-pink-300">
                            <span className="font-medium text-white">EarnItEasy</span>
                        </p>
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={toggleMobileMenu}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12 text-sm text-white">
                    <a href="#hero" className="font-light leading-6">App</a>
                    <a href="#pp" className="font-light leading-6">Privacy Policy</a>
                    <a href="#tc" className="font-light leading-6">Terms & Conditions</a>
                    <a href="#ac" className="font-light leading-6">Account Deletion</a>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a
                        href="https://play.google.com/"
                        className="text-sm bg-transparent rounded-full hover:bg-white text-white font-medium hover:font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent"
                    >
                        Play Store
                    </a>
                </div>
            </nav>

            {mobileMenuOpen && (
                <div className="lg:hidden" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 z-10"></div>
                    <div className="bg-[#080808] fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <p className="font-light text-black-300">
                                    <span className="font-medium text-white">EarnItEasy</span>
                                </p>
                            </a>
                            <button
                                type="button"
                                onClick={toggleMobileMenu}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="white"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-6 flow-root rounded-2xl bg-[#040404] px-4">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <a href="#hero" className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-white hover:bg-gray-50">App</a>
                                    <a href="#pp" className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-white hover:bg-gray-50">Privacy Policy</a>
                                    <a href="#tc" className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-white hover:bg-gray-50">Terms & Conditions</a>
                                    <a href="#ac" className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-white hover:bg-gray-50">Account Deletion</a>
                                </div>
                            </div>
                        </div>
                        <div className="py-6">
                                    <a
                                        href="#contact"
                                        className="-mx-3 block rounded-full px-3 py-2.5 text-base leading-7 text-white hover:bg-[#010101]"
                                    >
                                        Play Store
                                    </a>
                                </div>
                    </div>
                </div>
            )}
        </header>
    );
}
