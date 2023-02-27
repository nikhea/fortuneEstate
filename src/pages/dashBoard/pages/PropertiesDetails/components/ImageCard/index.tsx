import Zoom from "react-img-zoom";
import "react-medium-image-zoom/dist/styles.css";
import "./PropertyimagesDetails.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const images = [
  {
    _id: 1,
    url: "http://res.cloudinary.com/dwtx0sgd6/image/upload/v1671983131/propertyUploadImages/ravz7wxfocabke4vfquh.jpg",
  },
  {
    _id: 2,
    url: "https://www.thehouse48.com/wp-content/uploads/WPL/53830/img_Property-4ddc7151039d0f37226399adc8981124-126373025-1024x700.jpg",
  },
  {
    _id: 3,
    url: "https://pic.le-cdn.com/showcase/1280x720/596fd77d783bbe055593b1058ae6882b/128239740.jpg",
  },
];
const Image = ({ propertyImages }: any) => {
  const style = {
    Container: `w-[100%] m-auto `,
    image: `w-full h-full object-cover  rounded flex`,
  };
  const displayImages = propertyImages.map((image: any) => (
    <div key={image._id} className="PropertyimagesDetailsItem">
      <LazyLoadImage
        alt={image.url}
        src={image.secure_url}
        className={style.image}
      />
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
        effect="blur"
        src={image.url}
        className={style.image}
      /> */
}
