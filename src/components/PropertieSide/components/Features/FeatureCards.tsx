import React, { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { routes } from "../../../../routes/routes";
import { formatToCurrency } from "../../../../utils/formateNumbers";

interface IFeatureCard {
  ID: string;
  title: string | undefined;
  description: string;
  price: number | undefined;
  priceSymbol: string;
  propertyImages: any[];
}
const style = {
  container: `flex p-1 items-center justify-center  gap-x-3`,
  textContainer: `flex flex-col justify-between `,
  textTitlePrice: `mt-2 text-[12px] lg:text-[12px] uppercase `,
  imageContainer: `w-[300px] lg:max-w-[100px]   h-[100px] rounded-md flex`,
  image: `h-full w-full object-cover rounded-md flex`,
};
const FeatureCards: FC<IFeatureCard> = ({
  ID,
  title,
  description,
  price,
  priceSymbol,
  propertyImages,
}) => {
  const content =
    description.length >= 20
      ? `${description.substring(0, 90)}...`
      : description;
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <LazyLoadImage
          alt={title}
          src={propertyImages[0].secure_url}
          className={style.image}
        />
      </div>
      <div className={style.textContainer}>
        <div className={style.textTitlePrice}>
          <Link to={`${routes.property}/${ID}`}>
            <h1>{title}</h1>
          </Link>
          <h1 className=" my-1">
            {priceSymbol}
            <span className="text-blue-500 ml-1">
              {formatToCurrency(price!)}
            </span>
          </h1>
        </div>
        <p
          className="text-[12px] text-gray-500 mb-1"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};

export default FeatureCards;
