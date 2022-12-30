import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const style = {
  container: `items-center text-center justify-center grid gap-4 grid-cols-1 md:grid-cols-2`,
  title: ` uppercase text-5xl text-[#7f7f7f] font-normal tracking-[1.1px] text-center font-[900]`,
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
      <Faq data={data} styles={styles} config={config} />;
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
      title: "Lorem ipsum dolor sit amet,",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
              Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
              Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
              Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
    {
      title: "Lorem ipsum dolor sit amet,",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
              Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
              Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
              Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
  ],
};
