import "react-medium-image-zoom/dist/styles.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// const image = {
//   _id: 1,
//   url: "https://res.cloudinary.com/dwtx0sgd6/image/upload/v1677508721/reactUploadProperties/8%20bedroom%20luxury%20villasea-1677508668876/yvva2pz9sn5db3ue3sz7.jpg",
// };

const ImageCover = ({ image, handleOpen }: any) => {
  const style = {
    Container: `w-full h-full rounded-2xl cursor-pointer`,
    image: `w-full h-full object-cover  rounded-2xl flex`,
  };

  return (
    <div className={style.Container} onClick={handleOpen}>
      <LazyLoadImage alt={image.url} src={image.url} className={style.image} />
    </div>
  );
};

export default ImageCover;
{
  /* <LazyLoadImage
        alt={image.url}
        effect="blur"
        src={image.url}
        className={style.image}
      /> */
}
