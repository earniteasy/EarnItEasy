import React, { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";

export default function NewHeader() {
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
          <Link download href="https://drive.google.com/uc?export=download&id=10l9Kbc8y74KzhbLwxtLhMJ13ijj6nLbS">Download App</Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex bg-white border border-gray-300 rounded-md px-5 py-1.5 text-sm font-semibold">
          <Link>Contact</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    </>
  );
}
