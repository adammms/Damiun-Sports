import React from "react";
import "tailwindcss/tailwind.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const DetailSport: React.FC = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-gray-50 overflow-x-hidden font-['Lexend','Noto_Sans',sans-serif]"
    >
    <div className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden" style={{fontFamily: "Lexend, Noto Sans, sans-serif"}}>
      <div className="layout-container flex h-full grow flex-col">
      <Navbar/>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap gap-2 p-4">
              <a className="text-[#5c778a] text-base font-medium leading-normal" href="#">Venues</a>
              <span className="text-[#5c778a] text-base font-medium leading-normal">/</span>
              <a className="text-[#5c778a] text-base font-medium leading-normal" href="#">Jakarta</a>
              <span className="text-[#5c778a] text-base font-medium leading-normal">/</span>
              <span className="text-[#101518] text-base font-medium leading-normal">Gelora Bung Karno</span>
            </div>
            <div className="@container">
              <div className="@[480px]:px-4 @[480px]:py-3">
                <div
                  className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-gray-50 @[480px]:rounded-xl min-h-80"
                  style={{backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCDoMVfZdbuXk6ZReWc_yycZr4omivgJyOflbTuUDhrRBXpre9K52v7yVPpncKAJuMREfnyePsTQhFpAU6Whnzon1GP5iqM1zvruNRbIR9aqWVS0V-1CuIeQjcn0xMJu2Rr49iZ9FhnuYeTnX_6WNwwtRa3bon2wvGv4XQRiA6YqBCVA4E3nmrhxg7DWrbpZE3Q_xbbhrs8_s8ja3D84eVMEWTkgMeN1itHlIhXr7D83tlHqMgPpbrODCLx2Ga9XW1U0zTxFu5z7Eo")'}}
                >
                  <div className="flex p-4"><p className="text-white tracking-light text-[28px] font-bold leading-tight">Gelora Bung Karno</p></div>
                </div>
              </div>
            </div>
            <div className="pb-3">
              <div className="flex border-b border-[#d4dce2] px-4 gap-8">
                <a className="flex flex-col items-center justify-center border-b-[3px] border-b-[#b2d0e5] text-[#101518] pb-[13px] pt-4" href="#">
                  <p className="text-[#101518] text-sm font-bold leading-normal tracking-[0.015em]">Overview</p>
                </a>
                <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#5c778a] pb-[13px] pt-4" href="#">
                  <p className="text-[#5c778a] text-sm font-bold leading-normal tracking-[0.015em]">Reviews</p>
                </a>
                <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#5c778a] pb-[13px] pt-4" href="#">
                  <p className="text-[#5c778a] text-sm font-bold leading-normal tracking-[0.015em]">About</p>
                </a>
              </div>
            </div>
            <h2 className="text-[#101518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Photos</h2>
            <div className="flex w-full grow bg-gray-50 @container p-4">
              <div className="w-full gap-1 overflow-hidden bg-gray-50 @[480px]:gap-2 aspect-[3/2] rounded-xl grid grid-cols-[2fr_1fr_1fr]">
                <div
                  className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none row-span-2"
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCOZfqFw4p4FmjjGZxXE9qE1Bwxp-S_8853_H22mpbTNkExZ1loxsaRxOSIU8-bPtvqLwto6TNIQpyMHjQPH1-Xi9VXFAKspB8h65kIGn5KLplPVBz5YmYrt5bGZ_Uw2ED6Xcw-4Y6M6BdamPaXZLO50epakwSmaEG68IfPw9xS-VMoXby7zJ8WPb3vQ7k9pdEaT5uUw2JsN_hVvhWJxtFnjW6YV_-R-ScxPw4FE4BcBMH-Tcu3RCNUre6_z7pi-JSk8KEHJ-LPVgY")'}}
                ></div>
                <div
                  className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none col-span-2"
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuChv2maSUTHLn18yjsk2Jv9D6sW_dGcOPIW81t3ImoF4ZlYPfMaU4QJcAuCkJajc-ISMAmHh61YovdGYFOP_j58l6uxJAeYbMtVOVNJYzN9OA8iuAdErwxJhjSUtl-sy4ZfhoTNPzsV1D1tWEp_EJKJP08nSxFuJndOAB_nLWO7oIVs33dSQMijkC5Ko4P2mEb8-jwtEQMxbidvHCuy3eL5OwRJ9xFl3-4OxVlsVSbg8x__ex6d0ZdN1Yi3b6wnoqJKJluHVYRLgPs")'}}
                ></div>
                <div
                  className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none col-span-2"
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAEKPAcjPyIyP8cxaU_h0QiyecGJJI8IUyKK09qavMw-7MrFBhyqMfRr1Hb_kl-YmGsnnHU252lj2i-haHxpjcBhUsCjZsA2_sBAM_zBfHV3jJKHH3kyWDGiV8xsvdd7QOF_EpNeXZamAVTDdTkF3JoxDvfca2zXbgz1FJ9jjtnScUM3UzY7TToxQg1XWruQbCxu80sc33e5wXG3hzg_jRvVSyC4VH_S2g7YplNm8zgEq4rSh6oxaxbjmNpeUDVfudAZxUppO4G3NU")'}}
                ></div>
              </div>
            </div>
            <h2 className="text-[#101518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Amenities</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-1 gap-3 rounded-lg border border-[#d4dce2] bg-gray-50 p-4 items-center">
                <div className="text-[#101518]" data-icon="SwimmingPool" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M88,149.39a8,8,0,0,0,8-8V128h64v15.29a8,8,0,0,0,16,0V32a8,8,0,0,0-16,0V48H96V32a8,8,0,0,0-16,0V141.39A8,8,0,0,0,88,149.39ZM96,112V96h64v16Zm64-48V80H96V64ZM24,168a8,8,0,0,1,8-8c14.42,0,22.19,5.18,28.44,9.34C66,173.06,70.42,176,80,176s14-2.94,19.56-6.66c6.24-4.16,14-9.34,28.43-9.34s22.2,5.18,28.44,9.34c5.58,3.72,10,6.66,19.57,6.66s14-2.94,19.56-6.66c6.25-4.16,14-9.34,28.44-9.34a8,8,0,0,1,0,16c-9.58,0-14,2.94-19.56,6.66-6.25,4.16-14,9.34-28.44,9.34s-22.2-5.18-28.44-9.34C142,178.94,137.57,176,128,176s-14,2.94-19.56,6.66c-6.24,4.16-14,9.34-28.43,9.34s-22.19-5.18-28.44-9.34C46,178.94,41.58,176,32,176A8,8,0,0,1,24,168Zm208,40a8,8,0,0,1-8,8c-9.58,0-14,2.94-19.56,6.66-6.25,4.16-14,9.34-28.44,9.34s-22.2-5.18-28.44-9.34C142,218.94,137.57,216,128,216s-14,2.94-19.56,6.66c-6.24,4.16-14,9.34-28.43,9.34s-22.19-5.18-28.44-9.34C46,218.94,41.58,216,32,216a8,8,0,0,1,0-16c14.42,0,22.19,5.18,28.44,9.34C66,213.06,70.42,216,80,216s14-2.94,19.56-6.66c6.24-4.16,14-9.34,28.43-9.34s22.2,5.18,28.44,9.34c5.58,3.72,10,6.66,19.57,6.66s14-2.94,19.56-6.66c6.25-4.16,14-9.34,28.44-9.34A8,8,0,0,1,232,208Z"
                    ></path>
                  </svg>
                </div>
                <h2 className="text-[#101518] text-base font-bold leading-tight">Swimming Pool</h2>
              </div>
              <div className="flex flex-1 gap-3 rounded-lg border border-[#d4dce2] bg-gray-50 p-4 items-center">
                <div className="text-[#101518]" data-icon="Garage" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M240,192h-8V98.67a16,16,0,0,0-7.12-13.31l-88-58.67a16,16,0,0,0-17.75,0l-88,58.67A16,16,0,0,0,24,98.67V192H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM40,98.67,128,40l88,58.66V192H192V136a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8v56H40ZM176,144v16H136V144Zm-56,16H80V144h40ZM80,176h40v16H80Zm56,0h40v16H136Z"
                    ></path>
                  </svg>
                </div>
                <h2 className="text-[#101518] text-base font-bold leading-tight">Parking</h2>
              </div>
              <div className="flex flex-1 gap-3 rounded-lg border border-[#d4dce2] bg-gray-50 p-4 items-center">
                <div className="text-[#101518]" data-icon="Shower" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M64,236a12,12,0,1,1-12-12A12,12,0,0,1,64,236Zm20-44a12,12,0,1,0,12,12A12,12,0,0,0,84,192Zm-64,0a12,12,0,1,0,12,12A12,12,0,0,0,20,192Zm32-32a12,12,0,1,0,12,12A12,12,0,0,0,52,160ZM256,40a8,8,0,0,1-8,8H219.31L191.46,75.86,169.8,202.65a16,16,0,0,1-27.09,8.66l-98-98a16,16,0,0,1,8.69-27.1L180.14,64.54,208,36.69A15.86,15.86,0,0,1,219.31,32H248A8,8,0,0,1,256,40ZM174.21,81.79,56,102l98,98Z"
                    ></path>
                  </svg>
                </div>
                <h2 className="text-[#101518] text-base font-bold leading-tight">Shower</h2>
              </div>
              <div className="flex flex-1 gap-3 rounded-lg border border-[#d4dce2] bg-gray-50 p-4 items-center">
                <div className="text-[#101518]" data-icon="WifiHigh" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M140,204a12,12,0,1,1-12-12A12,12,0,0,1,140,204ZM237.08,87A172,172,0,0,0,18.92,87,8,8,0,0,0,29.08,99.37a156,156,0,0,1,197.84,0A8,8,0,0,0,237.08,87ZM205,122.77a124,124,0,0,0-153.94,0A8,8,0,0,0,61,135.31a108,108,0,0,1,134.06,0,8,8,0,0,0,11.24-1.3A8,8,0,0,0,205,122.77Zm-32.26,35.76a76.05,76.05,0,0,0-89.42,0,8,8,0,0,0,9.42,12.94,60,60,0,0,1,70.58,0,8,8,0,1,0,9.42-12.94Z"
                    ></path>
                  </svg>
                </div>
                <h2 className="text-[#101518] text-base font-bold leading-tight">Wifi</h2>
              </div>
              <div className="flex flex-1 gap-3 rounded-lg border border-[#d4dce2] bg-gray-50 p-4 items-center">
                <div className="text-[#101518]" data-icon="Toilet" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M120,64a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h16A8,8,0,0,1,120,64Zm52.32,133.14,3.52,24.6A16,16,0,0,1,160,240H96a16,16,0,0,1-15.84-18.26l3.52-24.6A96.09,96.09,0,0,1,32,112a8,8,0,0,1,8-8H56V40A16,16,0,0,1,72,24H184a16,16,0,0,1,16,16v64h16a8,8,0,0,1,8,8A96.09,96.09,0,0,1,172.32,197.14ZM72,104H184V40H72Zm85.07,99.5a96.15,96.15,0,0,1-58.14,0L96,224h64ZM207.6,120H48.4a80,80,0,0,0,159.2,0Z"
                    ></path>
                  </svg>
                </div>
                <h2 className="text-[#101518] text-base font-bold leading-tight">Restroom</h2>
              </div>
              <div className="flex flex-1 gap-3 rounded-lg border border-[#d4dce2] bg-gray-50 p-4 items-center">
                <div className="text-[#101518]" data-icon="Wine" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M205.33,95.67,183.56,21.74A8,8,0,0,0,175.89,16H80.11a8,8,0,0,0-7.67,5.74L50.67,95.67a63.46,63.46,0,0,0,17.42,64.67A87.39,87.39,0,0,0,120,183.63V224H88a8,8,0,1,0,0,16h80a8,8,0,1,0,0-16H136V183.63a87.41,87.41,0,0,0,51.91-23.29A63.46,63.46,0,0,0,205.33,95.67ZM86.09,32h83.82L190,100.19c.09.3.17.6.25.9-21.42,7.68-45.54-1.6-58.63-8.23C106.43,80.11,86.43,78.49,71.68,80.93ZM177,148.65a71.69,71.69,0,0,1-98,0,47.55,47.55,0,0,1-13-48.46l.45-1.52c12-4.06,31.07-5.14,57.93,8.47,11.15,5.65,29.16,12.85,48.43,12.85a68.64,68.64,0,0,0,19.05-2.6A47.2,47.2,0,0,1,177,148.65Z"
                    ></path>
                  </svg>
                </div>
                <h2 className="text-[#101518] text-base font-bold leading-tight">Food</h2>
              </div>
            </div>
            <h2 className="text-[#101518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Pricing</h2>
            <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#d4dce2] py-5">
                <p className="text-[#5c778a] text-sm font-normal leading-normal">Weekday</p>
                <p className="text-[#101518] text-sm font-normal leading-normal">$50/hour</p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#d4dce2] py-5">
                <p className="text-[#5c778a] text-sm font-normal leading-normal">Weekend</p>
                <p className="text-[#101518] text-sm font-normal leading-normal">$75/hour</p>
              </div>
            </div>
            <h2 className="text-[#101518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Availability</h2>
            <div className="flex flex-wrap items-center justify-center gap-6 p-4">
              <div className="flex min-w-72 max-w-[336px] flex-1 flex-col gap-0.5">
                <div className="flex items-center p-1 justify-between">
                  <button>
                    <div className="text-[#101518] flex size-10 items-center justify-center" data-icon="CaretLeft" data-size="18px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
                      </svg>
                    </div>
                  </button>
                  <p className="text-[#101518] text-base font-bold leading-tight flex-1 text-center pr-10">July 2024</p>
                </div>
                <div className="grid grid-cols-7">
                  <p className="text-[#101518] text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">S</p>
                  <p className="text-[#101518] text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">M</p>
                  <p className="text-[#101518] text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">T</p>
                  <p className="text-[#101518] text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">W</p>
                  <p className="text-[#101518] text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">T</p>
                  <p className="text-[#101518] text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">F</p>
                  <p className="text-[#101518] text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">S</p>
                  <button className="h-12 w-full text-[#101518] col-start-4 text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">1</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">2</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">3</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">4</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full bg-[#b2d0e5]">5</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">6</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">7</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">8</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">9</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">10</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">11</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">12</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">13</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">14</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">15</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">16</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">17</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">18</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">19</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">20</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">21</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">22</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">23</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">24</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">25</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">26</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">27</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">28</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">29</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">30</div>
                  </button>
                </div>
              </div>
              <div className="flex min-w-72 max-w-[336px] flex-1 flex-col gap-0.5">
                <div className="flex items-center p-1 justify-between">
                  <p className="text-[#101518] text-base font-bold leading-tight flex-1 text-center pl-10">August 2024</p>
                  <button>
                    <div className="text-[#101518] flex size-10 items-center justify-center" data-icon="CaretRight" data-size="18px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                      </svg>
                    </div>
                  </button>
                </div>
                <div className="grid grid-cols-7">
                  <p className="text-[#101518] text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">S</p>
                  <p className="text-[#101518] text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">M</p>
                  <p className="text-[#101518] text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">T</p>
                  <p className="text-[#101518] text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">W</p>
                  <p className="text-[#101518] text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">T</p>
                  <p className="text-[#101518] text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">F</p>
                  <p className="text-[#101518] text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">S</p>
                  <button className="h-12 w-full text-[#101518] col-start-4 text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">1</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">2</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">3</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">4</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">5</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">6</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">7</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">8</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">9</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">10</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">11</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">12</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">13</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">14</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">15</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">16</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">17</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">18</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">19</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">20</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">21</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">22</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">23</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">24</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">25</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">26</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">27</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">28</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">29</div>
                  </button>
                  <button className="h-12 w-full text-[#101518] text-sm font-medium leading-normal">
                    <div className="flex size-full items-center justify-center rounded-full">30</div>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex px-4 py-3 justify-end">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-[#b2d0e5] text-[#101518] text-base font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Book Now</span>
              </button>
            </div>
          </div>
        </div>
        <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
              <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                <a className="text-[#5c778a] text-base font-normal leading-normal min-w-40" href="#">About</a>
                <a className="text-[#5c778a] text-base font-normal leading-normal min-w-40" href="#">Contact</a>
                <a className="text-[#5c778a] text-base font-normal leading-normal min-w-40" href="#">Privacy Policy</a>
              </div>
              <p className="text-[#5c778a] text-base font-normal leading-normal">@2024 SportSpot. All rights reserved.</p>
            </footer>
          </div>
        </footer>
      </div>
    </div>
    </div>
  );
};

export default DetailSport;