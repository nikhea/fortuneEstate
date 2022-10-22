import React from "react";

const style = {
  container: `w-[95%] m-auto flex flex-col justify-center items-center`,
  Sociallogo: ``,
  textContainer: `text-center text-[#212121] leading-[1.5] font-extralight  text-[15px] my-[20px]`,
  language: `leading-[2] `,
  propertyLocations: `leading-[1.5]`,
  productListing: `py-[1em] md:py-0 `,
};
const index = () => {
  return (
    <div className={style.container}>
      <div className={style.Sociallogo}>
        <img src="https://www.thehouse48.com/wp-content/uploads/2021/06/Google-Play-and-Apple-App-Store-Logos-Two-Up-300x47.png" />
      </div>
      <div className={style.textContainer}>
        <p className={style.language}>
          TheHouse48.com Site: International - Español - Português - Deutsch -
          Français - Italiano - हिंदी - Pусский - 한국어 - 日本語 - اللغة
          العربية - ภาษาไทย - Türk - Nederlands - tiếng Việt - Indonesian -
         <br/> עברית.
        </p>
        <p className={style.propertyLocations}>
          Property Sales | Property Auction | Premium Properties: United States
          | United Kingdom| Spain | Nigeria South Africa | Ghana | Argentina |
          London | Paris | Lagos | Capetown | The Bahamas | Venice | Amsterdam |
          Accra | Johannesburg | Dublin | Vienna | Tokyo | Barcelona | Rome |
          New York
        </p>
        <p className={style.productListing}>
          Product Listing Policy - Intellectual Property Protection - Privacy
          Policy - Terms of Use - User Information - Legal Enquiry Guide
        </p>
      </div>
    </div>
  );
};

export default index;
