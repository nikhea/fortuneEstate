import React from "react";

const PropertySummary = () => {
  const getLocalStorage = () => {
    if (localStorage.getItem("data")) {
      let localStorageItem = JSON.parse(localStorage.getItem("data"));
    }
  };
  return <div>propertySummary</div>;
};

export default PropertySummary;
