import React from "react";
import { FaBookmark } from "react-icons/fa";

import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  TwitterShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "react-share";
const PropertySocial = () => {
  const shareUrl = `https://fortuneestate.netlify.app/property/63fcb2bbff431b01b1b01e1b`;
  return (
    <div className="flex items-center justify-center flex-col">
      <div className=" mb-4 border px-6 flex items-center justify-between space-x-6 py-3 rounded-lg bg-[#0D304A] text-white">
        <FaBookmark color="" />
        <p className=" capitalize font-medium text-md">
          bookmark this property
        </p>
      </div>
      <div>
        <h1 className=" capitalize font-bold text-xl">share this property</h1>
        <div className=" flex space-x-4 mt-5">
          <FacebookShareButton url={shareUrl} hashtag={"#fortuneEstate..."}>
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
          <TwitterShareButton url={shareUrl}>
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
          <LinkedinShareButton url={shareUrl}>
            <LinkedinIcon size={32} round={true} />
          </LinkedinShareButton>
          <WhatsappShareButton url={shareUrl}>
            <WhatsappIcon size={32} round={true} />
          </WhatsappShareButton>
        </div>
      </div>
    </div>
  );
};

export default PropertySocial;
