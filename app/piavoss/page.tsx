export default function PiaVoss() {
  const style = {
    main: 'p-2 grid',
    quotecard: 'grid sm:grid-cols-2 drop-shadow-sm',
    image: 'object-cover object-top w-full aspect-square max-h-[800px]',
    quote:
      'object-cover object-top w-full flex flex-col justify-center max-h-[800px] p-2 border',
    paragraphwrapper: 'p-2 flex border flex-col mt-5',
    paragraphtitel: 'text-2xl font-bold mb-5',
    paragraph: 'sm:text-lg',
  };

  return (
    <div className={style.main}>
      <div className={style.quotecard}>
        <img src="/img/Pia_Voss.jpg" className={style.image} />
        <div className={style.quote}>
          <div className="ml-2 mb-2 flex flex-col">
            <h2 className="lg:text-xl text-lg h-fit">Pia Voss</h2>
            <span className="text-xs">Sie/ihre</span>
            <span className="text-xs">21</span>
          </div>
          <h2 className="lg:text-2xl text-sm sm:ml-5">
            «Stimmrecht für Alle, gleiche Rechte für Alle, Alles für Alle!»
          </h2>
        </div>
      </div>
      <div className={style.paragraphwrapper}>
        <h2 className={style.paragraphtitel}>Mein Leben</h2>
        <p className={style.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          corrupti saepe magnam vel architecto maxime.
        </p>
      </div>

      <div className={style.paragraphwrapper}>
        <h2 className={style.paragraphtitel}>Warum kandidiere ich</h2>
        <p className={style.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit itaque
          dignissimos voluptate omnis eligendi, impedit provident unde tempora,
          similique repellendus, eum explicabo nobis pariatur temporibus?
        </p>
      </div>

      <div className={style.paragraphwrapper}>
        <h2 className={style.paragraphtitel}>Für das stehe ich</h2>
        <p className={style.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          molestiae placeat quod aliquid enim a dolor repudiandae consequuntur
          fuga maxime?
        </p>
      </div>
    </div>
  );
}
