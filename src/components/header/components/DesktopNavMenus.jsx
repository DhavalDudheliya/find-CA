import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import React from "react";

// Solutions Dropdown Menus
const solutions = [
  {
    name: "Solution1",
  },
  {
    name: "Solution1",
  },
  {
    name: "Solution1",
  },
  {
    name: "Solution1",
  },
];

// Features Dropdown Menus
const features = [
  {
    name: "Feature1",
  },
  {
    name: "Feature2",
  },
];

// Navmenus Function
function NavMenus() {
  return (
    <>
      <Popover.Group className="hidden items-center lg:flex lg:gap-x-12">
        {/* Solution - DropDown */}
        <Popover className="relative">
          <Popover.Button className="flex items-center gap-x-1 font-poppins text-base font-bold text-black">
            Solutions
            <ChevronDownIcon
              className="h-5 w-5 flex-none text-gray-400"
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div className="p-4">
                {solutions.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex-auto">
                      <div className="block font-semibold text-gray-900">
                        {item.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        {/* Features - Dropdown */}
        <Popover className="relative">
          <Popover.Button className="flex items-center gap-x-1 font-poppins text-base font-bold leading-6 text-black">
            Features
            <ChevronDownIcon
              className="h-5 w-5 flex-none text-gray-400"
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div className="p-4">
                {features.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex-auto">
                      <div className="block font-semibold text-gray-900">
                        {item.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        {/* Blogs */}
        <div className="cursor-pointer font-poppins text-base font-bold leading-6 text-black">
          Blogs
        </div>

        {/* About */}
        <Popover className="relative">
          <Popover.Button className="flex items-center gap-x-1 font-poppins text-base font-bold leading-6 text-black">
            About
            <ChevronDownIcon
              className="h-5 w-5 flex-none text-gray-400"
              aria-hidden="true"
            />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div className="p-4">
                About : Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ratione rem magni quasi totam quam, nulla veritatis iure natus
                obcaecati debitis quidem praesentium deserunt alias a est quod
                consectetur laboriosam possimus!
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </Popover.Group>
    </>
  );
}

export default NavMenus;
