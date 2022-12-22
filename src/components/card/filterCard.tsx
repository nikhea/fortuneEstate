import { FC } from "react";
import Button from "../../components/UI/FormElement/Button";
const style = {
  container: `flex  w-full m-auto top-[70%] overflow-hidden   `,
  cardContainer: `w-[95%] m-auto rounded-[30px] bg-white shadow-2xl mb-3`,
  card: ` w-full pt-8 pb-5`,
  form: ` flex flex-wrap`,
  input: ` rounded-full w-[16.5em] py-3 px-4 my-3 mx-6 bg-gray-200 outline-none`,
  inputPrice: `  rounded-full w-[10em] py-3 px-4 my-3 mx-6 bg-gray-200 outline-none`,
  inputSymbol: ` rounded-full w-[5em] py-3 px-4 my-3 mx-6 bg-gray-200 outline-none`,
  btn: `my-0 mx-6 `,
};
const filterCard: FC = () => {
  return (
    <div>
    <div className={style.container}>
      <div className={style.cardContainer}>
        <div className={style.card}>
          <form>
            <div className={style.form}>
              <input
                className={style.input}
                type="text"
                placeholder="what are you looking for?"
              />
              <input
                className={style.input}
                type="text"
                placeholder="Property Type"
              />
              {/* <input
                className={`${style.inputSymbol}`}
                type="text"
                placeholder="US"
              /> */}
              <input
                className={`${style.inputPrice}`}
                type="text"
                placeholder="Price"
              />
              <input
                className={style.input}
                type="text"
                placeholder="Bathrooms"
              />
              <input
                className={style.input}
                type="text"
                placeholder="Bedrooms"
              />
            </div>
            <div className={style.btn}>
              <Button primary rounded linearGradient uppercase>
                Search
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default filterCard;
