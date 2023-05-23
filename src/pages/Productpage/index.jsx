import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Header from "components/Header";

const ProductpagePage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-auto pb-[279px] w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <Header className="flex flex-row items-center justify-center md:px-5 w-full" />
          <div className="bg-white_A700 flex flex-col items-center justify-start pt-[54px] md:px-10 sm:px-5 px-[54px] w-full">
            <div className="flex flex-col gap-[30px] items-center justify-start max-w-[1248px] mx-auto w-full">
              <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                <Text
                  className="font-newsreader text-black_900 tracking-[-1.28px]"
                  as="h3"
                  variant="h3"
                >
                  Produce
                </Text>
                <Text
                  className="font-inter font-normal ml-6 sm:ml-[0] sm:mt-0 mt-[37px] text-black_900"
                  as="h6"
                  variant="h6"
                >
                  <span className="text-black_900 text-xl text-left font-medium">
                    Fresh
                  </span>
                  <span className="text-black_900 text-xl text-left font-light">
                    {" "}
                    — August 21, 2023
                  </span>
                </Text>
                <Button
                  className="cursor-pointer font-inter font-semibold mb-0.5 min-w-[88px] sm:ml-[0] ml-[482px] sm:mt-0 mt-[21px] text-base text-center text-white_A700"
                  shape="CircleBorder20"
                  size="sm"
                  variant="FillLightgreen900"
                >
                  Default
                </Button>
                <Button
                  className="cursor-pointer font-inter font-semibold mb-0.5 min-w-[62px] ml-2 sm:ml-[0] sm:mt-0 mt-[21px] text-base text-black_900 text-center"
                  shape="CircleBorder20"
                  size="sm"
                  variant="OutlineGray400"
                >
                  A-Z
                </Button>
                <Button
                  className="cursor-pointer font-inter font-semibold mb-0.5 min-w-[101px] ml-2 sm:ml-[0] sm:mt-0 mt-[21px] text-base text-black_900 text-center"
                  shape="CircleBorder20"
                  size="sm"
                  variant="OutlineGray400"
                >
                  List view
                </Button>
              </div>
              <Line className="bg-gray_300 h-0.5 shadow-bs w-full" />
            </div>
          </div>
          <List
            className="sm:flex-col flex-row gap-8 grid md:grid-cols-1 grid-cols-2 ml-24 md:ml-[0] mt-10 md:px-5 w-[58%]"
            orientation="horizontal"
          >
            <div className="bg-gray_50 border-2 border-gray_300 border-solid flex flex-col gap-[23px] justify-start pb-7 rounded-[24px] w-full">
              <Img
                src="images/img_edoneilavvdz.png"
                className="h-[296px] sm:h-auto object-cover rounded-tl-[24px] rounded-tr-[24px] w-full"
                alt="edoneilavvdz"
              />
              <div className="flex flex-col items-start justify-start ml-6 md:ml-[0]">
                <Text
                  className="font-semibold text-black_900"
                  as="h6"
                  variant="h6"
                >
                  Heirloom tomato
                </Text>
                <Text
                  className="font-semibold mt-[5px] text-light_green_900"
                  as="h6"
                  variant="h6"
                >
                  $5.99 / lb
                </Text>
                <Text
                  className="font-normal mt-5 text-gray_600"
                  variant="body1"
                >
                  Grown in San Juan Capistrano, CA
                </Text>
              </div>
            </div>
            <div className="bg-gray_50 border-2 border-gray_300 border-solid flex flex-col gap-[26px] justify-start pb-7 rounded-[24px] w-full">
              <Img
                src="images/img_noonbrewzicb4ekmakunsplash.png"
                className="h-[296px] sm:h-auto object-cover rounded-tl-[24px] rounded-tr-[24px] w-full"
                alt="noonbrewzicb4ek"
              />
              <div className="flex flex-col items-start justify-start ml-6 md:ml-[0]">
                <Text
                  className="font-semibold text-black_900"
                  as="h6"
                  variant="h6"
                >
                  Organic ginger
                </Text>
                <Text
                  className="font-semibold mt-[3px] text-light_green_900"
                  as="h6"
                  variant="h6"
                >
                  $12.99 / lb
                </Text>
                <Text
                  className="font-normal mt-5 text-gray_600"
                  variant="body1"
                >
                  <span className="text-gray_600 text-base font-inter text-left">
                    Grown in{" "}
                  </span>
                  <span className="text-gray_600 text-base font-inter text-left">
                    Huntington Beach
                  </span>
                  <span className="text-gray_600 text-base font-inter text-left">
                    , C
                  </span>
                  <span className="text-gray_600 text-base font-inter text-left">
                    A
                  </span>
                </Text>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default ProductpagePage;
