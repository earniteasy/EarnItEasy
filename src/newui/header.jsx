import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";

export default function NewHeader() {
  return (
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
          <Link href="#foot">Contact</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
