import React from "react";

import { Button, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <Text
          className="font-newsreader mb-[42px] sm:ml-[0] ml-[95px] sm:mt-0 mt-[37px] text-light_green_900 tracking-[-0.32px]"
          as="h5"
          variant="h5"
        >
          World Peas
        </Text>
        <Text
          className="font-inter font-normal mb-11 sm:ml-[0] ml-[497px] sm:mt-0 mt-[47px] text-black_900 text-center"
          variant="body1"
        >
          Shop
        </Text>
        <Text
          className="font-inter font-normal ml-12 sm:ml-[0] sm:mt-0 my-[45px] text-black_900 text-center"
          variant="body1"
        >
          Newstand
        </Text>
        <Text
          className="font-inter font-normal ml-12 sm:ml-[0] sm:mt-0 my-[45px] text-black_900 text-center"
          variant="body1"
        >
          Who we are
        </Text>
        <Text
          className="font-inter font-normal mb-11 ml-12 sm:ml-[0] sm:mt-0 mt-[47px] text-black_900 text-center"
          variant="body1"
        >
          My profile
        </Text>
        <Button
          className="cursor-pointer font-inter font-semibold min-w-[126px] ml-12 sm:ml-[0] mr-24 sm:mt-0 my-8 text-base text-center text-white_A700"
          shape="RoundedBorder4"
          size="md"
          variant="FillLightgreen900"
        >
          Basket (3)
        </Button>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
