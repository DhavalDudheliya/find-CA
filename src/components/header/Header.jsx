import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavMenus from "./components/DesktopNavMenus";
import MobileNavMenus from "./components/MobileNavMenus";
import { Link } from "react-router-dom";

// -----------------------------------------------------------------------------------------------------------------------------
// ----------------------------  For Header I used Tailwind-UI Component   -------------------------------------------------- //
// -----------------------------------------------------------------------------------------------------------------------------

export default function Header() {
  // Toggle-Menu open-close state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="">
      <nav
        className="mx-auto flex max-w-8xl items-center justify-between p-6 lg:px-32"
        aria-label="Global"
      >
        {/* Logo */}
        <Link to="/find-CA/" className="cursor-pointer leading-6 pr-12">
          <span className="sr-only">Your Company</span>
          <img className="h-10 w-auto" src="/image-11@2x.png" alt="" />
        </Link>
        <div className="flex items-center lg:flex-1">
          {/* Nav Menus */}
          <NavMenus />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Login - Register */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button className="px-4 py-2 rounded-3xs box-border w-[100px] overflow-hidden flex flex-row items-center justify-center border-[2px] border-solid border-fs-search-primary text-fs-search-primary font-bold font-poppins mx-4">
            Login
          </button>
          <button className="px-4 py-2 rounded-3xs w-[100px] overflow-hidden flex flex-row items-center justify-center bg-fs-search-primary text-fs-search-button-text text font-bold font-poppins">
            Register
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dialog */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-10 w-auto" src="/image-11@2x.png" alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile Navebar Menus */}
          <MobileNavMenus />
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
