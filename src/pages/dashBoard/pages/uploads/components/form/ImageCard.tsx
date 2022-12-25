import { FC } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { MdDelete } from "react-icons/md";
import { BiLinkExternal } from "react-icons/bi";
const style = {
  imgContainer: `flex h-full w-full  m-auto overflow-hidden`,
  image: `h-[150px] w-[150px] rounded-full flex`,
  items: `bg-[#E5E5E5] px-0 py-0 my-3 shadow-xl flex justify-between `,
  leftSection: `mr-10 mb-3 flex`,
  footerDelete: `cursor-pointer hover:text-red-500 `,
};
interface Props {
  images: any;
  removeImage: any;
}
const ImageCard: FC<Props> = ({ images, removeImage }) => {
  return (
    <>
      <div className={style.imgContainer}>
        <LazyLoadImage
          alt={images.original_filename}
          effect="blur"
          src={images.secure_url}
          className={style.image}
        />
      </div>
      <div className={style.leftSection}>
        <a
        //   alt={images.original_filename}
          href={images.secure_url}
          target="_blank"
        >
          <Tippy content="open image">
            <p
              className={style.footerDelete}
              onClick={removeImage(images.public_id)}
            >
              <BiLinkExternal size={19} style={{ marginRight: "5px" }} />
            </p>
          </Tippy>
        </a>
        <Tippy content="remove">
          <p
            className={style.footerDelete}
            onClick={removeImage(images.public_id)}
          >
            <MdDelete size={19} style={{ marginRight: "5px" }} />
          </p>
        </Tippy>
      </div>
    </>
  );
};

export default ImageCard;
