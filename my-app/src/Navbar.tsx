import axios from "axios";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
  const goToSignIn = () => {
    navigate('/signin');  // pindah ke route sign in
  };
  const signOut = async () => {
    // const token = window.sessionStorage.getItem("token");
    // const respons = await axios.get(
    //     'https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/logout', 
    //     {
    //         headers: {
    //             'Authorization': `Bearer ${token}`,
    //             'Content-Type': 'application/json'
    //           },
    //     }
    // )
    sessionStorage.removeItem('token');
    navigate('/');  // pindah ke route sign in
  };
  const goToHome = () => {
    navigate('/');  // pindah ke home
  };
  const goToOtherSport = () => {
    navigate('/othersport');  // pindah ke other sport
  };


  const token = window.sessionStorage.getItem("token");

    return <header
    className="flex flex-wrap items-center justify-between whitespace-nowrap border-b border-solid border-b-[#eaeef1] px-4 py-3 sm:px-10"
  >
    <div className="flex flex-wrap items-center gap-4 sm:gap-8">
      <div className="flex items-center gap-4 text-[#101518]">
        <div className="size-4 flex-shrink-0">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 sm:w-5 sm:h-5"
          >
            <g clipPath="url(#clip0_6_319)">
              <path
                d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                fill="currentColor"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_6_319">
                <rect width="48" height="48" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
        <h2
          className="text-[#101518] text-lg font-bold leading-tight tracking-[-0.015em] whitespace-nowrap"
        >
          Damiun Sports
        </h2>
      </div>
      <nav
        className="hidden sm:flex flex-wrap items-center gap-5 sm:gap-9 text-[#101518] text-sm font-medium leading-normal whitespace-nowrap"
        aria-label="Primary"
      >
        <a href="/" className="hover:underline focus:underline focus:outline-none">Home</a>
        
        <a href="#" className="hover:underline focus:underline focus:outline-none">Bookings</a>
        <a href="#" className="hover:underline focus:underline focus:outline-none">Favorites</a>
        <a href="#" className="hover:underline focus:underline focus:outline-none">Help</a>
      </nav>
    </div>
    <div
      className="flex flex-1 flex-wrap justify-end gap-2 sm:gap-8 items-center min-w-0"
    >
      <label className="flex flex-col min-w-[10rem] max-w-[16rem] h-10 sm:h-12 w-full sm:max-w-[24rem]">
        <div
          className="flex w-full flex-1 items-stretch rounded-xl h-full"
        >
          <div
            className="text-[#5c778a] flex border border-[#d4dce2] bg-gray-50 items-center justify-center pl-3 rounded-l-xl border-r-0"
            data-icon="MagnifyingGlass"
            data-size="24px"
            data-weight="regular"
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
            placeholder="Search"
            className="form-input w-full min-w-0 flex-1 pr-2 rounded-r-xl border border-l-0 border-[#d4dce2] bg-gray-50 text-[#101518] text-base font-normal leading-normal placeholder:text-[#5c778a] focus:outline-none focus:ring-0"
            aria-label="Search"
            // value=""
          />
        </div>
      </label>
      {!token ? <button
        className="flex min-w-[5.25rem] max-w-[30rem] cursor-pointer items-center justify-center rounded-full h-10 px-4 bg-[#eaeef1] text-[#101518] text-sm font-bold leading-normal tracking-[0.015em] whitespace-nowrap sm:min-w-[84px]"
        type="button"
        onClick={goToSignIn}
      >
        <span className="truncate">Sign In</span>
      </button>: 
      <button
      className="flex min-w-[5.25rem] max-w-[30rem] cursor-pointer items-center justify-center rounded-full h-10 px-4 bg-[#eaeef1] text-[#101518] text-sm font-bold leading-normal tracking-[0.015em] whitespace-nowrap sm:min-w-[84px]"
      type="button"
      onClick={signOut}
    >
      <span className="truncate">Sign Out</span>
    </button>
    }

    </div>
  </header>
}

export default Navbar