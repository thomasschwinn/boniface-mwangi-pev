import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function TheCarousel({ index, arr }) {
  return (
    <Carousel
      className="w-full px-4 sm:px-10  2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm"
      opts={{ startIndex: index, loop: true }}
    >
      <CarouselContent>
        {arr.map((img, i) => {
          const maxW = 508;
          const helper = img.width / maxW;
          const width = img.width / helper;
          const height = img.height / helper;
          const aspectRatio = width / height;
          const objectFit = aspectRatio < 1 ? "contain" : "cover";
          const objectPosition = aspectRatio < 1 ? "center" : "100% 100%";
          return (
            <CarouselItem key={i}>
              <div className="">
                <Card>
                  <CardContent className="flex aspect-video items-center justify-center p-2 lg:p-4">
                    <div className="relative w-fit h-full text-white">
                      a a a a a a a a a a a a a a a a a a a a a a a a a a a a a
                      a a a a a a a a a a a a a a a a a a a aa a a a a a a a a a
                      a a a a a a a a a a a a a a a a a a a a a a a a a a a a a
                      a a a a a a a a a a a a a a a a a a a a a a a a a a a a a
                      a a a a a a a a a a a a a a a a a a a a aa a a a a a
                      <Image
                        fill
                        sizes="100vw"
                        // placeholder="blur"
                        src={img.src}
                        style={{
                          objectFit: objectFit,
                          objectPosition: objectPosition,
                        }}
                        alt="Copywrite by Boniface Mwangi"
                      />
                    </div>

                    {/* <div className="text-4xl font-semibold">{i + 1}</div> */}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="left-10 ml-0 top-1/1 -right-0 translate-y-4 sm:-left-12 sm:top-1/2 sm:-translate-y-1/2 sm:ml-12" />
      <CarouselNext className="right-10 ml-0 top-1/1 translate-y-4 sm:-right-12 sm:top-1/2 sm:-translate-y-1/2 sm:mr-12" />
    </Carousel>
  );
}
