import React from "react";
import Reviews from "./Review"; // Pastikan path ini sesuai dengan lokasi file Reviews

const DetailSport: React.FC = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-gray-50 overflow-x-hidden font-['Lexend','Noto_Sans',sans-serif]">
      {/* ... kode lainnya ... */}
      <div className="pb-3">
        <div className="flex border-b border-[#d4dce2] px-4 gap-8">
          {/* ... tab lainnya ... */}
          <a className="flex flex-col items-center justify-center border-b-[3px] border-b-[#b2d0e5] text-[#101518] pb-[13px] pt-4" href="#">
            <p className="text-[#101518] text-sm font-bold leading-normal tracking-[0.015em]">Reviews</p>
          </a>
          {/* ... tab lainnya ... */}
        </div>
      </div>
      <Reviews /> {/* Menampilkan komponen Reviews */}
      {/* ... kode lainnya ... */}
    </div>
  );
};

export default DetailSport;
