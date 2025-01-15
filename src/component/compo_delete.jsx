import React, { useState } from 'react';

export default function AccountDeletionRequest() {
    const [formData, setFormData] = useState({
        subject: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { subject, email, message } = formData;

        if (!subject || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        const mailtoLink = `mailto:earniteasyapp@gmail.com?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(`From: ${email}\n\nMessage:\n${message}`)}`;

        window.location.href = mailtoLink;

        setFormData({ subject: '', email: '', message: '' });
    };

    return (
        <div id='ac' className="text-gray-800">
            <div className="container mx-auto max-w-7xl bg-white p-8 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
                {/* Instructions Section */}
                <div className="md:w-1/2">
                    <h1 className="text-2xl font-bold mb-4">Account Deletion Request</h1>
                    <p className="text-sm mb-4">
                        To request account deletion, please complete the form on the right-hand side. Include a valid
                        email address so we can confirm your request. Once the request is processed, your account will
                        be permanently deleted from our systems.
                    </p>
                    <p className="text-sm mb-4">
                        Note: This action is irreversible, and all your data associated with the account will be
                        removed.
                    </p>
                    <p className="text-sm">
                        If you have any questions, feel free to reach out to us at{' '}
                        <a href="mailto:earniteasyapp@gmail.com" className="text-blue-600 hover:underline">
                            earniteasyapp@gmail.com
                        </a>
                        .
                    </p>
                </div>

                {/* Form Section */}
                <div className="md:w-1/2">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Send Request
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
