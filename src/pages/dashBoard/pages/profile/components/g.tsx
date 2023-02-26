import { useEffect, useRef, useState, FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { TiCamera } from "react-icons/ti";
import { queryKeys } from "../../../../../utils/queryKey";
import { useMutation, useQueryClient } from "react-query";
import { addProfileImage } from "../../../../../services/api/shared";
interface Image {
  asset_id: any;
  secure_url: any;
  thumbnail_url: any;
  public_id: any;
}
const style = {
  imgContainer: `h-full  rounded-tl-xl rounded-bl-xl relative`,
  thumbnailImg: ``,
  profileImg: `shadow-xl h-[100px] w-[100px] bg-red-500 rounded-full absolute bottom-[130p] top-[290px] right-[290px] md:right-[500px]   lg:top-10  lg:-right-10 border-2 object-cover`,
  thumbnailImage: `h-full w-full bg-red-500 rounded-full object-cover `,
  btnContainer: `absolute left-3 top-[20px] lg:top-[300px]`,
  btn: `bg-white p-3 rounded-md flex items-center justify-between capitalize`,
};
const BannerImage = ({ user }: any) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  let urlImg = user?.profile?.profileImage?.secure_url;
  let thumbnail = user?.profile?.profileImage?.thumbnail_url;

  const queryClient = useQueryClient();
  const [newImageData, setNewImageData] = useState<Image>();
  const {
    mutateAsync,
    status,
    data: createPropertiesData,
  } = useMutation(addProfileImage, {
    onMutate: () => {},
    onSettled: () => {
      //invalidate cached properties query and refresh
      // @ts-ignore
      queryClient.invalidateQueries();
      queryClient.invalidateQueries("auth-user");
      // [queryKeys.properties, countryName],
    },
    onError: (_error, _hero, context) => {
      // queryClient.setQueryData("", context.previouse);
    },
  });
  useEffect(() => {
    //@ts-ignore
    cloudinaryRef.current = window?.cloudinary; //@ts-ignore
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: import.meta.env.VITE_REACT_APP_CLOUDINARY_CLOUD_NAME,
        uploadPreset: import.meta.env.VITE_REACT_APP_CLOUDINARY_UPLOAD_PRESET,
        folder: `user/profile/${user?.firstname} ${
          user?.lastname
        }-${Date.now()}`,
        clientAllowedFormats: ["webp", "png", "jpeg"],
        showPoweredBy: false,
        maxFileSize: 1500000,
        multiple: false,
        maxImageFileSize: 1500000,
      },
      function (error: any, result: any) {
        if (!error && result && result.event === "success") {
          // console.log(result.data);
          return "please add an image";
        } else {
          console.log(typeof result?.data?.info?.files[0]?.uploadInfo);
          if (
            result?.data?.info?.files[0]?.uploadInfo !== null ||
            result?.data?.info?.files[0]?.uploadInfo !== undefined
          ) {
            const { asset_id, secure_url, thumbnail_url, public_id } =
              result?.data?.info?.files[0]?.uploadInfo;
            const data = {
              asset_id,
              secure_url,
              thumbnail_url,
              public_id,
            };
            setNewImageData(data);
            // if (newImageData) {
            const submitImage = async () => {
              await mutateAsync(data);
            };
            submitImage();
            // }
          }
        }
      }
    );
  }, []);
  const openWidget = () => {
    //@ts-ignore
    widgetRef.current.open();
  };

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
          <LazyLoadImage className={style.thumbnailImage} src={thumbnail} />
        </div>
        <div className={style.btnContainer}>
          {user ? (
            <button className={style.btn} onClick={openWidget}>
              <TiCamera
                color=" #3b5998"
                size={25}
                style={{ marginRight: "11px" }}
              />
              change photo
            </button>
          ) : (
            <button className={style.btn} onClick={openWidget}>
              <TiCamera
                color=" #3b5998"
                size={25}
                style={{ marginRight: "11px" }}
              />
              add photo
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

// useEffect(() => {
//   const submitImage = async () => {
//     await mutateAsync(newImageData);
//   };
//   submitImage();
// }, [newImageData]);
// if (newImageData) {
//   const submitImage = async () => {
//     await mutateAsync(newImageData);
//   };
//   submitImage();
// }
