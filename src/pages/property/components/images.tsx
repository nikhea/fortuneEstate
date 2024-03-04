import "react-medium-image-zoom/dist/styles.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { TiCamera } from "react-icons/ti";
// const images = [
//   {
//     _id: 1,
//     url: "https://res.cloudinary.com/dwtx0sgd6/image/upload/v1677508721/reactUploadProperties/8%20bedroom%20luxury%20villasea-1677508668876/yvva2pz9sn5db3ue3sz7.jpg",
//   },
//   {
//     _id: 2,
//     url: "https://res.cloudinary.com/dwtx0sgd6/image/upload/v1677508721/reactUploadProperties/8%20bedroom%20luxury%20villasea-1677508668876/yvva2pz9sn5db3ue3sz7.jpg",
//   },
//   {
//     _id: 3,
//     url: "https://res.cloudinary.com/dwtx0sgd6/image/upload/v1677508721/reactUploadProperties/8%20bedroom%20luxury%20villasea-1677508668876/yvva2pz9sn5db3ue3sz7.jpg",
//   },
//   {
//     _id: 4,
//     url: "https://res.cloudinary.com/dwtx0sgd6/image/upload/v1677508721/reactUploadProperties/8%20bedroom%20luxury%20villasea-1677508668876/yvva2pz9sn5db3ue3sz7.jpg",
//   },
// ];
const Images = ({ propertyImages }: any) => {
  const style = {
    Container: `w-full rounded-2xl `,
    image: `w-full object-cover rounded-2xl`,
    btn: `bg-white px-3 py-2 absolute bottom-10 right-10 rounded-md flex items-center  capitalize`,
  };
  const displayImages = propertyImages.slice(1, 3).map((image: any) => (
    <div key={image._id} className=" w-full">
      <LazyLoadImage alt={image.url} src={image.url} className={style.image} />
    </div>
  ));
  return (
    <div className={style.Container}>
      <div className="flex flex-col gap-10 rounded-2xl h-[50%] relative">
        {displayImages}
        <button className={style.btn}>
          <TiCamera
            color=" #3b5998"
            size={25}
            style={{ marginRight: "11px" }}
          />
          2 more
        </button>
      </div>
    </div>
  );
};

export default Images;
