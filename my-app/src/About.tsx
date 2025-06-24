import React from "react";

const About: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-[#101518] text-[22px] font-bold leading-tight tracking-[-0.015em]">About Gelora Bung Karno</h2>
      <p className="text-[#101518] text-base leading-normal">
        Gelora Bung Karno (GBK) adalah kompleks olahraga yang terletak di Jakarta, Indonesia. Dikenal sebagai salah satu 
        ikon olahraga di Indonesia, GBK telah menjadi tuan rumah berbagai acara olahraga internasional dan nasional 
        sejak dibuka pada tahun 1962. Nama "Gelora Bung Karno" diambil dari nama Presiden pertama Indonesia, Soekarno, 
        yang memiliki visi untuk menjadikan Indonesia sebagai negara yang kuat dan berprestasi di bidang olahraga.
      </p>
      <h3 className="text-[#101518] text-lg font-semibold mt-4">Sejarah</h3>
      <p className="text-[#101518] text-base leading-normal">
        Pembangunan Gelora Bung Karno dimulai pada tahun 1960 dan selesai pada tahun 1962, menjelang Asian Games 
        pertama yang diadakan di Indonesia. Stadion utama, yang dikenal sebagai Stadion Utama Gelora Bung Karno, 
        memiliki kapasitas hingga 88.000 penonton dan menjadi salah satu stadion terbesar di Asia. Sejak saat itu, 
        GBK telah menjadi tempat untuk berbagai acara olahraga, konser, dan festival.
      </p>
      <h3 className="text-[#101518] text-lg font-semibold mt-4">Visi dan Misi</h3>
      <p className="text-[#101518] text-base leading-normal">
        Visi Gelora Bung Karno adalah untuk menjadi pusat olahraga dan rekreasi terkemuka di Indonesia yang 
        mendukung pengembangan atlet dan meningkatkan kualitas hidup masyarakat. Misi kami adalah:
      </p>
      <ul className="list-disc list-inside text-[#101518]">
        <li>Menyediakan fasilitas olahraga yang berkualitas tinggi dan modern.</li>
        <li>Mendukung pengembangan atlet muda melalui program pelatihan dan kompetisi.</li>
        <li>Menjadi tuan rumah berbagai acara olahraga dan budaya yang menarik.</li>
        <li>Meningkatkan kesadaran masyarakat tentang pentingnya olahraga dan gaya hidup sehat.</li>
      </ul>
      <h3 className="text-[#101518] text-lg font-semibold mt-4">Komitmen terhadap Lingkungan</h3>
      <p className="text-[#101518] text-base leading-normal">
        Gelora Bung Karno berkomitmen untuk menjaga lingkungan dan menerapkan praktik berkelanjutan dalam 
        operasionalnya. Kami berusaha untuk mengurangi jejak karbon dan mempromosikan kesadaran lingkungan 
        di antara pengunjung dan pengguna fasilitas.
      </p>
    </div>
  );
};

export default About;
