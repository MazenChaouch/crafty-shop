"use client";
import Image from "next/image";
import rateIcon from "../assets/star.svg";
import starunfilled from "../assets/starunfilled.svg";
interface RatingProps {
  rating: number;
  titled?: boolean;
  onChange?: (rating: number) => void;
}

export const Rating = ({ rating, titled }: RatingProps) => {
  const rate = Math.round(rating);
  return (
    <div className="flex items-center">
      <div className="flex h-fit">
        {[...Array(rate)].map((_, index) => (
          <Image
            key={index}
            src={rateIcon}
            alt="rating"
            className="mr-0.5 h-5 w-5"
          />
        ))}

        {[...Array(5 - rate)].map((_, index) => (
          <Image
            key={index}
            src={starunfilled}
            alt="rating"
            className="mr-0.5 h-5 w-5 "
          />
        ))}
      </div>
      <div className="flex">
        {titled && (
          <>
            <span className="text-xs md:text-lg">{rating}</span>
            <span className="text-xs text-stone-500 md:text-lg">/5</span>
          </>
        )}
      </div>
    </div>
  );
};
