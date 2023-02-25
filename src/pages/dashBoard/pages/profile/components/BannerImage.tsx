import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Button from "../../../../../components/UI/FormElement/Button";
import { TiCamera } from "react-icons/ti";
import { useAuth } from "../../../../../lib/auth";
const style = {
  imgContainer: `h-full  rounded-tl-xl rounded-bl-xl relative`,
  thumbnailImg: ``,
  profileImg: `shadow-xl h-[100px] w-[100px] bg-red-500 rounded-full absolute bottom-[130p] top-[350px] right-[290px]  lg:top-10  lg:-right-10 border-2 object-cover`,
  thumbnailImage: `h-full w-full bg-red-500 rounded-full object-cover `,
  btnContainer: `absolute left-3 top-[20px] lg:top-[300px]`,
  btn: `bg-white p-3 rounded-md flex items-center justify-between capitalize`,
};
// let urlImg = `https://images.unsplash.com/photo-1559705421-4ae9bf6fabb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dGh1bWJuYWlsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60`;
const BannerImage = ({ user }: any) => {
  let urlImg = user?.profile.profileImage.url;
  return (
    <>
      <div
        className={style.imgContainer}
        style={{
          backgroundImage: `url(${urlImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className={style.profileImg}>
          <LazyLoadImage className={style.thumbnailImage} src={urlImg} />
        </div>
        <div className={style.btnContainer}>
          {user ? (
            <button className={style.btn}>
              <TiCamera
                color=" #3b5998"
                size={25}
                style={{ marginRight: "11px" }}
              />
              change photo
            </button>
          ) : (
            <button className={style.btn}>
              <TiCamera
                color=" #3b5998"
                size={25}
                style={{ marginRight: "11px" }}
              />
              updata photo
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default BannerImage;

// import React from "react";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";
// import profile from '../../../../profile/profile';
// const style = {
//   bgImage: `relative shadow-2xl h-[30vh] md:h-[250px] w-full   bg-[url('https://www.thehouse48.com/wp-content/uploads/2021/12/chuttersnap-603079-unsplash-e1546425079773.jpg')]`,
//   thumbnailUrl: `shadow-2xl h-[150px] w-[150px] bg-red-500 rounded-full absolute -bottom-[75px] left-10 border-2`,
//   thumbnailImage: `h-[150px] w-[150px] bg-red-500 rounded-full`,
// };
// let url = `https://images.unsplash.com/photo-1559705421-4ae9bf6fabb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dGh1bWJuYWlsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60`;
// const BannerImage = () => {
//   return (
//     <>
//       <div className={style.bgImage}>
//         <div className={style.thumbnailUrl}>
//           <LazyLoadImage className={style.thumbnailImage} src={url} />
//         </div>
//       </div>
//       <div className=" mb-28"></div>
//     </>
//   );
// };

// export default BannerImage;
