import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

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
const features = [
  {
    name: "Feature1",
  },
  {
    name: "Feature2",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function MobileNavMenus() {
  return (
    <div className="mt-6 flow-root">
      <div className="-my-6 divide-y divide-gray-500/10">
        <div className="space-y-2 py-6">
          <Disclosure as="div" className="-mx-3">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 font-poppins text-base font-bold leading-7 text-black hover:bg-gray-50">
                  Solutions
                  <ChevronDownIcon
                    className={classNames(
                      open ? "rotate-180" : "",
                      "h-5 w-5 flex-none"
                    )}
                    aria-hidden="true"
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="mt-2 space-y-2">
                  {[...solutions].map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="-mx-3">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 font-poppins text-base font-bold leading-7 text-black hover:bg-gray-50">
                  Features
                  <ChevronDownIcon
                    className={classNames(
                      open ? "rotate-180" : "",
                      "h-5 w-5 flex-none"
                    )}
                    aria-hidden="true"
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="mt-2 space-y-2">
                  {[...features].map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <div className="cursor-pointer -mx-3 block rounded-lg px-3 py-2 font-poppins text-base font-bold leading-7 text-black hover:bg-gray-50">
            Blog
          </div>
          <Disclosure as="div" className="-mx-3">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 font-poppins text-base font-bold leading-7 text-black text-gray-900 hover:bg-gray-50">
                  About
                  <ChevronDownIcon
                    className={classNames(
                      open ? "rotate-180" : "",
                      "h-5 w-5 flex-none"
                    )}
                    aria-hidden="true"
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="mt-2 space-y-2">
                  <div>
                    About : Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Nobis facilis id error, dicta laudantium neque natus
                    quam impedit eligendi dolorum sequi repudiandae sint quod
                    placeat illum? Minima molestiae ipsum tenetur.
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="py-6">
          <div className="cursor-pointer -mx-3 block rounded-lg px-3 py-2.5 font-poppins text-base font-bold leading-7 text-black hover:bg-gray-50">
            Log in
          </div>
          <div className="cursor-pointer -mx-3 block rounded-lg px-3 py-2.5 font-poppins text-base font-bold leading-7 text-black hover:bg-gray-50">
            Register
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileNavMenus;
