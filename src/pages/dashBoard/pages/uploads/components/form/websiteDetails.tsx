import { FC, useEffect, useState } from "react";
import axios from "axios";
import Input from "../../../../../../components/UI/FormElement/input/input";
import Select from "../../../../../../components/UI/FormElement/select/select";
import Button from "../../../../../../components/UI/FormElement/Button";
import { Link } from "react-router-dom";
import SlideBottons from "./slideBottons/slideBottons";
import { useFormContext } from "react-hook-form";

interface WebsiteDetailsProps {
  register: any;
  nextStep: any;
  prevStep: any;
  SubmitForm: any;
  step: any;
  setStep: any;
  errors: any;
}
interface PreviewProps {
  title: string;
  description: string;
  image: string;
  url: string;
}
const style = {
  errors: `block `,
  buttonContainer: `flex justify-between items-center`,
  inputTitle: `capitalize leading-4 tracking-wide my-4 ml-4`,
  gridContainer: `grid grid-cols-1 lg:grid-cols-2 `,
  inputes: `flex justify-center flex-col`,
  WebsiteDetails: `bg-white shadow-lg rounded-md p-4 h-full w-full flex flex-col gap-2 text-[#11142D]  text-[15px]`,
  WebsiteDetailsImg: `h-[200px] w-full object-cover`,
  WebsiteDetailsTitle: ` font-normal text-[15px]`,
  WebsiteDetailsDes: ``,
  WebsiteDetailsUrl: `text-blue-500 hover:underline`,
};
// const selectableCountries = [
//   { value: "USA", label: "United States of America" },
//   { value: "JPN", label: "Japan" },
//   { value: "ZAF", label: "South Africa" },
//   { value: "CHN", label: "China" },
// ];
const storageKeyWebSiteUrl = JSON.parse(
  localStorage.getItem("storageKey") as any
);

const WebsiteDetails: FC<WebsiteDetailsProps> = ({
  register,
  nextStep,
  prevStep,
  SubmitForm,
  step,
  setStep,
  errors,
}) => {
  const { setValue, watch, getValues } = useFormContext();
  const [websiteLink, SetwebsiteLink] = useState(
    storageKeyWebSiteUrl.webSiteURL
  );
  const [Linkdata, setData] = useState<PreviewProps>({
    title: ``,
    description: ``,
    image: ``,
    url: ``,
  });

  const key = `2aee468dba430c7566646e305090b5f1`;
  // const websiteLink = `https://wsiaxon.lpages.co/dmt/?utm_campaign=SEPTTRAINNGTRAFIC&utm_source=facebook&utm_medium=paid&hsa_ver=3&hsa_cam=23843575504390783&hsa_src=fb&hsa_grp=23843575504420783&hsa_ad=23843575504520783&hsa_net=facebook&hsa_acc=426522024581159&fbclid=IwAR3EQa8g6irfozX8t8Ym5KVaacVaRFLN3p7h5i89Dvt6Kthnd8Ef1BbdKZ4`;
  useEffect(() => {
    // const intervalId = setInterval(() => {
    const fetchData = async () => {
      const websiteLink = getValues("webSiteURL");
      if (websiteLink !== "") {
        if (Linkdata.url === ``) {
          const linkpreview = `http://api.linkpreview.net/?key=${key}&q=${websiteLink}`;
          let { data } = await axios.get(linkpreview);
          setData(data);
        } else if (Linkdata.url != ``) {
        } else {
          // const linkpreview = `http://api.linkpreview.net/?key=${key}&q=${websiteLink}`;
          // let { data } = await axios.get(linkpreview);
          // setData(data);
        }
      }
    };

    fetchData();
    // }, 1000);
    // return () => clearInterval(intervalId);
  }, [storageKeyWebSiteUrl]);

  const continues = (e: any) => {
    e.preventDefault();
    nextStep();
  };
  const previous = (e: any) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div>
      {/* <h1>Website Details</h1> */}
      <div className={style.gridContainer}>
        <div className={style.inputes}>
          <span>
            <h1 className={style.inputTitle}>website name</h1>
            <Input
              type="text"
              name="webSiteName"
              placeholder=" website name*"
              inputFull
              required
              rounded
              isWhiteBg
              errors={errors}
              inputRef={register("webSiteName", { required: true })}
            />

            <p className={style.errors}>
              {errors.webSiteName?.message && (
                <p>{errors.webSiteName?.message}</p>
              )}
            </p>
          </span>
          <span>
            <h1 className={style.inputTitle}>website url</h1>

            <Input
              type="text"
              name="webSiteURL"
              placeholder="webSiteURL*"
              inputFull
              required
              rounded
              isWhiteBg
              errors={errors}
              inputRef={register("webSiteURL", { required: true })}
            />
            <p className={style.errors}>
              {errors.webSiteURL?.message && (
                <p>{errors.webSiteURL?.message}</p>
              )}
            </p>
          </span>
        </div>
        <div className={style.WebsiteDetails}>
          <img
            src={Linkdata.image}
            alt={Linkdata.title}
            className={style.WebsiteDetailsImg}
          />
          <h1 className={style.WebsiteDetailsTitle}>{Linkdata.title}</h1>
          <h1 className={style.WebsiteDetailsDes}>
            {Linkdata.description.substring(0, 20)}
          </h1>
          <h1 className={style.WebsiteDetailsUrl}>
            <a href={Linkdata.url} target="_blank">
              {Linkdata.url}
            </a>
          </h1>
        </div>
      </div>
      <SlideBottons previous={previous} continues={continues} />
    </div>
  );
};

export default WebsiteDetails;

// useEffect(() => {
//   const intervalId = setInterval(() => {
//     const getLink = async () => {
//       if (linkpreview !== linkpreview) {
//         console.log(data);
//         let { data } = await axios.get(linkpreview);
//         setData(data);
//       } else {
//         console.log("same");
//         watch();
//         console.log(getValues(), "values");
//       }
//     };

//     getLink();
//   }, 1000);

//   return () => clearInterval(intervalId);
// }, [setValue, watch]);

// useEffect(() => {
//   const getLink = async () => {
//     const storageKeyWebSiteUrl = JSON.parse(
//       localStorage.getItem("storageKey") as any
//     );

//     console.log(storageKeyWebSiteUrl.webSiteURL);
//     if (linkpreview) {
//       let { data } = await axios.get(linkpreview);
//       setData(data);
//       console.log(data);
//       console.log("Searching");
//     } else {
//       console.log("same");
//       watch();
//       console.log(getValues(), "values");
//     }
//   };

//   getLink();
// }, [storageKeyWebSiteUrl.webSiteURL]);
