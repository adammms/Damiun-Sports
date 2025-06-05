import React from 'react';

const DetailSport: React.FC = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-slate-50 overflow-x-hidden" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between border-b border-solid border-b-[#e7eef3] px-10 py-3">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4 text-[#0e151b]">
              <h2 className="text-[#0e151b] text-lg font-bold leading-tight tracking-[-0.015em]">SportFinder</h2>
            </div>
            <div className="flex items-center gap-9">
              <a className="text-[#0e151b] text-sm font-medium leading-normal" href="#">Home</a>
              <a className="text-[#0e151b] text-sm font-medium leading-normal" href="#">Venues</a>
              <a className="text-[#0e151b] text-sm font-medium leading-normal" href="#">My Bookings</a>
              <a className="text-[#0e151b] text-sm font-medium leading-normal" href="#">Profile</a>
            </div>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <label className="flex flex-col min-w-40 !h-10 max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                <div className="text-[#4e7997] flex border-none bg-[#e7eef3] items-center justify-center pl-4 rounded-l-xl border-r-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                    ></path>
                  </svg>
                </div>
                <input
                  placeholder="Search"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e151b] focus:outline-0 focus:ring-0 border-none bg-[#e7eef3] focus:border-none h-full placeholder:text-[#4e7997] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                />
              </div>
            </label>
            <button
              className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#e7eef3] text-[#0e151b] gap-2 text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">Login</span>
            </button>
          </div>
        </header>

        <main className="flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <h1 className="text-[#0e151b] tracking-light text-[32px] font-bold leading-tight min-w-72">Find Your Perfect Sports Facility</h1>
            </div>
            <div className="px-4 py-3">
              <label className="flex flex-col min-w-40 h-12 w-full">
                <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                  <div className="text-[#4e7997] flex border-none bg-[#e7eef3] items-center justify-center pl-4 rounded-l-xl border-r-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    placeholder="Search for sports, locations, or activities"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e151b] focus:outline-0 focus:ring-0 border-none bg-[#e7eef3] focus:border-none h-full placeholder:text-[#4e7997] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                  />
                </div>
              </label>
            </div>
            <h2 className="text-[#0e151b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Available Facilities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
              {/* Sports Facility 1 */}
              <div className="flex flex-col gap-3 pb-3 bg-white rounded-lg shadow-md">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-lg"
                  style={{ backgroundImage: 'url("https://example.com/soccer-field.jpg")' }}
                ></div>
                <div className="p-4">
                  <h3 className="text-[#0e151b] text-base font-bold leading-tight">Elite Soccer Field</h3>
                  <p className="text-[#4e7997] text-sm font-normal leading-normal">Jakarta, Indonesia · Soccer</p>
                  <button className="mt-2 w-full h-10 bg-[#1990e5] text-white rounded-full">Book Now</button>
                </div>
              </div>
              {/* Sports Facility 2 */}
              <div className="flex flex-col gap-3 pb-3 bg-white rounded-lg shadow-md">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-lg"
                  style={{ backgroundImage: 'url("https://example.com/basketball-court.jpg")' }}
                ></div>
                <div className="p-4">
                  <h3 className="text-[#0e151b] text-base font-bold leading-tight">Jakarta Basketball Arena</h3>
                  <p className="text-[#4e7997] text-sm font-normal leading-normal">Jakarta, Indonesia · Basketball</p>
                  <button className="mt-2 w-full h-10 bg-[#1990e5] text-white rounded-full">Book Now</button>
                </div>
              </div>
              {/* Sports Facility 3 */}
              <div className="flex flex-col gap-3 pb-3 bg-white rounded-lg shadow-md">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-lg"
                  style={{ backgroundImage: 'url("https://example.com/tennis-court.jpg")' }}
                ></div>
                <div className="p-4">
                  <h3 className="text-[#0e151b] text-base font-bold leading-tight">Jakarta Tennis Club</h3>
                  <p className="text-[#4e7997] text-sm font-normal leading-normal">Jakarta, Indonesia · Tennis</p>
                  <button className="mt-2 w-full h-10 bg-[#1990e5] text-white rounded-full">Book Now</button>
                </div>
              </div>
              {/* Sports Facility 4 */}
              <div className="flex flex-col gap-3 pb-3 bg-white rounded-lg shadow-md">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-lg"
                  style={{ backgroundImage: 'url("https://example.com/badminton-court.jpg")' }}
                ></div>
                <div className="p-4">
                  <h3 className="text-[#0e151b] text-base font-bold leading-tight">Jakarta Badminton Center</h3>
                  <p className="text-[#4e7997] text-sm font-normal leading-normal">Jakarta, Indonesia · Badminton</p>
                  <button className="mt-2 w-full h-10 bg-[#1990e5] text-white rounded-full">Book Now</button>
                </div>
              </div>
              {/* Sports Facility 5 */}
              <div className="flex flex-col gap-3 pb-3 bg-white rounded-lg shadow-md">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-lg"
                  style={{ backgroundImage: 'url("https://example.com/volleyball-court.jpg")' }}
                ></div>
                <div className="p-4">
                  <h3 className="text-[#0e151b] text-base font-bold leading-tight">Jakarta Volleyball Arena</h3>
                  <p className="text-[#4e7997] text-sm font-normal leading-normal">Jakarta, Indonesia · Volleyball</p>
                  <button className="mt-2 w-full h-10 bg-[#1990e5] text-white rounded-full">Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="flex flex-col gap-6 px-5 py-10 text-center">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a className="text-[#4e7997] text-base font-normal leading-normal min-w-40" href="#">About Us</a>
            <a className="text-[#4e7997] text-base font-normal leading-normal min-w-40" href="#">Terms of Service</a>
            <a className="text-[#4e7997] text-base font-normal leading-normal min-w-40" href="#">Privacy Policy</a>
            <a className="text-[#4e7997] text-base font-normal leading-normal min-w-40" href="#">Contact</a>
            <a className="text-[#4e7997] text-base font-normal leading-normal min-w-40" href="#">FAQ</a>
          </div>
          <p className="text-[#4e7997] text-base font-normal leading-normal">© 2023 SportFinder. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default DetailSport;
