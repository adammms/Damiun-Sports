import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const DetailSport: React.FC = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-slate-50 overflow-x-hidden" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <Navbar/>
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
        <Footer/>
      </div>
    </div>
  );
};

export default DetailSport;
