import React, { FC } from "react";
import { formatToCurrency } from "../../../../utils/formateNumbers";

interface INewListingCard {
  ID: string;
  title: string | undefined;
  description: string;
  price: number | undefined;
  priceSymbol: string;
  listingType: string;
  propertyImages: any[];
}
const style = {
  container: `bg-gray-100  shadow-md flex items-center justify-center py-6 px-5 rounded-lg`,
  cards: ` my-5`,
  textContainer: `flex flex-col justify-between  bottom-2  left-3 absolute`,
  title: `text-white text-[1rem] font-semibold capitalize`,
  textTitlePrice: `mb-3 text-[13px] uppercase `,
  imageContainer: `w-[300px] lg:w-[500px]  h-full rounded-md relative`,
  image: `h-full w-full object-cover rounded-lg`,
  priceContainer: `w-full rounded-[10px] bg-[#0D304A] uppercase items-center text-center justify-between shadow-xl text-white py-1 px-5 my-3 `,
  price: `text-[1rem] text-bold text-center`,
  listingType: `capitalize rounded-full   text-white absolute py-1 px-3 text-center z-[90] top-2 left-3 transistion ease-out duration-1000`,
};
const NewListingCard: FC<INewListingCard> = ({
  ID,
  title,
  description,
  price,
  priceSymbol,
  propertyImages,
  listingType,
}) => {
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <img alt={title} src={propertyImages[0].url} className={style.image} />
        <p
          className={`${style.listingType} ${
            listingType === "sale" ? "bg-purple-500" : "bg-red-500"
          }`}
        >
          for {listingType}
        </p>
        <div className={style.textContainer}>
          <h2 className={style.title}>{title}</h2>
          <div className={style.priceContainer}>
            <h2 className={style.price}>
              {priceSymbol} {formatToCurrency(price!)}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
//

export default NewListingCard;
