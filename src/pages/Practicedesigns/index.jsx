import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Text } from "components";
import ThumbnailCursorlabels from "components/ThumbnailCursorlabels";

const PracticedesignsPage = () => {
  return (
    <>
      <div className="bg-green_A700 flex sm:flex-col md:flex-col flex-row font-whyteinktrap gap-[37px] items-start mx-auto md:pr-10 sm:pr-5 pr-[157px] w-full">
        <div className="h-[720px] relative w-[84%] md:w-full">
          <div className="absolute bottom-[34%] h-[189px] md:h-[200px] right-[0] w-[96%] md:w-full">
            <div className="absolute bg-black_900 bottom-[0] h-[151px] right-[0] w-[96%]"></div>
            <div className="absolute inset-x-[0] mx-auto pb-11 pt-10 sm:px-5 px-8 top-[0] w-[822px] md:w-full">
              <div className="bg-white_A700 flex flex-col items-center justify-end m-auto outline outline-[4px] outline-black_900 pb-11 pt-10 sm:px-5 px-8 w-auto">
                <Text
                  className="text-black_900 text-center tracking-[-2.88px] w-auto"
                  as="h1"
                  variant="h1"
                >
                  Practice designs
                </Text>
              </div>
              <div className="absolute bg-white_A700 bottom-[0] h-[22px] outline outline-[2px] outline-black_900 right-[18%] w-[22px]"></div>
              <div className="absolute bg-white_A700 h-[22px] outline outline-[2px] outline-black_900 right-[18%] top-[0] w-[22px]"></div>
              <Sidebar className="!sticky !w-[22px] bg-white_A700 flex h-screen md:hidden justify-start my-auto outline outline-[2px] outline-black_900 overflow-auto top-[0]">
                <div className="bg-white_A700 h-[22px] outline outline-[2px] outline-black_900 w-[22px]"></div>
                <div className="bg-white_A700 h-[22px] mt-[133px] outline outline-[2px] outline-black_900 w-[22px]"></div>
              </Sidebar>
            </div>
          </div>
          <Img
            src="images/img_vector.png"
            className="absolute h-[720px] inset-y-[0] left-[0] my-auto object-cover"
            alt="vector"
          />
          <Img
            src="images/img_dashboard.svg"
            className="absolute h-[90px] right-[23%] top-[13%] w-[90px]"
            alt="dashboard"
          />
        </div>
        <ThumbnailCursorlabels
          className="h-[62px] md:mt-0 mt-[457px] pb-[7.5px] pt-2.5 sm:px-5 px-[25px] relative w-[136px] sm:w-full"
          location="images/img_location_red_a100.svg"
        />
      </div>
    </>
  );
};

export default PracticedesignsPage;
