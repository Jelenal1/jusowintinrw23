/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

export default function Home() {
  const style = {
    card: 'border bg-gray-50 rounded-lg p-2 m-2',
    cardimagewarpper: 'flex items-center gap-2',
  };

  return (
    <>
      <h1 className="text-2xl lg:text-3xl text-center my-4">Kanditat*innen</h1>
      <div className="grid items-center lg:grid-cols-2">
        <Link href="/valeriamuster">
          <div className={style.card}>
            <div className={style.cardimagewarpper}>
              <img
                src="/img/Valeria_muster.jpg"
                alt="Valeria Muster"
                className="rounded-full aspect-square w-32 sm:w-44 object-cover object-top"
              />
              <h2 className="text-sm sm:text-xl">
                «Ich würde meinen rechten Arm geben - den linken eher nicht so…
                ich bin Linkshändlerin»
              </h2>
            </div>
          </div>
        </Link>
        <Link href="/michiweidmann">
          <div className={style.card}>
            <div className={style.cardimagewarpper}>
              <img
                src="/img/M-Weidmann.jpg"
                alt="Michi Weidmann"
                className="rounded-full aspect-square w-32 sm:w-44 object-cover object-top"
              />
              <h2 className="text-sm sm:text-xl">
                «Friede dem Wellblech, Krieg den Palästen.»
              </h2>
            </div>
          </div>
        </Link>
        <Link href="/rafaelrueegg">
          <div className={style.card}>
            <div className={style.cardimagewarpper}>
              <img
                src="/img/Rafael_Rüegg.jpg"
                alt="Rafael Rüegg"
                className="rounded-full aspect-square w-32 sm:w-44 object-cover object-top"
              />
              <h2 className="text-sm sm:text-xl">
              «Wir sind stolz auf unsere direkte Demokratie, aber wir haben sie nicht dort wo wir am meisten sind, beim Arbeitsplatz.»
              </h2>
            </div>
          </div>
        </Link>
        <Link href="/piavoss">
          <div className={style.card}>
            <div className={style.cardimagewarpper}>
              <img
                src="/img/Pia_Voss.jpg"
                alt="Pia Voss"
                className="rounded-full aspect-square w-32 sm:w-44 object-cover object-top"
              />
              <h2 className="text-sm sm:text-xl">
                «Stimmrecht für Alle, gleiche Rechte für Alle, Alles für Alle!»
              </h2>
            </div>
          </div>
        </Link>
        <Link href="/jelenaspeer">
          <div className={style.card}>
            <div className={style.cardimagewarpper}>
              <img
                src="/img/J_Speer.jpg"
                alt="Jelena Speer"
                className="rounded-full aspect-square w-32 sm:w-44 object-cover object-top"
              />
              <h2 className="text-sm sm:text-xl">
                «Ich bin trans, antifaschistisch und queerfeministisch - ein
                bunter Wirbelwind im Sturm der Rebellion. Akzeptiere meine
                Existenz.»
              </h2>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
