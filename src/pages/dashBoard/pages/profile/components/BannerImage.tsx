import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const style = {
  bgImage: `relative shadow-2xl h-[30vh] md:h-[250px] w-full   bg-[url('https://www.thehouse48.com/wp-content/uploads/2021/12/chuttersnap-603079-unsplash-e1546425079773.jpg')]`,
  thumbnailUrl: `shadow-2xl h-[150px] w-[150px] bg-red-500 rounded-full absolute -bottom-[75px] left-10 border-2`,
  thumbnailImage: `h-[150px] w-[150px] bg-red-500 rounded-full`,
};
let url = `https://images.unsplash.com/photo-1559705421-4ae9bf6fabb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dGh1bWJuYWlsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60`;
const BannerImage = () => {
  return (
    <>
      <div className={style.bgImage}>
        <div className={style.thumbnailUrl}>
          <LazyLoadImage className={style.thumbnailImage} src={url} />
        </div>
      </div>
      <div className=" mb-28"></div>
    </>
  );
};

export default BannerImage;
