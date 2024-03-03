import React, { FC } from "react";
import {
  formatToCurrency,
  numberWithCommas,
} from "../../../utils/formateNumbers";
import { MdLocationPin } from "react-icons/md";
import { FaBath, FaBed } from "react-icons/fa";
import { HiSquaresPlus } from "react-icons/hi2";

interface Props {
  title?: string;
  price?: number;
  priceSymbol?: string;
  location?: string;
  bed?: number;
  bath?: number;
  squareFootage?: string;
  squareSymbol?: string;
  listingType?: string;
}

const style = {
  header: ` flex items-center  w-full mb-5`,
  title: `ml-5 capitalize font-[600] text-[1.75rem]`,
  details: ` lg:items-center  justify-between  flex flex-col md:flex-row flex-wrap capitalize`,
  description: `py-4 lg:w-[23%]  font-[400] text-[#0D304A] text-lg lg:text-base mr-[4rem]`,
  span: `capitalize`,
  location: `font-[400] text-gray-500  flex items-center hidden md:flex`,
  bath: `text-sm  flex items-center`,
  sub: `flex  gap-[24px] items-center mt-7`,
  bed: `text-sm   flex items-center`,
};
const Content: FC<Props> = ({
  title,
  listingType,
  price,
  priceSymbol,
  squareSymbol,
  squareFootage,
  location,
  bath,
  bed,
}) => {
  return (
    <>
      <header className={style.header}>
        <div className="hr"></div>
        <h1 className={style.title}>basic details</h1>
      </header>
      <div className="max-w-screen-xl mx-auto px-4 text-[#111]">
        <div className="flex justify-between items-center">
          <h1 className=" text-[20px] font-medium capitalize">{title}</h1>
          <p className=" capitalize bg-[#0D304A]  rounded-[10px] border w-fit px-2 py-1 text-white">
            for {listingType}
          </p>
        </div>
        <div>
          <div className={style.location}>
            <MdLocationPin
              className=""
              size={15}
              style={{ marginRight: "5px" }}
            />
            <p className="my-2 capitalize">{location}</p>
          </div>
          <div className="rounded-xl border  border-gray-300 w-fit py-2 px-5 ">
            <p className="text-[24px] font-bold">
              $ {formatToCurrency(price!)}
            </p>
            <p className="text-[14px] capitalize">online / cash payment</p>
          </div>
          <div className={style.sub}>
            <p className={style.bed}>
              <span className={style.span}>
                <FaBed size={15} style={{ marginRight: "8px" }} />
              </span>
              {bed} Bed
            </p>
            <p className={style.bath}>
              <span className={style.span}>
                <FaBath size={15} style={{ marginRight: "8px" }} />
              </span>
              {bath} Bath
            </p>
            <p className={style.bath}>
              <span className={style.span}>
                <HiSquaresPlus size={15} style={{ marginRight: "8px" }} />
              </span>
              <p className="mr-[8px]"> {numberWithCommas(squareFootage)}</p>{" "}
              {squareSymbol === "m2" ? (
                <p>
                  m<sup>2</sup>
                </p>
              ) : (
                squareSymbol
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
