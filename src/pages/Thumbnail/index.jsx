import React from "react";

import { Img, Text } from "components";
import ThumbnailCursorlabels from "components/ThumbnailCursorlabels";

const ThumbnailPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-whyteinktrap items-center justify-end mx-auto pt-[50px] shadow-bs w-full">
        <div className="flex flex-col justify-end w-full">
          <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mr-[516px] md:px-5 w-[57%] md:w-full">
            <Img
              src="images/img_illo.png"
              className="h-[81px] md:h-auto sm:mt-0 mt-[9px] object-cover"
              alt="illo"
            />
            <div className="bg-deep_orange_600 border-4 border-black_900 border-solid flex flex-col items-start justify-start mb-7 pb-[7.5px] pt-2.5 sm:px-5 px-[25px] w-auto">
              <Img
                src="images/img_laptop.svg"
                className="h-2.5 w-[15px]"
                alt="laptop"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[49px] items-start justify-start md:ml-[0] ml-[35px] mr-[83px] mt-[113px] md:px-5 w-[91%] md:w-full">
            <div className="h-[221px] md:h-[251px] relative w-[83%] md:w-full">
              <div className="absolute bg-black_900 bottom-[0] h-[184px] right-[0] w-[96%]"></div>
              <div className="absolute inset-x-[0] mx-auto pb-12 pt-11 sm:px-5 px-8 top-[0] w-[885px] md:w-full">
                <div className="bg-amber_A400 flex flex-col items-center justify-end m-auto outline outline-[4px] outline-black_900 pb-12 pt-11 sm:px-5 px-8 w-auto">
                  <Text
                    className="text-black_900 text-center tracking-[-3.96px] w-auto"
                    variant="body3"
                  >
                    Figma basics
                  </Text>
                </div>
                <div className="absolute bg-white_A700 bottom-[0] h-[22px] outline outline-[2px] outline-black_900 right-[15%] w-[22px]"></div>
                <div className="absolute bg-white_A700 bottom-[0] h-[22px] left-[15%] outline outline-[2px] outline-black_900 w-[22px]"></div>
                <div className="absolute bg-white_A700 h-[22px] outline outline-[2px] outline-black_900 right-[15%] top-[0] w-[22px]"></div>
                <div className="absolute bg-white_A700 h-[22px] left-[15%] outline outline-[2px] outline-black_900 top-[0] w-[22px]"></div>
              </div>
            </div>
            <ThumbnailCursorlabels
              className="h-[62px] md:mt-0 mt-[72px] pb-[7.5px] pt-2.5 sm:px-5 px-[25px] relative w-[136px] sm:w-full"
              location="images/img_location.svg"
            />
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[351px] items-start justify-end md:ml-[0] ml-[265px] mt-[91px] md:px-5 w-[78%] md:w-full">
            <div className="bg-indigo_A400 border-4 border-black_900 border-solid flex flex-col items-start justify-start mb-[116px] pb-[7.5px] pt-2.5 sm:px-5 px-[25px] w-auto">
              <Img
                src="images/img_location_indigo_a400.svg"
                className="h-2 w-4"
                alt="location_One"
              />
            </div>
            <Img
              src="images/img_illo_black_900.png"
              className="h-[180px] md:h-auto object-cover"
              alt="illo_One"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ThumbnailPage;
