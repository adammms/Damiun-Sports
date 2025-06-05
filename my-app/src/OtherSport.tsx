import React from 'react';

const OtherSport: React.FC = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-slate-50 overflow-x-hidden" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between border-b border-solid border-b-[#e7eef3] px-10 py-3">
          <div className="flex items-center gap-8">
            <h2 className="text-[#0e151b] text-lg font-bold leading-tight tracking-[-0.015em]">SportFinder</h2>
            <div className="flex items-center gap-9">
              <a className="text-[#0e151b] text-sm font-medium leading-normal" href="#">Home</a>
              <a className="text-[#0e151b] text-sm font-medium leading-normal" href="#">Bookings</a>
              <a className="text-[#0e151b] text-sm font-medium leading-normal" href="#">Favorites</a>
              <a className="text-[#0e151b] text-sm font-medium leading-normal" href="#">Help</a>
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
                  value=""
                />
              </div>
            </label>
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#e7eef3] text-[#0e151b] text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">Login</span>
            </button>
          </div>
        </header>
        
        <div className="px-10 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#0e151b] tracking-light text-[32px] font-bold leading-tight min-w-72">Find Your Perfect Sports Facility</p>
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
                    value=""
                  />
                </div>
              </label>
            </div>
            <h2 className="text-[#0e151b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Filters</h2>
            <div className="flex gap-3 p-3 flex-wrap pr-4">
              <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#e7eef3] pl-4 pr-2">
                <p className="text-[#0e151b] text-sm font-medium leading-normal">Sport Type</p>
                <div className="text-[#0e151b]" data-icon="CaretDown" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
              </button>
              <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#e7eef3] pl-4 pr-2">
                <p className="text-[#0e151b] text-sm font-medium leading-normal">Location</p>
                <div className="text-[#0e151b]" data-icon="CaretDown" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
              </button>
              <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#e7eef3] pl-4 pr-2">
                <p className="text-[#0e151b] text-sm font-medium leading-normal">Activity Type</p>
                <div className="text-[#0e151b]" data-icon="CaretDown" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
              </button>
            </div>
            <h2 className="text-[#0e151b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Available Facilities</h2>
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-xl bg-slate-50 p-4 shadow-[0_0_4px_rgba(0,0,0,0.1)]">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-[#0e151b] text-base font-bold leading-tight">Elite Soccer Field</p>
                    <p className="text-[#4e7997] text-sm font-normal leading-normal">Jakarta, Indonesia · Soccer</p>
                  </div>
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-[#e7eef3] text-[#0e151b] text-sm font-medium leading-normal w-fit"
                  >
                    <span className="truncate">Book Now</span>
                  </button>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD-fWXpy7ppia3ieIVsA0p5nq3LP8s1dmKgthcUCWdxlC9P5UJ2NOFV3fscRLVAZASXgoupTJUv-L6GePq3ZiGI7ZlNv-wlrF6YI0-u2ARX2u_A8ynl5oiWgMRFRRWI6UhYlsR9p8bR8Xcl6pkJ7xwAkUdkD8qGDX4I1kePO2SGHL_ZmJVGkuPJ3ushtyGYQBdjhMphxUBmtWTCuGb2oqVRV2mG28P1HmnU6VheCBbnzceZOZNUGrA_UR5l9y2BJMJJyZx5liYkNCg");' }}
                ></div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-xl bg-slate-50 p-4 shadow-[0_0_4px_rgba(0,0,0,0.1)]">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-[#0e151b] text-base font-bold leading-tight">Elite Soccer Field</p>
                    <p className="text-[#4e7997] text-sm font-normal leading-normal">Jakarta, Indonesia · Soccer</p>
                  </div>
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-[#e7eef3] text-[#0e151b] text-sm font-medium leading-normal w-fit"
                  >
                    <span className="truncate">Book Now</span>
                  </button>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD-fWXpy7ppia3ieIVsA0p5nq3LP8s1dmKgthcUCWdxlC9P5UJ2NOFV3fscRLVAZASXgoupTJUv-L6GePq3ZiGI7ZlNv-wlrF6YI0-u2ARX2u_A8ynl5oiWgMRFRRWI6UhYlsR9p8bR8Xcl6pkJ7xwAkUdkD8qGDX4I1kePO2SGHL_ZmJVGkuPJ3ushtyGYQBdjhMphxUBmtWTCuGb2oqVRV2mG28P1HmnU6VheCBbnzceZOZNUGrA_UR5l9y2BJMJJyZx5liYkNCg");' }}
                ></div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-xl bg-slate-50 p-4 shadow-[0_0_4px_rgba(0,0,0,0.1)]">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-[#0e151b] text-base font-bold leading-tight">Elite Soccer Field</p>
                    <p className="text-[#4e7997] text-sm font-normal leading-normal">Jakarta, Indonesia · Soccer</p>
                  </div>
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-[#e7eef3] text-[#0e151b] text-sm font-medium leading-normal w-fit"
                  >
                    <span className="truncate">Book Now</span>
                  </button>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD-fWXpy7ppia3ieIVsA0p5nq3LP8s1dmKgthcUCWdxlC9P5UJ2NOFV3fscRLVAZASXgoupTJUv-L6GePq3ZiGI7ZlNv-wlrF6YI0-u2ARX2u_A8ynl5oiWgMRFRRWI6UhYlsR9p8bR8Xcl6pkJ7xwAkUdkD8qGDX4I1kePO2SGHL_ZmJVGkuPJ3ushtyGYQBdjhMphxUBmtWTCuGb2oqVRV2mG28P1HmnU6VheCBbnzceZOZNUGrA_UR5l9y2BJMJJyZx5liYkNCg");' }}
                ></div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-xl bg-slate-50 p-4 shadow-[0_0_4px_rgba(0,0,0,0.1)]">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-[#0e151b] text-base font-bold leading-tight">Elite Soccer Field</p>
                    <p className="text-[#4e7997] text-sm font-normal leading-normal">Jakarta, Indonesia · Soccer</p>
                  </div>
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-[#e7eef3] text-[#0e151b] text-sm font-medium leading-normal w-fit"
                  >
                    <span className="truncate">Book Now</span>
                  </button>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD-fWXpy7ppia3ieIVsA0p5nq3LP8s1dmKgthcUCWdxlC9P5UJ2NOFV3fscRLVAZASXgoupTJUv-L6GePq3ZiGI7ZlNv-wlrF6YI0-u2ARX2u_A8ynl5oiWgMRFRRWI6UhYlsR9p8bR8Xcl6pkJ7xwAkUdkD8qGDX4I1kePO2SGHL_ZmJVGkuPJ3ushtyGYQBdjhMphxUBmtWTCuGb2oqVRV2mG28P1HmnU6VheCBbnzceZOZNUGrA_UR5l9y2BJMJJyZx5liYkNCg");' }}
                ></div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-xl bg-slate-50 p-4 shadow-[0_0_4px_rgba(0,0,0,0.1)]">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-[#0e151b] text-base font-bold leading-tight">Elite Soccer Field</p>
                    <p className="text-[#4e7997] text-sm font-normal leading-normal">Jakarta, Indonesia · Soccer</p>
                  </div>
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-[#e7eef3] text-[#0e151b] text-sm font-medium leading-normal w-fit"
                  >
                    <span className="truncate">Book Now</span>
                  </button>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD-fWXpy7ppia3ieIVsA0p5nq3LP8s1dmKgthcUCWdxlC9P5UJ2NOFV3fscRLVAZASXgoupTJUv-L6GePq3ZiGI7ZlNv-wlrF6YI0-u2ARX2u_A8ynl5oiWgMRFRRWI6UhYlsR9p8bR8Xcl6pkJ7xwAkUdkD8qGDX4I1kePO2SGHL_ZmJVGkuPJ3ushtyGYQBdjhMphxUBmtWTCuGb2oqVRV2mG28P1HmnU6VheCBbnzceZOZNUGrA_UR5l9y2BJMJJyZx5liYkNCg");' }}
                ></div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-xl bg-slate-50 p-4 shadow-[0_0_4px_rgba(0,0,0,0.1)]">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-[#0e151b] text-base font-bold leading-tight">Elite Soccer Field</p>
                    <p className="text-[#4e7997] text-sm font-normal leading-normal">Jakarta, Indonesia · Soccer</p>
                  </div>
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-[#e7eef3] text-[#0e151b] text-sm font-medium leading-normal w-fit"
                  >
                    <span className="truncate">Book Now</span>
                  </button>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD-fWXpy7ppia3ieIVsA0p5nq3LP8s1dmKgthcUCWdxlC9P5UJ2NOFV3fscRLVAZASXgoupTJUv-L6GePq3ZiGI7ZlNv-wlrF6YI0-u2ARX2u_A8ynl5oiWgMRFRRWI6UhYlsR9p8bR8Xcl6pkJ7xwAkUdkD8qGDX4I1kePO2SGHL_ZmJVGkuPJ3ushtyGYQBdjhMphxUBmtWTCuGb2oqVRV2mG28P1HmnU6VheCBbnzceZOZNUGrA_UR5l9y2BJMJJyZx5liYkNCg");' }}
                ></div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-xl bg-slate-50 p-4 shadow-[0_0_4px_rgba(0,0,0,0.1)]">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-[#0e151b] text-base font-bold leading-tight">Elite Soccer Field</p>
                    <p className="text-[#4e7997] text-sm font-normal leading-normal">Jakarta, Indonesia · Soccer</p>
                  </div>
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-[#e7eef3] text-[#0e151b] text-sm font-medium leading-normal w-fit"
                  >
                    <span className="truncate">Book Now</span>
                  </button>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD-fWXpy7ppia3ieIVsA0p5nq3LP8s1dmKgthcUCWdxlC9P5UJ2NOFV3fscRLVAZASXgoupTJUv-L6GePq3ZiGI7ZlNv-wlrF6YI0-u2ARX2u_A8ynl5oiWgMRFRRWI6UhYlsR9p8bR8Xcl6pkJ7xwAkUdkD8qGDX4I1kePO2SGHL_ZmJVGkuPJ3ushtyGYQBdjhMphxUBmtWTCuGb2oqVRV2mG28P1HmnU6VheCBbnzceZOZNUGrA_UR5l9y2BJMJJyZx5liYkNCg");' }}
                ></div>
              </div>
            </div><div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-xl bg-slate-50 p-4 shadow-[0_0_4px_rgba(0,0,0,0.1)]">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-[#0e151b] text-base font-bold leading-tight">Elite Soccer Field</p>
                    <p className="text-[#4e7997] text-sm font-normal leading-normal">Jakarta, Indonesia · Soccer</p>
                  </div>
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-[#e7eef3] text-[#0e151b] text-sm font-medium leading-normal w-fit"
                  >
                    <span className="truncate">Book Now</span>
                  </button>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD-fWXpy7ppia3ieIVsA0p5nq3LP8s1dmKgthcUCWdxlC9P5UJ2NOFV3fscRLVAZASXgoupTJUv-L6GePq3ZiGI7ZlNv-wlrF6YI0-u2ARX2u_A8ynl5oiWgMRFRRWI6UhYlsR9p8bR8Xcl6pkJ7xwAkUdkD8qGDX4I1kePO2SGHL_ZmJVGkuPJ3ushtyGYQBdjhMphxUBmtWTCuGb2oqVRV2mG28P1HmnU6VheCBbnzceZOZNUGrA_UR5l9y2BJMJJyZx5liYkNCg");' }}
                ></div>
              </div>
            </div>
            {/* Additional facilities can be added here in a similar manner */}
            <div className="flex items-center justify-center p-4">
              <a href="#" className="flex size-10 items-center justify-center">
                <div className="text-[#0e151b]" data-icon="CaretLeft" data-size="18px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
                  </svg>
                </div>
              </a>
              <a className="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center text-[#0e151b] rounded-full bg-[#e7eef3]" href="#">1</a>
              <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#0e151b] rounded-full" href="#">2</a>
              <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#0e151b] rounded-full" href="#">3</a>
              <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#0e151b] rounded-full" href="#">4</a>
              <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#0e151b] rounded-full" href="#">5</a>
              <a href="#" className="flex size-10 items-center justify-center">
                <div className="text-[#0e151b]" data-icon="CaretRight" data-size="18px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherSport;
