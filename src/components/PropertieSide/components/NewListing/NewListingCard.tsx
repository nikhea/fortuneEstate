import { FC } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../../../routes/routes";
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
  textContainer: `flex flex-col justify-between  bottom-2  left-3 absolute z-[90]`,
  title: `text-white text-[1rem] font-semibold capitalize`,
  textTitlePrice: `mb-3 text-[13px] uppercase `,
  imageContainer: `w-[300px] lg:w-[500px]  h-full rounded-md relative overflow-hidden`,
  image: `h-full w-full object-cover rounded-lg`,
  priceContainer: `w-full rounded-[10px] bg-[#0D304A] uppercase items-center text-center justify-between shadow-xl text-white py-1 px-5 my-3 `,
  price: `text-[1rem] text-bold text-center`,
  listingType: `capitalize rounded-md   text-white absolute py-1 px-3 text-center z-[90] top-2 left-3 transistion ease-out duration-1000`,
  overlay: `h-full overflow-hidden rounded-ld w-full top-0 left-0 right-0 top-0 bottom-0 absolute bg-black opacity-60 bg-fixed `,
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
          <Link to={`${routes.property}/${ID}`}>
            <h2 className={style.title}>{title}</h2>
          </Link>
          <div className={style.priceContainer}>
            <h2 className={style.price}>
              {priceSymbol} {formatToCurrency(price!)}
            </h2>
          </div>
        </div>
        <div className={style.overlay}></div>
      </div>
    </div>
  );
};
//

export default NewListingCard;
