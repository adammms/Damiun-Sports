import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Overview from "./Overview";
import Reviews from "./Review";
import About from "./About";

const DetailSport: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Overview')

  let content = <></> 
  if(activeTab === 'Overview'){
    content = <Overview/>
  }else if (activeTab === 'Review'){
    content = <Reviews/>
  }else {
    content = <About/>
  }

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
                <a onClick={() => setActiveTab('Overview')}  className={`flex flex-col items-center justify-center border-b-[3px] ${activeTab==="Overview"?"border-b-[#b2d0e5] text-[#101518]":"border-b-transparent text-[#5c778a]"}  pb-[13px] pt-4`} href="#">
                  <p className={`${activeTab==="Overview"? "text-[#101518]":"text-[#5c778a]"} text-sm font-bold leading-normal tracking-[0.015em]`}>Overview</p>
                </a>
                <a onClick={() => setActiveTab('Review')} className={`flex flex-col items-center justify-center border-b-[3px] ${activeTab==="Review"?"border-b-[#b2d0e5] text-[#101518]":"border-b-transparent text-[#5c778a]"}  pb-[13px] pt-4`} href="#">
                  <p className={`${activeTab==="Review"? "text-[#101518]":"text-[#5c778a]"} text-sm font-bold leading-normal tracking-[0.015em]`}>Review</p>
                </a>
                <a onClick={() => setActiveTab('About')} className={`flex flex-col items-center justify-center border-b-[3px] ${activeTab==="About"?"border-b-[#b2d0e5] text-[#101518]":"border-b-transparent text-[#5c778a]"} pb-[13px] pt-4`} href="#">
                  <p className={`${activeTab==="About"? "text-[#101518]":"text-[#5c778a]"} text-sm font-bold leading-normal tracking-[0.015em]`}>About</p>
                </a>
              </div>
            </div>
            {content}
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