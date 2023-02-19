const style = {
  header: ` flex items-center  w-full mb-5`,
  title: `ml-5 capitalize font-[600] text-[1.75rem]`,
  details: ` grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full place-items-center text-[#2B2B2B] capitalize`,
  description: `w-full font-[400]  text-lg lg:text-base flex items-center text-[#2B2B2B]`,
};

const Details = () => {
  return (
    <div>
      <header className={style.header}>
        <div className="hr"></div>
        <h1 className={style.title}>description</h1>
      </header>
      <p className={style.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore error
        omnis necessitatibus ratione. Illum tempora alias temporibus cum.
        Accusantium officia veritatis et quidem quos similique inventore
        debitis, quod quas quae. Soluta libero, dolore error suscipit maiores,
        fugiat incidunt dignissimos id dolor tenetur modi voluptatibus ad earum,
        ea culpa officiis doloribus molestiae vero distinctio explicabo
        recusandae ipsa ab non? Culpa, eius. Reiciendis, quibusdam praesentium
        soluta minus quisquam error obcaecati nihil! Repudiandae, mollitia natus
        voluptas quam iste magni quia ex quae! Reiciendis, voluptas aliquid?
        Magni fugiat nisi reiciendis tenetur nihil! Quis, cum.
      </p>
    </div>
  );
};

export default Details;
