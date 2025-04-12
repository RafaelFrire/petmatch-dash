
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import getImageUrl from "@/utils/getImageUrl";

type petCarrouselProps = {
  images: string[];
}

export default function PetCarrousel({ images }: petCarrouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="space-y-4">
        <Image
          src={getImageUrl(images[currentIndex])}
          width={600}
          height={400}
          className="w-full h-[400px] object-cover rounded-lg"
          alt="Carousel Image"
        />
      </div>
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
