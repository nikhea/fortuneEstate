import { LazyLoadImage } from "react-lazy-load-image-component";
import LightBox from "yet-another-react-lightbox";

import {
  Fullscreen,
  Download,
  Zoom,
  Thumbnails,
} from "yet-another-react-lightbox/plugins";

import "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

function generateSlides(originalArray: any) {
  return originalArray.map((item: any) => ({
    src: item.secure_url,
  }));
}

const imageGallery = ({ propertyImages, handleClose, open, index }: any) => {
  const slides = generateSlides(propertyImages);
  return (
    <>
      <LightBox
        plugins={[Fullscreen, Download, Zoom, Thumbnails]}
        open={open}
        slides={slides}
        close={handleClose}
        // index={index}
      />
    </>
  );
};

export default imageGallery;
