import React from "react";

import { Button, Img, Text } from "components";
import Header from "components/Header";

const HomepagePage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-newsreader items-center justify-start mx-auto pb-[30px] w-full">
        <div className="flex flex-col items-end justify-start w-full">
          <Header className="flex flex-row items-center justify-center md:px-5 w-full" />
          <Text
            className="leading-[120.00%] mt-[167px] text-black_900 text-center tracking-[-1.28px] w-[71%] sm:w-full"
            as="h3"
            variant="h3"
          >
            <span className="md:text-5xl text-black_900 text-[64px] font-newsreader font-normal">
              We’re{" "}
            </span>
            <span className="md:text-5xl text-black_900 text-[64px] font-newsreader font-normal italic">
              farmers
            </span>
            <span className="md:text-5xl text-black_900 text-[64px] font-newsreader font-normal">
              ,{" "}
            </span>
            <span className="md:text-5xl text-black_900 text-[64px] font-newsreader font-normal italic">
              purveyors
            </span>
            <span className="md:text-5xl text-black_900 text-[64px] font-newsreader font-normal">
              , and{" "}
            </span>
            <span className="md:text-5xl text-black_900 text-[64px] font-newsreader font-normal italic">
              eaters
            </span>
            <span className="md:text-5xl text-black_900 text-[64px] font-newsreader font-normal">
              {" "}
              of organically grown food.
            </span>
          </Text>
          <div className="flex flex-col font-inter md:gap-10 gap-[156px] items-start justify-start mt-7 md:px-5 w-[94%] md:w-full">
            <div className="md:h-[693px] h-[933px] relative w-full">
              <Img
                src="images/img_jonathankemper.png"
                className="absolute bottom-[0] h-[693px] left-[0] object-cover w-[38%]"
                alt="jonathankemper"
              />
              <div className="absolute bottom-[7%] flex flex-col gap-4 items-start justify-start right-[0] w-[59%]">
                <Img
                  src="images/img_stocksytxp226f.png"
                  className="h-[480px] md:h-auto object-cover w-full"
                  alt="stocksytxp226f"
                />
                <Text
                  className="font-normal leading-[160.00%] text-black_900 tracking-[-0.14px] w-[95%] sm:w-full"
                  variant="body2"
                >
                  <span className="text-black_900 text-sm font-inter text-left font-medium">
                    Central California
                  </span>
                  <span className="text-black_900 text-sm font-inter text-left font-light">
                    {" "}
                    — The person who grew these was located in Central
                    California and, er, hopefully very well-compensated.
                  </span>
                </Text>
              </div>
              <div className="absolute border border-dashed border-deep_purple_A200_01 flex flex-col gap-5 items-center justify-start left-[37%] p-5 rounded-[5px] top-[0] w-[23%]">
                <Button
                  className="cursor-pointer font-semibold min-w-[263px] text-center text-white_A700 text-xl"
                  shape="RoundedBorder8"
                  size="lg"
                  variant="FillLightgreen900"
                >
                  Browse our shop
                </Button>
                <Button
                  className="cursor-pointer font-semibold min-w-[263px] text-center text-white_A700 text-xl"
                  shape="RoundedBorder8"
                  size="lg"
                  variant="FillLightgreen900"
                >
                  Browse our shop
                </Button>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 gap-[77px] items-start justify-start w-[78%] md:w-full">
              <Text
                className="font-semibold md:mt-0 mt-[7px] text-black_900 tracking-[0.56px] uppercase"
                variant="body2"
              >
                WHAT WE BELIEVE
              </Text>
              <Text
                className="font-normal leading-[160.00%] text-black_900"
                as="h6"
                variant="h6"
              >
                <>
                  We believe in produce. Tasty produce. Produce like:
                  <br />
                  Apples. Oranges. Limes. Lemons. Guavas. Carrots. Cucumbers.
                  Jicamas. Cauliflowers. Brussels sprouts. Shallots. Japanese
                  eggplants. Asparagus. Artichokes—Jerusalem artichokes, too.
                  Radishes. Broccoli. Baby broccoli. Broccolini. Bok choy.
                  Scallions. Ginger. Cherries. Raspberries. Cilantro. Parsley.
                  Dill. <br />
                  What are we forgetting?
                  <br />
                  Oh! Onions. Yams. Avocados. Lettuce. Arugula (to some,
                  “rocket”). Persian cucumbers, in addition to aforementioned
                  “normal” cucumbers. Artichokes. Zucchinis. Pumpkins. Squash
                  (what some cultures call pumpkins). Sweet potatoes and
                  potato-potatoes. Jackfruit. Monk fruit. Fruit of the Loom.
                  Fruits of our labor (this website). Sorrel. Pineapple. Mango.
                  Gooseberries. Blackberries. Tomatoes. Heirloom tomatoes.
                  Beets. Chives. Corn. Endive. Escarole, which, we swear, we’re
                  vendors of organic produce, but if you asked us to describe
                  what escaroles are...
                </>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomepagePage;
