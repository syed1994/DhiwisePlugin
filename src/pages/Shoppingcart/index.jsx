import React from "react";

import { Img, Line, List, Text } from "components";
import Header from "components/Header";

const ShoppingcartPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-auto pb-[184px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header className="flex flex-row items-center justify-center md:px-5 w-full" />
          <div className="bg-white_A700 flex flex-col items-center justify-start pt-[54px] md:px-10 sm:px-5 px-[54px] w-full">
            <div className="flex flex-col gap-[30px] items-start justify-start max-w-[1248px] mx-auto w-full">
              <div className="flex flex-row gap-6 items-end justify-start w-[22%] md:w-full">
                <Text
                  className="font-newsreader text-black_900 tracking-[-1.28px]"
                  as="h3"
                  variant="h3"
                >
                  Basket
                </Text>
                <Text
                  className="font-inter font-light mb-[3px] mt-[35px] text-black_900"
                  as="h6"
                  variant="h6"
                >
                  3 items
                </Text>
              </div>
              <Line className="bg-gray_300 h-0.5 shadow-bs w-full" />
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-8 items-start justify-start max-w-[1248px] mt-10 mx-auto md:px-5 w-full">
            <List
              className="md:flex-1 flex-col gap-[31px] grid w-[66%] md:w-full"
              orientation="vertical"
            >
              <div className="bg-gray_50 border-2 border-gray_300 border-solid flex flex-col items-center justify-start my-0 rounded-[24px] w-full">
                <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-[98%] md:w-full">
                  <Img
                    src="images/img_edoneilavvdz.png"
                    className="h-[159px] md:h-auto object-cover w-40 sm:w-full"
                    alt="edoneilavvdz"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                      <Text
                        className="font-semibold text-black_900"
                        as="h6"
                        variant="h6"
                      >
                        Heirloom tomato
                      </Text>
                      <Text
                        className="font-semibold text-black_900 text-right"
                        as="h6"
                        variant="h6"
                      >
                        $5.99
                      </Text>
                    </div>
                    <Text
                      className="font-semibold mt-[5px] text-light_green_900"
                      as="h6"
                      variant="h6"
                    >
                      $5.99 / lb
                    </Text>
                    <div className="bg-white_A700 border-2 border-black_900_0f border-solid flex flex-row gap-[46px] items-center justify-start mt-[15px] p-1 rounded-[20px] w-[21%] md:w-full">
                      <Text
                        className="font-semibold ml-3 text-black_900"
                        variant="body1"
                      >
                        1 lb
                      </Text>
                      <Img
                        src="images/img_edit.svg"
                        className="h-8 w-8"
                        alt="edit"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray_50 border-2 border-gray_300 border-solid flex flex-col items-center justify-start my-0 rounded-[24px] w-full">
                <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-[98%] md:w-full">
                  <Img
                    src="images/img_noonbrewzicb4ekmakunsplash.png"
                    className="h-[159px] md:h-auto object-cover w-40 sm:w-full"
                    alt="noonbrewzicb4ek"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                      <Text
                        className="font-semibold text-black_900"
                        as="h6"
                        variant="h6"
                      >
                        Organic ginger
                      </Text>
                      <Text
                        className="font-semibold text-black_900 text-right"
                        as="h6"
                        variant="h6"
                      >
                        $6.50
                      </Text>
                    </div>
                    <Text
                      className="font-semibold mt-[3px] text-light_green_900"
                      as="h6"
                      variant="h6"
                    >
                      $12.99 / lb
                    </Text>
                    <div className="bg-white_A700 border-2 border-black_900_0f border-solid flex flex-row gap-7 items-center justify-start mt-[15px] p-1 rounded-[20px] w-[21%] md:w-full">
                      <Text
                        className="font-bold ml-3 text-black_900"
                        variant="body1"
                      >
                        0.5 lb
                      </Text>
                      <Img
                        src="images/img_edit.svg"
                        className="h-8 w-8"
                        alt="edit"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray_50 border-2 border-gray_300 border-solid flex flex-col items-center justify-start my-0 rounded-[24px] w-full">
                <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-[98%] md:w-full">
                  <Img
                    src="images/img_k80fkphulvmunsplash.png"
                    className="h-[159px] md:h-auto object-cover w-40 sm:w-full"
                    alt="k80fkphulvmunsp"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                      <Text
                        className="font-semibold text-black_900"
                        as="h6"
                        variant="h6"
                      >
                        Sweet onion
                      </Text>
                      <Text
                        className="font-semibold text-black_900 text-right"
                        as="h6"
                        variant="h6"
                      >
                        $14.95
                      </Text>
                    </div>
                    <Text
                      className="font-semibold mt-[5px] text-light_green_900"
                      as="h6"
                      variant="h6"
                    >
                      $2.99 / lb
                    </Text>
                    <div className="bg-white_A700 border-2 border-black_900_0f border-solid flex flex-row gap-[43px] items-center justify-start mt-[15px] p-1 rounded-[20px] w-[21%] md:w-full">
                      <Text
                        className="font-bold ml-3 text-black_900"
                        variant="body1"
                      >
                        5 lb
                      </Text>
                      <Img
                        src="images/img_edit.svg"
                        className="h-8 w-8"
                        alt="edit"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </List>
            <div className="bg-gray_50 border-2 border-gray_300 border-solid flex md:flex-1 flex-col items-center justify-end mb-[221px] p-6 sm:px-5 rounded-[24px] w-[32%] md:w-full">
              <div className="flex flex-col items-start justify-start mt-0.5 w-full">
                <Text
                  className="font-semibold text-black_900"
                  as="h6"
                  variant="h6"
                >
                  Order summary
                </Text>
                <div className="flex flex-row items-center justify-between mt-[31px] w-full">
                  <Text className="font-normal text-black_900" variant="body1">
                    Subtotal
                  </Text>
                  <Text
                    className="font-normal text-black_900 text-right"
                    variant="body1"
                  >
                    $27.44
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between mt-4 w-full">
                  <Text className="font-normal text-black_900" variant="body1">
                    Shipping
                  </Text>
                  <Text
                    className="font-normal text-black_900 text-right"
                    variant="body1"
                  >
                    $3.99
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between mt-[15px] w-full">
                  <Text className="font-normal text-black_900" variant="body1">
                    Tax
                  </Text>
                  <Text
                    className="font-normal text-black_900 text-right"
                    variant="body1"
                  >
                    $2.00
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between mt-[13px] w-full">
                  <Text
                    className="font-semibold mt-[3px] text-black_900"
                    variant="body1"
                  >
                    Total
                  </Text>
                  <Text
                    className="font-semibold mb-[3px] text-black_900 text-right"
                    variant="body1"
                  >
                    $33.43
                  </Text>
                </div>
                <div className="bg-light_green_900 flex flex-row items-center justify-between mt-8 p-2 rounded-lg w-full">
                  <Text
                    className="font-semibold ml-4 text-white_A700"
                    variant="body1"
                  >
                    Continue to payment
                  </Text>
                  <Img
                    src="images/img_arrowright.svg"
                    className="h-8 mr-2 w-8"
                    alt="arrowright"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingcartPage;
