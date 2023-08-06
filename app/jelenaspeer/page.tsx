export default function JelenaSpeer() {
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
        <img src="/img/J_Speer.jpg" className={style.image} />
        <div className={style.quote}>
          <div className="ml-2 mb-2 flex flex-col">
            <h2 className="lg:text-xl text-lg h-fit">Jelena Speer</h2>
            <span className="text-xs">Sie/ihr</span>
            <span className="text-xs">18</span>
          </div>
          <h2 className="lg:text-2xl text-sm sm:ml-5">
            «Ich bin trans, antifaschistisch und queerfeministisch - ein bunter
            Wirbelwind im Sturm der Rebellion. Akzeptiere meine Existenz.»
          </h2>
        </div>
      </div>
      <div className={style.paragraphwrapper}>
        <h2 className={style.paragraphtitel}>Mein Leben</h2>
        <p className={style.paragraph}>
          Ich mache eine Infromatik Ausbildung, code auch in meiner Freizeit
          gerne, produziere Musik und bin im Vorstand der Juso Winterthur.
          Gröstenteils bin ich aber Antifaschistin ✊🌈
        </p>
      </div>

      <div className={style.paragraphwrapper}>
        <h2 className={style.paragraphtitel}>Warum kandidiere ich</h2>
        <p className={style.paragraph}>
          Ich kandidiere weil es mir auf die Nerven geht, wie viele
          Parlamentarier*innen die Probleme der Menschen missachten und nur für
          eigenen kapitalistischen menschenfeindliche Interessen ihre Stimmen erheben. Ich
          habe sehr viele Privilegien, ich bin weiss und habe einen
          Schweizer-Pass. Ich möchte diese Privilegien für die Menschen nutzen, die sie
          nicht haben.
        </p>
      </div>

      <div className={style.paragraphwrapper}>
        <h2 className={style.paragraphtitel}>Für das stehe ich</h2>
        <p className={style.paragraph}>
          Antifaschismus, Queerfeminismus, Transrights
        </p>
      </div>
    </div>
  );
}
