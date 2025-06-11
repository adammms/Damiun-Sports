import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden font-lexend"
      style={{
        fontFamily: '"Lexend", "Plus Jakarta Sans", sans-serif'
      }}
    >
      <Navbar/>
      <div className="flex h-full grow flex-col">
        <main className="flex justify-center flex-1 px-4 py-5 sm:px-10">
          <div className="flex flex-col gap-8 max-w-[960px] w-full">
            <section
              className="flex flex-col items-center gap-6 bg-cover bg-center bg-no-repeat rounded-xl p-4 min-h-[24rem] sm:min-h-[30rem]"
              style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.10), rgba(0,0,0,0.4)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAdpte0GZEuRgR0TtkiHUu10NpC2oJdttdPlQtWskL5SXFKjVUCs8Zs50V14So1NA7P6sg8XgG-7yRShBGhiLZZBmg6vO_BPCgHZ--63SKjhclafVjFBFDXl3nS4bGqOeYgu4ae2SmUpug9-PZLcuMe8ZNU8xEHIuZu1Glc15mLh-a12WzFqGCZM0VH7nxgzvcjpoRKNzUBm3Cr43QhILtqOzgkH_S56GlRSuyQcDWyLSjM4Y1SdFGWIXePxXxmZSFWx9A810qRDic"'
              }}
            >
              <h1
                className="text-white text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight text-center max-w-xl"
              >
                Find Your Perfect Sports Venue
              </h1>
              <h2
                className="text-white text-xs sm:text-base font-normal leading-normal text-center max-w-lg"
              >
                Discover and book sports facilities for any activity, from soccer fields to tennis courts, all in one place.
              </h2>
              <label className="flex flex-col min-w-40 h-14 w-full max-w-[480px] sm:h-16 mt-4">
                <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                  <div
                    className="text-[#5c778a] flex bg-gray-50 items-center justify-center pl-3 rounded-l-xl"
                    aria-hidden="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                      className="block"
                    >
                      <path
                        d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    placeholder="Search for sports, venues, or locations"
                    className="form-input w-full min-w-0 pr-2 text-[#101518] bg-gray-50 border-white text-sm font-normal leading-normal placeholder:text-[#5c778a]"
                    aria-label="Search"
                    // value=""
                  />
                  <div
                    className="flex items-center justify-center rounded-r-xl bg-gray-50 pr-[7px]"
                    aria-hidden="true"
                  >
                    <button
                      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 sm:h-12 sm:px-5 bg-[#b2d0e5] text-[#101518] text-sm sm:text-base font-bold leading-normal tracking-[0.015em]"
                      type="button"
                    >
                      <span className="truncate">Search</span>
                    </button>
                  </div>
                </div>
              </label>
            </section>

            <section>
             <div className="flex justify-between items-center">
              <h2 className="text-[#101518] text-xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5 sm:text-2xl sm:px-0">
                Featured Sports
              </h2>
              <a href="/othersport" className="mt-2"> See More </a>
              </div> 
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 p-4 sm:p-0">
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{
                      backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCMLhCz9YyHaqaO69m5CL0Xd9XwWXVahBsd2dExyv4sMKPuvZwG_vAh8WIMj3hK8DndlA4jkogV9FYOuKsShSrwx9RwWXISDh48vNa9WiRuFYiF8q2XEqbwUFdUZdwfEpXh0Bl_1p52lUY-6VgWNDZ_zPwhL4DlHeMOgSWtQbKCt9OxZJWvUw3mMR-2l5ebGT6uyaTiNqRLIQdrFckBC734SKHu0n8J4oLlFRJsdQ9uwRiNy8RMv_wbE4NUBCdcPO6RbE2bedcbAhA")'
                    }}
                  ></div>
                  <div>
                    <p className="text-[#101518] text-base font-medium leading-normal">Soccer</p>
                    <p className="text-[#5c778a] text-sm font-normal leading-normal">
                      Book a soccer field near you
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{
                      backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC0vOgSdzqa2eRvhCeeNthxlSLq9uFfcJZ6wAGC5Ml1vxoFIR_8rIvtQcURloZoq0TZbURr80NU9elCOp3IqNCR-PWa-Qb5T1icU7Uu5gVflvWa-AfW2Onx2isKMYA9Nw6Y5f4ndQzHYVLwE92emJyOxzUrqoqs2SkYWYQqDKZo-1kDwLSuR-04Y2YYiN0GxitP2yn4vik8Y6P9bAnlISaZUkea9yg2z4FWM2kmyPqNfouJmtypp01VKAL3OYa926Gg3wYP07qo0bs")'
                    }}
                  ></div>
                  <div>
                    <p className="text-[#101518] text-base font-medium leading-normal">Basketball</p>
                    <p className="text-[#5c778a] text-sm font-normal leading-normal">
                      Find basketball courts for your team
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{
                      backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA9HlH-vg3WKVReg4KAhp-uHRdU8uzxpJE-FHO5KYr4CSnGA6mu_YRGoHPSLyGe_LeOP68YTStaOf_ETZdXQaR5OaUQBiK60cGuua17QOd9a_UggwA6CS2bgcAoVcRSGMxVF0A65Ed-9KALeNZdP-YHRBWzKWh_2rBhE9l1ts1w1tsQZtK76PCx2_7yA0rOPQFX1XMlvmu5tBARcSBv_ExHndGaM54pwHfux-uqFsxO9jH9zj_OVYXggfaEIyuqi7FZ9oA7bhgsjI0")'
                    }}
                  ></div>
                  <div>
                    <p className="text-[#101518] text-base font-medium leading-normal">Tennis</p>
                    <p className="text-[#5c778a] text-sm font-normal leading-normal">
                      Reserve a tennis court for your match
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{
                      backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAms8MK5RQ4I3J4dCC6gV3a8Q9kYU0UltEtZ8I2KK5jPELog08X9Tjq7kdD_CLoohenM1ZNFO56lC9LLkHcJynh0URfad3bLPCg_5T5pXAXMH2Z1dDvnaPgwPQzZhnQ0NJfvrYmLkiWofa4HPMsJyFr0nIjBM7Aw51DBaI0rMTKgX5H8-kgmaBG4MYMC19_5v55Y6ngTUezyVBMhYuv-J2-L_eaqj9ufR5pEt22V8JJHQWIhZMr19Ghuvu3yGbyI2sz-44LnNYE7w4")'
                    }}
                  ></div>
                  <div>
                    <p className="text-[#101518] text-base font-medium leading-normal">Badminton</p>
                    <p className="text-[#5c778a] text-sm font-normal leading-normal">
                      Play badminton at top-rated facilities
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-[#101518] text-xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5 sm:text-2xl sm:px-0">
                Promotions
              </h2>
              <div
                className="flex overflow-y-auto no-scrollbar px-4 gap-3"
                style={{
                  scrollbarWidth: "none",
                }}
              >
                <div className="flex flex-col gap-4 rounded-lg min-w-[15rem] flex-shrink-0">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                    style={{
                      backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBJvu8XfaOPqKZ1ugYHSGnZecmanHRjPNPlr7QOURgghtlp1XH5Z7RETaRoaed0XZStiq01MWGsAkRGVj0DaK14DDB6VbrjqW9YwuVgLacLmQIV_gUgFFLmgQHDvcWeT8s0DUqT2eZOjYGotA8W0hLf-SCI6FiKisTa0XTAZfM8yuHs2mphFLXxGVoeoo0qX9zWZtnYp_CtqlkXMNmMbkSGaNdozs4jGFn4vptB1jV9NptQNtIY2qJu85XDOEQTXf52i_f2FllTWck")'
                    }}
                 ></div>
                  <div>
                    <p className="text-[#101518] text-base font-medium leading-normal">Summer Sports Festival</p>
                    <p className="text-[#5c778a] text-sm font-normal leading-normal">
                      Join us for a weekend of sports and fun!
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 rounded-lg min-w-[15rem] flex-shrink-0">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                    style={{
                      backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBNnU7gS_2pnFuu9rofdX2O0kCUij9OyWsrbVOI9dCil9ObTGsSLx2LGCbTx5O_8WCTdxtfpStth2FD8Lvla2nBamAnC_FqcJ2SSXSS4kgKQP7gJW06AaciqG2jHugjiMsd14CtccZziUgoxd_0N7S4ygWqsr6W6bf3ovhNXGrMF6wP0dfDOVQ2yfa4WDOvZTLTqpUNjSEbZ3O9T0pdimOhJc7lGgtRYu8DkEtjmQrFPtwveMcUT1bAV_rFzQ1uoq6kRWD2bpAjEuI")'
                    }}
                  ></div>
                  <div>
                    <p className="text-[#101518] text-base font-medium leading-normal">Gear Up for the Season</p>
                    <p className="text-[#5c778a] text-sm font-normal leading-normal">
                      Get discounts on all sports equipment.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <Footer/>
            {/* <!-- Add other sections similarly with same responsive px-4 sm:px-0 --> */}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;



