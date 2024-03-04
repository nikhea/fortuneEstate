import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// If you want you can use SCSS instead of css
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgShare from "lightgallery/plugins/share";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import lgRotate from "lightgallery/plugins/rotate";
const imageGallery = ({ propertyImages }: any) => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  const displayImages = propertyImages.map((image: any) => (
    <a href={image.url} key={image._id} className="!flex w-full cursor-pointer">
      <img src={image.url} />
    </a>
  ));
  return (
    <div className="App">
      <LightGallery
        // className=""
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail]}
      >
        {displayImages}
      </LightGallery>
    </div>
  );
};

export default imageGallery;
{
  /* <a href="https://res.cloudinary.com/dwtx0sgd6/image/upload/v1677504791/reactUploadProperties/7%20room%20luxury%20Apartmentstreet-1677504599869/pgnqznhrr3hnnv4xmnml.jpg">
<img
  // alt="img1"
  src="https://res.cloudinary.com/dwtx0sgd6/image/upload/v1677504791/reactUploadProperties/7%20room%20luxury%20Apartmentstreet-1677504599869/pgnqznhrr3hnnv4xmnml.jpg"
/>
</a>
<a href="https://res.cloudinary.com/dwtx0sgd6/image/upload/v1677507238/reactUploadProperties/fdgfdggfbundefined-1677507106589/wfxiycqjm2tw0qaudauk.jpg">
<img
  // alt="img2"
  src="https://res.cloudinary.com/dwtx0sgd6/image/upload/v1677507238/reactUploadProperties/fdgfdggfbundefined-1677507106589/wfxiycqjm2tw0qaudauk.jpg"
/>
</a> */
}
