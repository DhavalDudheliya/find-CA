import React from "react";

const Footer = () => {
  return (
    <footer
      className=""
      style={{
        background: "linear-gradient(90.97deg, #0076ce, #9400d3)",
        // WebkitTextFillColor: "transparent",
      }}
    >
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 lg:mr-20">
            <a href="/home" className="flex flex-col items-start mb-2">
              <img
                src="/image-1@2x.png"
                className="h-8 mr-3"
                alt="FlowBite Logo"
              />
            </a>
            <p className="text-fs-search-surface-bg max-w-xs">
              India's first platform dedicated to simplifying partner search
            </p>
          </div>
          <div className="grid grid-cols-2 gap-y-4 lg:grid-cols-5 lg:gap-12">
            <div>
              <h2 className="mb-4 lg:mb-6 text-sm font-semibold text-fs-search-surface-bg uppercase">
                Company
              </h2>
              <ul className="text-fs-search-surface-bg font-light">
                <li className="mb-4">
                  <div className="cursor-pointer hover:underline">About</div>
                </li>
                <li className="mb-4">
                  <div className="cursor-pointer hover:underline">Pricing</div>
                </li>
                <li className="mb-4">
                  <div className="cursor-pointer hover:underline">Career</div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 lg:mb-6 text-sm font-semibold text-fs-search-surface-bg uppercase">
                Solutions
              </h2>
              <ul className="text-fs-search-surface-bg font-light">
                <li className="mb-4">
                  <div className="cursor-pointer hover:underline">Search</div>
                </li>
                <li className="mb-4">
                  <div className="cursor-pointer hover:underline">Connenct</div>
                </li>
                <li className="mb-4">
                  <div className="cursor-pointer hover:underline">Research</div>
                </li>
                <li className="mb-4">
                  <div className="cursor-pointer hover:underline">Academy</div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 lg:mb-6 text-sm font-semibold text-fs-search-surface-bg uppercase">
                Resources
              </h2>
              <ul className="text-fs-search-surface-bg font-light">
                <li className="mb-4">
                  <div className="cursor-pointer hover:underline">Blogs</div>
                </li>
                <li className="mb-4">
                  <div className="cursor-pointer hover:underline">Forms</div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 lg:mb-6 text-sm font-semibold text-fs-search-surface-bg uppercase">
                Support
              </h2>
              <ul className="text-fs-search-surface-bg font-light">
                <li className="mb-4">
                  <div className="cursor-pointer hover:underline">Help</div>
                </li>
                <li className="mb-4">
                  <div className="cursor-pointer whitespace-nowrap hover:underline">
                    Contact Us
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 lg:mb-6 text-sm font-semibold text-fs-search-surface-bg uppercase">
                Legal
              </h2>
              <ul className="text-fs-search-surface-bg font-light">
                <li className="mb-4">
                  <div className="cursor-pointer hover:underline">Privacy</div>
                </li>
                <li className="mb-4">
                  <div className="cursor-pointer hover:underline">Terms</div>
                </li>
                <li>
                  <div className="cursor-pointer hover:underline">
                    Accessibility
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-fs-search-surface-bg sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-fs-search-surface-bg sm:text-center">
            Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071,
            Maharashtra
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 15 15"
              >
                <path
                  fillRule="evenodd"
                  d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                  clipRule="evenodd"
                />
                <path d="M3 5.012H0V15h3V5.012Z" />
              </svg>

              <span className="sr-only">Linkdien</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span className="sr-only">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-10 bg-black text-fs-search-surface-bg text-[10px] flex items-center justify-center font-poppins">
        Registered trademark of India Private Limited © 2023 loerumipsum Inc.
        All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
