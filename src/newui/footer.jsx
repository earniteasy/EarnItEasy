import React, { useState } from "react";
import ModalBox from './modal';
import AccountDeletionRequest from "../component/compo_delete";

export default function Footer() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const handleClose = () => setIsModalOpen(false);

  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const handlePrivacyOpen = (event) => {
    event.preventDefault();
    setIsPrivacyOpen(true);
  };

  const handlePrivacyClose = () => setIsPrivacyOpen(false);

  const [isAccountOpen, setIsAccountOpen] = useState(false);

  const handleAccountOpen = (event) => {
    event.preventDefault();
    setIsAccountOpen(true);
  };

  const handleAccountClose = () => setIsAccountOpen(false);

  return (
    <>
      <div>
        <div className="bg-gray-100">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <span className="ml-3 text-xl">EarnItEasy.pro</span>
            </a>
            <p className="text-sm w-full text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © 2024 EarnItEasy — All rights reserved
            </p>
            {Array(1).fill().map((_, index) => (
              <div key={index} className="w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Visit</h2>
                <nav className="list-none flex">
                  <li className='mr-4'>
                    <a onClick={handleOpen} className="text-gray-600 hover:text-gray-800">Terms & Conditions</a>
                  </li>
                  <li className='mr-4'>
                    <a onClick={handlePrivacyOpen} className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
                  </li>
                  <li className='mr-4'>
                    <a onClick={handleAccountOpen} className="text-gray-600 hover:text-gray-800">Account Deletion</a>
                  </li>
                </nav>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ModalBox
         isOpen={isModalOpen}
         onClose={handleClose}
         title="Terms & Conditions"
         bodyContent={
           <div className="h-96 overflow-y-scroll">
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
         }
      />
      <ModalBox
         isOpen={isAccountOpen}
         onClose={handleAccountClose}
         title="Account Deletion"
         bodyContent={
          <div className="h-96">
            <AccountDeletionRequest />
          </div>
         }
      />
      <ModalBox
         isOpen={isPrivacyOpen}
         onClose={handlePrivacyClose}
         title="Privacy Policy"
         bodyContent={
          <div className="h-96 overflow-y-scroll">
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
         }
      />
    </>
  );
}
