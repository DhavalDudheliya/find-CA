import React from "react";

const NavMenusFooter = () => {
  return (
    <div className="grid grid-cols-2 gap-y-4 md:grid-cols-5 md:gap-8 lg:gap-12">
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
            <div className="cursor-pointer hover:underline">Accessibility</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavMenusFooter;
