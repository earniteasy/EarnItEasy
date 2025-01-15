import React, { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";

export default function NewHeader() {

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (event) => {
    event.preventDefault();
    setIsOpen(true);
  };

  const handleClose = () => setIsOpen(false);

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
    <>
    <Navbar isBordered>
      <NavbarBrand>
        <h1 className="font-medium text-black">EarnItEasy</h1>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        
      </NavbarContent>
      <NavbarContent justify="end">
        <p className="text-sm text-gray-600 font-regular w-28">For 18 years and above only</p>
        <NavbarItem className="hidden lg:flex bg-white border border-gray-300 rounded-md px-5 py-1.5 text-sm font-semibold">
          <Link download href="../download/release-v3.0.apk">Download App</Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex bg-white border border-gray-300 rounded-md px-5 py-1.5 text-sm font-semibold">
          <Link><a onClick={handleOpen}>Contact</a></Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    <ModalBox
         isOpen={isAccountOpen}
         onClose={handleAccountClose}
         title="Contact Us"
         bodyContent={
          <div className="h-96">
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
         }
      />
    </>
  );
}
