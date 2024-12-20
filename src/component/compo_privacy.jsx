import React from 'react';

export default function PrivacyPolicy() {
    return (
        <div id='pp' className="min-h-screen bg-[#000] text-gray-800 py-10 px-6">
            <div className="container mx-auto max-w-7xl bg-white shadow-md rounded-lg p-8">
                <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
                <p className="text-sm mb-4">
                    At EarnItEasy, your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use, and safeguard your information when you use our free ad-based application. Please take a moment to review it carefully to understand our practices.
                </p>

                <h2 className="text-lg font-semibold mb-2">1. Information We Collect</h2>
                <p className="text-sm mb-4">
                    We collect personal and non-personal information to provide and improve our services. This includes:
                </p>
                <ul className="list-disc ml-6 text-sm mb-4">
                    <li>Name</li>
                    <li>Email Address</li>
                    <li>Phone Number</li>
                    <li>Device Details</li>
                </ul>
                <p className="text-sm mb-4">
                    We also use <strong>Firebase</strong>, a third-party service, for the following purposes:
                </p>
                <ul className="list-disc ml-6 text-sm mb-4">
                    <li><strong>Firebase Analytics:</strong> To gather insights into app performance and user engagement.</li>
                    <li><strong>Firebase Authentication:</strong> To securely authenticate users.</li>
                    <li><strong>Firebase Database:</strong> To store necessary user-related data.</li>
                </ul>

                <h2 className="text-lg font-semibold mb-2">2. How We Use Your Information</h2>
                <p className="text-sm mb-4">
                    We use the information collected for the following purposes:
                </p>
                <ul className="list-disc ml-6 text-sm mb-4">
                    <li>To provide and enhance the services offered by <strong>EarnItEasy</strong>.</li>
                    <li>To personalize your experience with the application.</li>
                    <li>To ensure compliance with legal and regulatory requirements.</li>
                </ul>

                <h2 className="text-lg font-semibold mb-2">3. Sharing Your Information</h2>
                <p className="text-sm mb-4">
                    We respect your privacy and do not share your personal information with any third parties except:
                </p>
                <ul className="list-disc ml-6 text-sm mb-4">
                    <li>As required by law or legal process.</li>
                    <li>To provide services on our behalf, ensuring they comply with strict confidentiality agreements.</li>
                </ul>

                <h2 className="text-lg font-semibold mb-2">4. Account Deletion</h2>
                <p className="text-sm mb-4">
                    Users have the right to request the deletion of their accounts. If you would like to delete your account and associated data, please contact us at{' '}
                    <a href="mailto:earniteasyapp@gmail.com" className="text-blue-600 hover:underline">
                        earniteasyapp@gmail.com
                    </a>, and we will process your request promptly.
                </p>

                <h2 className="text-lg font-semibold mb-2">5. Contact Us</h2>
                <p className="text-sm mb-4">
                    If you have any questions, concerns, or feedback regarding this Privacy Policy, please reach out to us at:
                </p>
                <p className="text-sm">
                    <strong>Email:</strong>{' '}
                    <a href="mailto:earniteasyapp@gmail.com" className="text-blue-600 hover:underline">
                        earniteasyapp@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
}
