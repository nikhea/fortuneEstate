import React from "react";

const featuredListing = () => {
  const style = {
    newListing: `w-[90%] m-auto`,
    newListingTitle: `text-[1.5rem] uppercase z-1 p-0 text-[#0D304A] text-center  unset font-[500] m-10`,
  };
  return (
    <div className={style.newListing}>
      <h1 className={style.newListingTitle}>featured properties</h1>
      <h3 className="divider"></h3>
      <div>
        <div>cx</div>
      </div>
    </div>
  );
};

export default featuredListing;
