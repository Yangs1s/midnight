"use client";

import * as React from "react";
import {
  Carousel as CarouselPrimitive,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface CarouselProps {
  className?: string;
  images?: {
    url: string;
    onClick?: () => void;
  }[];
}

const DEFAULT_SLIDES = ["bg-purple-500", "bg-blue-500", "bg-green-500"];

export default function ChoiceCarousel({ images, className }: CarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const slides = images || DEFAULT_SLIDES;

  return (
    <CarouselPrimitive
      setApi={setApi}
      className={"relative w-full mx-auto"}
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {images
          ? images.map((item, index) => (
              <CarouselItem key={index}>
                <div
                  className={`relative w-full h-[76px] rounded-[4px] overflow-hidden cursor-pointer ${className}`}
                  style={{
                    backgroundImage: `url(${item.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  onClick={item.onClick}
                />
              </CarouselItem>
            ))
          : DEFAULT_SLIDES.map((color, index) => (
              <CarouselItem key={index}>
                <div className={`w-full h-[100px] rounded-lg ${color}`} />
              </CarouselItem>
            ))}
      </CarouselContent>

      {slides.length > 1 && (
        <div className="absolute bottom-1 right-2 text-white px-2 py-1 text-[10px] ">
          {current}/{slides.length}
        </div>
      )}
    </CarouselPrimitive>
  );
}
