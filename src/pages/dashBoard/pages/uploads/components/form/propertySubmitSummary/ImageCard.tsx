import Zoom from "react-img-zoom";
import "react-medium-image-zoom/dist/styles.css";
import "./ImageCard.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const images = [
  {
    _id: 1,
    url: "https://res.cloudinary.com/dwtx0sgd6/image/upload/v1677507238/reactUploadProperties/fdgfdggfbundefined-1677507106589/wfxiycqjm2tw0qaudauk.jpg",
  },
  {
    _id: 2,
    url: "https://res.cloudinary.com/dwtx0sgd6/image/upload/v1677507238/reactUploadProperties/fdgfdggfbundefined-1677507106589/pjtwaxbmuidcbykucga3.jpg",
  },
  {
    _id: 3,
    url: "https://res.cloudinary.com/dwtx0sgd6/image/upload/v1677507238/reactUploadProperties/fdgfdggfbundefined-1677507106589/woibipafxkt0k39axngb.jpg",
  },
];
const Image = ({ propertyImages }: any) => {
  const style = {
    Container: `w-[100%] m-auto `,
    image: `w-full h-full object-cover  rounded flex`,
  };
  const displayImages = images.map((image: any) => (
    <div key={image._id} className="PropertyimagesDetailsItem">
      {/* <LazyLoadImage alt={image.url} src={image.url} classNamyarn e={style.image} /> */}
    </div>
  ));
  return (
    <div className={style.Container}>
      <div className="PropertyimagesDetailsContainer">{displayImages}</div>
    </div>
  );
};

export default Image;

{
  /* <LazyLoadImage
alt={image.url}
src={image.secure_url}
className={style.image}
/> */
}
