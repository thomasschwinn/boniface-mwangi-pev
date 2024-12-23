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
import { useState, useEffect } from "react";
//import { type CarouselApi } from "@/components/ui/carousel";

export default function TheCarousel({ index, arr, setBg }) {
  const [api, setApi] = useState();

  useEffect(() => {
    if (!api) {
      return;
    }
    window.addEventListener("keydown", checkKeyPressed, true);

    function checkKeyPressed(evt) {
      if (evt.defaultPrevented) {
        return; // Do nothing if the event was already processed
      }
      switch (evt.key) {
        case "ArrowRight":
          const buttonRight = document.getElementById("buttonNext");
          if (buttonRight) {
            buttonRight.click();
          }

          break;
        case "ArrowLeft":
          const buttonLeft = document.getElementById("buttonPrevious");
          if (buttonLeft) {
            buttonLeft.click();
          }
          break;
        case "Escape":
          const buttonClose = document.getElementById("buttonClose");
          if (buttonClose) {
            buttonClose.click();
          }
          break;
      }
      evt.preventDefault();
    }
  }, [api]);
  return (
    <Carousel
      setApi={setApi}
      className="w-full px-4 sm:px-10  2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm"
      opts={{ startIndex: index, loop: true }}
    >
      <button
        id="buttonClose"
        className="  inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground absolute -translate-y-[150%] right-0 mr-4 h-6 w-6 rounded-full  sm:mr-10   "
        onClick={() => {
          setBg("bg-opacity-100 opacity-0");
          //onClose
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-x"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
      <div className="absolute top-0 right-0 p-4">
        {/* <button
          className="bg-white"
          onClick={() => {
            setBg("bg-opacity-100 opacity-0");
            //onClose
          }}
        >
          Close
        </button> */}
      </div>
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
                          objectFit: "contain",
                          //objectPosition: objectPosition,
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
      <CarouselPrevious
        className="left-10 ml-0 top-1/1 -right-0 translate-y-4 sm:-left-12 sm:top-1/2 sm:-translate-y-1/2 sm:ml-12"
        id="buttonPrevious"
      />
      <CarouselNext
        className="right-10 ml-0 top-1/1 translate-y-4 sm:-right-12 sm:top-1/2 sm:-translate-y-1/2 sm:mr-12"
        id="buttonNext"
      />
    </Carousel>
  );
}
