import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm md:text-base font-light">
                    © {new Date().getFullYear()} EarnItEasy. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
