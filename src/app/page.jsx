const path = require("path");
const fs = require("fs");

import sizeOf from "image-size";

import Image from "next/image";

import ModalTrigger from "./_components/ModalTrigger";

export default async function Home() {
  //joining path of directory
  const directoryPath = path.join(
    __dirname.replace("[project]/", ""),
    "../../../public/pev"
  );

  const arr = fs.readdirSync(directoryPath).map((file, i) => {
    const { height, width } = sizeOf(directoryPath + "/" + file);
    return { src: `/pev/${file}`, width: width, height: height };
  });
  // let modaltrigger = false;
  return (
    // <TheDialogWrapper trigger={modaltrigger}>
    <div className="container mx-auto grid grid-cols-3 gap-1">
      {arr.map((img, i) => {
        const maxW = 508;
        const helper = img.width / maxW;
        const width = img.width / helper;
        const height = img.height / helper;
        const aspectRatio = width / height;
        const objectFit = aspectRatio < 1 ? "contain" : "cover";
        const objectPosition = aspectRatio < 1 ? "center" : "100% 100%";
        return (
          <ModalTrigger
            key={i}
            index={i}
            arr={arr}
            // style={{ height: `${height}px` }}
            className={`relative h-[327px] cursor-pointer`}
          >
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
          </ModalTrigger>
        );
      })}
    </div>
    // </TheDialogWrapper>
  );
}
