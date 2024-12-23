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

  let arr = fs.readdirSync(directoryPath).map((file, i) => {
    const { height, width } = sizeOf(directoryPath + "/" + file);
    return { src: `/pev/${file}`, width: width, height: height };
  });

  // get the messurements for the grid with three columns
  let count = 0;
  let width = 0;

  const arrWithCol3width = [];
  const arrHelp = [];
  arr.map((row, i) => {
    count = count + 1;
    // sum the width of three images
    width = width + row.width;

    // write the row in a helper array
    arrHelp.push(row);

    if (count == 3) {
      arrHelp.map((img, ii) => {
        const col3width = (img.width / width) * 100;
        arrHelp[ii]["col3width"] = col3width.toFixed(2) * 1;
        arrWithCol3width.push(arrHelp[ii]);

        console.log(img.src, img.width, img.height);
      });
      arrHelp.length = 0;
      count = 0;
      width = 0;
    }
  });
  //arr = [...arrWithCol3width];
  //console.log(arrWithCol3width);
  // let modaltrigger = false;
  return (
    // <TheDialogWrapper trigger={modaltrigger}>
    <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-1">
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
            width={width}
            height={height}
            // style={{ height: `${height}px` }}
            className={`relative  cursor-pointer`}
          >
            <Image
              fill
              sizes="100vw 50vw 33vw"
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
