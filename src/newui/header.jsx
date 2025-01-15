import React, { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";

export default function NewHeader() {

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (event) => {
    event.preventDefault();
    setIsOpen(true);
  };

  const handleClose = () => setIsOpen(false);
  
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
            <p>You can contact us by our email id: earniteasyapp@gmail.com</p>
          </div>
         }
      />
    </>
  );
}
