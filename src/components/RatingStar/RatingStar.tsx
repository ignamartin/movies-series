import { FaStar } from "react-icons/fa6";

export function RatingStar({ rating }: { rating: number }) {
  const rate = Math.round((rating / 10) * 5);
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          className={`w-4 h-4 ${
            star <= rate ? "text-yellow-400 fill-yellow-400" : "text-gray-400"
          }`}
        />
      ))}
    </div>
  );
}
