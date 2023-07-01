export default function Home() {

const style = {
  card : "m-1 bg-rose-400 rounded-lg py-2",
  cardimagewarpper: "flex items-center gap-2"
}

  return (
    <div>
      <h1 className="text-2xl text-center">Unsere Kanditat*innen</h1>
      <div className={style.card}>
        <div className={style.cardimagewarpper}>
        <img src="/img/Valeria_muster-2.jpg" alt="Valeria Muster"  className="rounded-full aspect-square w-40 object-cover object-top"/>
        <h2 className="text-sm">Ich würde meinen rechten Arm geben - den linken eher nicht so… ich bin Linkshändlerin</h2>
        </div>
        
      </div>
      <div className={style.card}>
        <div className={style.cardimagewarpper}>
        <img src="/img/M-Weidmann.jpg" alt="Valeria Muster"  className="rounded-full aspect-square w-40 object-cover object-top"/>
        <h2 className="text-sm">Ich würde meinen rechten Arm geben - den linken eher nicht so… ich bin Linkshändlerin</h2>
        </div>
       
      </div>
      <div className={style.card}>
        <div className={style.cardimagewarpper}>
        <img src="/img/Rafael_Rüegg.jpg" alt="Valeria Muster"  className="rounded-full aspect-square w-40 object-cover object-top"/>
        <h2 className="text-sm">Ich würde meinen rechten Arm geben - den linken eher nicht so… ich bin Linkshändlerin</h2>
        </div>
      
      </div>
      <div className={style.card}>
        <div className={style.cardimagewarpper}>
        <img src="/img/Pia_Voss.jpg" alt="Valeria Muster"  className="rounded-full aspect-square w-40 object-cover object-top"/>
        <h2 className="text-sm">Ich würde meinen rechten Arm geben - den linken eher nicht so… ich bin Linkshändlerin</h2>
        </div>
       
      </div>
      <div className={style.card}>
        <div className={style.cardimagewarpper}>
        <img src="/img/J_Speer.jpg" alt="Valeria Muster"  className="rounded-full aspect-square w-40 object-cover object-top"/>
        <h2 className="text-sm">Ich würde meinen rechten Arm geben - den linken eher nicht so… ich bin Linkshändlerin</h2>
        </div>
    
      </div>
    </div>
  )
}
