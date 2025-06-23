import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const token = false; // Replace with your auth logic

  const toggleMenu = () => setIsOpen(!isOpen);
  const goToSignIn = () => {};
  const signOut = () => {};

  return (
    <header className="border-b border-[#eaeef1] px-4 py-3 sm:px-6 lg:px-10 bg-white">
      <div className="flex items-center justify-between w-full">
        {/* Kiri: Logo + Navigasi */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-black"
            >
              <path
                d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                fill="currentColor"
              />
            </svg>
            <h2 className="text-lg font-bold text-[#101518]">Damiun Sports</h2>
          </div>

          {/* Navigation (sebelah kanan logo) */}
          <nav className="hidden sm:flex items-center gap-6">
            <a href="#" className="text-[#101518] hover:underline">Sports</a>
            <a href="#" className="text-[#101518] hover:underline">Favorites</a>
            <a href="#" className="text-[#101518] hover:underline">Help</a>
          </nav>
        </div>

        {/* Kanan: Search + Auth */}
        <div className="hidden sm:flex items-center gap-6">
          {/* Search Input */}
          <label className="flex w-[14rem] h-10">
            <div className="flex items-center justify-center pl-3 rounded-l-xl border border-[#d4dce2] bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
              </svg>
            </div>
            <input
              type="search"
              placeholder="Search"
              className="form-input w-full pr-2 rounded-r-xl border border-l-0 border-[#d4dce2] bg-gray-50 text-[#101518]"
              aria-label="Search"
            />
          </label>

          {/* Auth Button */}
          {!token ? (
            <button
              className="h-10 px-4 rounded-full bg-[#eaeef1] text-[#101518]"
              onClick={goToSignIn}
            >
              Sign In
            </button>
          ) : (
            <button
              className="h-10 px-4 rounded-full bg-[#eaeef1] text-[#101518]"
              onClick={signOut}
            >
              Sign Out
            </button>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="sm:hidden flex items-center p-2 text-[#101518]"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-4 sm:hidden flex flex-col gap-3">
          <nav className="flex flex-col gap-2">
            <a href="#" className="text-[#101518] hover:underline">Sports</a>
            <a href="#" className="text-[#101518] hover:underline">Favorites</a>
            <a href="#" className="text-[#101518] hover:underline">Help</a>
          </nav>

          {/* Search + Auth Mobile */}
          <label className="flex w-full h-10 mt-2">
            <div className="flex items-center justify-center pl-3 rounded-l-xl border border-[#d4dce2] bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
              </svg>
            </div>
            <input
              type="search"
              placeholder="Search"
              className="form-input w-full pr-2 rounded-r-xl bg-gray-50 text-[#101518]"
              aria-label="Search"
            />
          </label>

          {!token ? (
            <button
              className="h-10 px-4 rounded-full bg-[#eaeef1] text-[#101518] mt-2"
              onClick={goToSignIn}
            >
              Sign In
            </button>
          ) : (
            <button
              className="h-10 px-4 rounded-full bg-[#eaeef1] text-[#101518] mt-2"
              onClick={signOut}
            >
              Sign Out
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
