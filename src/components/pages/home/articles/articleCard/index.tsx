import Image from "next/image";
import React, { JSX } from "react";

interface ArticleCardProps {
  image: string;
  date: string;
  title: string;
  readMoreText: string;
}

export const ArticleCard = ({
  image,
  date,
  title,
  readMoreText,
}: ArticleCardProps): JSX.Element => {
  return (
    <div className="w-full max-w-[295px] h-[356px]">
      <div className="relative w-full h-full">
        <div className="w-full h-[308px] relative">
          <Image
            src={image}
            alt="Article thumbnail"
            width={295}
            height={308}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="absolute bottom-0 right-0 w-[262px] h-32 bg-white border-2 border-[#b80000]">
          <div className="mt-3 ml-7 text-sm text-sencondary100 font-normal leading-7 font-poppins">
            {date}
          </div>
          <div className="mt-[11px] mx-4 font-bold text-black-100 text-xl leading-8 truncate font-montserrat">
            {title}
          </div>
          <div className="mt-[5px] ml-4 font-bold text-primary100 text-base leading-7 underline cursor-pointer font-montserrat">
            {readMoreText}
          </div>
        </div>
      </div>
    </div>
  );
};
