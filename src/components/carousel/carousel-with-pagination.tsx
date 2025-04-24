"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function CarouselWithPagination({ images, className, showControls = true }: React.ComponentProps<'div'> & { images: string[], showControls?: boolean }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (images.length === 0) return
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  if (images.length === 0) return null
  return (
    <div className={cn("max-w-screen-2xl", className)}>
      <Carousel setApi={setApi} className="w-full max-w-screen-2xl">
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem key={index}>
              <div
                className="group relative aspect-video overflow-hidden rounded-lg"
                
              >
                <AspectRatio ratio={16 / 9}>
                  <Image
                    src={img}
                    alt="screenshot"
                    fill
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </AspectRatio>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {showControls && (
          <>
          <CarouselPrevious />
          <CarouselNext />
          </>
        )}
      </Carousel>
      <div className="mt-4 flex items-center justify-center gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn("h-3.5 w-3.5 rounded-full border-2", {
              "border-primary": current === index + 1,
            })}
          />
        ))}
      </div>
    </div>
  );
}
