import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const style = {
  container: `items-center text-center justify-center grid gap-4 grid-cols-1 md:grid-cols-2`,
  title: ` uppercase text-5xl text-[#7f7f7f] font-normal tracking-[1.1px] text-center font-[900] my-5`,
  textContainer: `relative`,
  tage: `uppercase text-3xl text-[#7f7f7f]  my-2`,
  discoverTitle: `text-[#7f7f7f] capitalize font-bold text-5xl mb-[1em]`,
};
const index = () => {
  return (
    <div className={style.container}>
      <div className={style.textContainer}>
        {/* <div className={style.tage}>faq</div> */}
        <h1 className={style.title}>freqently asked questions.</h1>
      </div>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
};

export default index;

const styles = {
  // bgColor: 'white',
  titleTextColor: "#0D304A",
  rowTitleColor: "#0D304A",
  // rowContentColor: 'grey',
  arrowColor: "#0D304A",
};
const config = {
  animate: true,
  // arrowIcon: "V",
  //   tabFocus: true
};

const data = {
  title: "FAQ (How it works)",
  rows: [
    {
      title: "How do I get started with FortuneEstate?,",
      content: `Getting started with FortuneEstate is easy! Simply download the app from the App Store or Google Play, create an account, and start browsing through our extensive property listings. You can also connect with our support team through live chat, phone call, or message for personalized assistance.`,
    },
    {
      title: "How frequently are property listings updated?",
      content:
        "We strive to keep our property listings up-to-date at all times. Our team works diligently to ensure that new properties are added regularly, and existing listings reflect accurate availability and pricing information.",
    },
    {
      title: "Is my personal information safe with FortuneEstate?",
      content: `Yes, your privacy and data security are of utmost importance to us. FortuneEstate follows strict privacy practices and uses encryption to protect your personal information. You can review our detailed privacy policy in the app for more information. `,
    },
    {
      title: "What if I have technical issues with the app?",
      content: `If you encounter any technical issues while using FortuneEstate, please reach out to our support team immediately. We will work diligently to resolve any problems and ensure a seamless user experience. `,
    },
  ],
};
