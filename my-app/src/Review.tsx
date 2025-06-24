import React from "react";

const Reviews: React.FC = () => {
  const reviews = [
    {
      name: "Andi",
      date: "Juni 20, 2025",
      rating: 5,
      comment: "Tempat yang sangat bagus untuk berolahraga! Fasilitasnya lengkap dan bersih.",
    },
    {
      name: "Budi",
      date: "Juni 18, 2025",
      rating: 4,
      comment: "Suka dengan suasana di sini, tetapi parkirnya agak sulit.",
    },
    {
      name: "Cindy",
      date: "Juni 15, 2025",
      rating: 5,
      comment: "Gelora Bung Karno adalah tempat favorit saya untuk berolahraga. Sangat direkomendasikan!",
    },
    {
      name: "Dewi",
      date: "Juni 10, 2025",
      rating: 3,
      comment: "Fasilitasnya baik, tetapi kadang-kadang terlalu ramai.",
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-[#101518] text-[22px] font-bold leading-tight tracking-[-0.015em]">Reviews</h2>
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="border border-[#d4dce2] p-4 rounded-lg">
            <h3 className="text-[#101518] font-bold">{review.name}</h3>
            <p className="text-[#5c778a] text-sm">{review.date}</p>
            <p className="text-[#101518]">Rating: {review.rating} ⭐</p>
            <p className="text-[#101518]">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
