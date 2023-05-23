import React from "react";

import { Img } from "components";

const ThumbnailCursorlabels = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-deep_purple_A200 border-4 border-black_900 border-solid h-4 ml-auto mt-auto pb-[7.5px] pt-2.5 sm:px-5 px-[25px] w-3/4"></div>
        <Img
          src={props?.location}
          className="absolute h-[54px] left-[40%] top-[0] w-[46px]"
          alt="location"
        />
      </div>
    </>
  );
};

ThumbnailCursorlabels.defaultProps = { location: "images/img_location.svg" };

export default ThumbnailCursorlabels;
