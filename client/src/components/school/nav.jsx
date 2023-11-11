import React from "react";
import { Navbar, NavbarBrand, Link } from "@nextui-org/react";


export default function App() {
  return (
    <Navbar className="mb-10 h-24 md:h-full md:w-full flex flex-row justify-center items-center">
      <NavbarBrand className="flex flex-row justify-center items-center">
        <div className="flex flex-row w-8 md:w-16 mr-6">
          <img
            src="https://res.cloudinary.com/dsnq0pvey/image/upload/f_auto,q_auto/v1/MundoLiterario/g55lniyittq6te6behdk"
            alt="BCE"
            className="text"
          />
        </div>
        <div>
          <Link className="flex flex-col font-bold text-inherit text-2xl text-blue-500" href="/">
            Mundo Literario
          </Link>
        </div>

      </NavbarBrand>
    </Navbar>
  );
}
