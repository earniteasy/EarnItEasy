import React from 'react';

export default function TermsAndConditions() {
    return (
        <div id='tc' className="min-h-screen bg-gray-100 text-gray-800 py-10 px-6">
            <div className="container mx-auto max-w-7xl bg-white shadow-md rounded-lg p-8">
                <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>
                <p className="text-sm mb-4">
                    Welcome to EarnItEasy! By using our app, you agree to comply with the following Terms and Conditions. EarnItEasy is designed to help users generate revenue through various in-app features. Please read these terms carefully before using our services.
                </p>

                <h2 className="text-lg font-semibold mb-2">1. Acceptance of Terms</h2>
                <p className="text-sm mb-4">
                    By accessing or using EarnItEasy, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the app.
                </p>

                <h2 className="text-lg font-semibold mb-2">2. Purpose of the App</h2>
                <p className="text-sm mb-4">
                    EarnItEasy provides users with opportunities to earn revenue through engaging with advertisements, completing tasks, or other in-app features. Earnings are subject to terms specified within the app.
                </p>

                <h2 className="text-lg font-semibold mb-2">3. User Responsibilities</h2>
                <p className="text-sm mb-4">
                    Users are responsible for ensuring:
                </p>
                <ul className="list-disc ml-6 text-sm mb-4">
                    <li>All information provided during registration is accurate and up-to-date.</li>
                    <li>The app is used in compliance with applicable laws and regulations.</li>
                    <li>They do not engage in fraudulent activities or misuse of app features.</li>
                </ul>

                <h2 className="text-lg font-semibold mb-2">4. Earnings and Payouts</h2>
                <p className="text-sm mb-4">
                    EarnItEasy enables users to earn revenue by engaging with in-app features. Earnings are tracked within the app and may be withdrawn as per the app’s payout policy. Users must meet the minimum withdrawal threshold before requesting a payout. The app reserves the right to withhold earnings in cases of fraudulent or unauthorized activity.
                </p>

                <h2 className="text-lg font-semibold mb-2">5. Advertisements and Revenue</h2>
                <p className="text-sm mb-4">
                    EarnItEasy is an ad-supported platform. By using the app, you agree to view advertisements as part of your experience. Earnings are directly tied to user engagement with the app’s features and advertisements.
                </p>

                <h2 className="text-lg font-semibold mb-2">6. Data Collection and Privacy</h2>
                <p className="text-sm mb-4">
                    Our app collects user data, including name, email, and phone number, to improve your experience. All data usage complies with our{' '}
                    <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>.
                </p>

                <h2 className="text-lg font-semibold mb-2">7. Account Deletion</h2>
                <p className="text-sm mb-4">
                    Users may request account deletion by contacting us at{' '}
                    <a href="mailto:earniteasyapp@gmail.com" className="text-blue-600 hover:underline">
                        earniteasyapp@gmail.com
                    </a>. Upon deletion, all associated data and earnings will be permanently removed.
                </p>

                <h2 className="text-lg font-semibold mb-2">8. Limitation of Liability</h2>
                <p className="text-sm mb-4">
                    EarnItEasy is provided "as-is" without warranties of any kind. We are not liable for any direct or indirect damages resulting from the use or inability to use the app, including any loss of earnings.
                </p>

                <h2 className="text-lg font-semibold mb-2">9. Modifications to Terms</h2>
                <p className="text-sm mb-4">
                    EarnItEasy reserves the right to modify these Terms and Conditions at any time. Continued use of the app constitutes your acceptance of the updated terms.
                </p>

                <h2 className="text-lg font-semibold mb-2">10. Contact Us</h2>
                <p className="text-sm mb-4">
                    If you have any questions or concerns regarding these Terms and Conditions, please reach out to us at:
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
