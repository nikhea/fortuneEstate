import { FC } from "react";
import "./hr.css";
import PropertiesCard from "../../../components/card/PropertyCard";
import parse from 'html-react-parser';
interface Props {
  description: string;
}
const additionalDetails: FC<Props> = ({ description }) => {
  const style = {
    header: ` flex items-center  w-full mb-5`,
    title: `ml-5 capitalize font-[600] text-[1.75rem]`,
    details: ` items-center  justify-betwee  flex flex-wrap `,
    description: `py-4  text-[#0D304A] text-[1.1rem] mr-8 font-light leading-[2rem] tracking-wide text-justify`,
    span: `capitalize`,
  };

  return (
    <PropertiesCard width={100} height={100}>
      <div>
        <header className={style.header}>
          <div className="hr"></div>
          <h1 className={style.title}>description</h1>
        </header>
        <div className={style.description}>{parse(description)}</div>
      </div>
    </PropertiesCard>
  );
};

export default additionalDetails;

// const description = `Saramanda is an elegant, five bedroom villa set on the exclusive Sandy lane Estate, with its beautifully landscaped grounds, this property gives you the opportunity to enjoy a taste of Caribbean living with the freedom of a home away from home.

// Designed around a central, airy atrium and seamlessly Saramanda blends indoor and outdoor living, with plenty of space to simply relax and unwind; all of the living and dining rooms open out to the pool and garden. The large indoor living room features oversized comfortable sofas and French doors that open out on to a covered terrace with outdoor seating and an informal dining area. The laid-back media room, adjacent to the living room, features wide screen HDTV, cable and DVD and also opens out to the pool deck.

// Inside, the elegant dining room features a large coral stone table where everyone can gather for meals and enjoy quality time together.

// Contact our sales team today at info@realtorslimited.com for more information.

// 3D walkthrough of the villa -

// Amenities:
// 5 Minutes To Holetown
// A/C - Bedrooms Only
// Beach Club Access
// Beach within 1KM
// Breezy
// Cable/Satellite Channels
// Ceiling Fan - Select Rooms
// Centrally Located
// Dishwasher
// Full Enclosed Property
// Furnished
// Golf Course On-Site
// Laundry Dryer
// Onsite Parking
// Pool
// Private Development
// Television
// Upgraded Kitchen
// Walking Distance To Ocean
// Washing Machine
// Wi-Fi Internet
// `;
