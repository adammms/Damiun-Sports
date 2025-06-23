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
      <Navbar />
      <div className="flex grow flex-col">
        <main className="flex justify-center flex-2 px-4 sm:px-6 lg:px-10 py-5">
          <div className="flex flex-col gap-8 w-full max-w-[1200px]">
            <section
              className="flex flex-col items-center gap-6 bg-cover bg-center bg-no-repeat rounded-xl px-6 py-16 sm:py-20 md:py-24 text-center"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(0,0,0,0.10), rgba(0,0,0,0.4)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAdpte0GZEuRgR0TtkiHUu10NpC2oJdttdPlQtWskL5SXFKjVUCs8Zs50V14So1NA7P6sg8XgG-7yRShBGhiLZZBmg6vO_BPCgHZ--63SKjhclafVjFBFDXl3nS4bGqOeYgu4ae2SmUpug9-PZLcuMe8ZNU8xEHIuZu1Glc15mLh-a12WzFqGCZM0VH7nxgzvcjpoRKNzUBm3Cr43QhILtqOzgkH_S56GlRSuyQcDWyLSjM4Y1SdFGWIXePxXxmZSFWx9A810qRDic")'
              }}
            >
              <h1 className="text-white text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight max-w-xl">
                Find Your Perfect Sports Venue
              </h1>
              <h2 className="text-white text-sm sm:text-base font-normal max-w-lg">
                Discover and book sports facilities for any activity, from soccer fields to tennis courts, all in one place.
              </h2>
              <label className="flex flex-col w-full max-w-[480px] mt-6">
                <div className="flex w-full rounded-xl h-14 sm:h-16">
                  <div className="text-[#5c778a] flex bg-gray-50 items-center justify-center pl-3 rounded-l-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    placeholder="Search for sports, venues, or locations"
                    className="w-full pr-2 text-[#101518] bg-gray-50 border-white text-sm placeholder:text-[#5c778a]"
                    aria-label="Search"
                  />
                  <div className="flex items-center justify-center rounded-r-xl bg-gray-50 pr-2">
                    <button
                      className="h-10 sm:h-12 px-4 sm:px-5 rounded-full bg-[#b2d0e5] text-[#101518] text-sm sm:text-base font-bold"
                      type="button"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </label>
            </section>

            <section>
              <div className="flex justify-between items-center px-2 sm:px-0">
                <h2 className="text-[#101518] text-xl sm:text-2xl font-bold">Featured Sports</h2>
                <a href="/othersport" className="text-sm text-blue-500 underline">See More</a>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 p-2 sm:p-0">
                {["Soccer", "Basketball", "Tennis", "Badminton"].map((sport, idx) => (
                  <div key={idx} className="flex flex-col gap-2 pb-3">
                    <div
                      className="w-full aspect-square bg-cover bg-center rounded-xl"
                      style={{ backgroundImage: `url(/images/sport${idx + 1}.jpg)` }}
                    ></div>
                    <div>
                      <p className="text-[#101518] text-base font-medium">{sport}</p>
                      <p className="text-[#5c778a] text-sm">Book a {sport.toLowerCase()} facility near you</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-[#101518] text-xl sm:text-2xl font-bold px-2 sm:px-0">Promotions</h2>
              <div className="flex overflow-x-auto gap-3 px-2 sm:px-0 no-scrollbar">
                {[1, 2].map((i) => (
                  <div key={i} className="flex flex-col gap-2 min-w-[15rem] flex-shrink-0">
                    <div
                      className="aspect-video bg-cover bg-center rounded-xl"
                      style={{ backgroundImage: `url(/images/promo${i}.jpg)` }}
                    ></div>
                    <div>
                      <p className="text-[#101518] text-base font-medium">{i === 1 ? "Summer Sports Festival" : "Gear Up for the Season"}</p>
                      <p className="text-[#5c778a] text-sm">
                        {i === 1
                          ? "Join us for a weekend of sports and fun!"
                          : "Get discounts on all sports equipment."}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;