/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Home() {
	const style = {
		card: "bg-rose-400 rounded-lg p-2 m-2",
		cardimagewarpper: "flex items-center gap-2",
	};

	return (
		<>
			<h1 className='text-2xl text-center'>Unsere Kanditat*innen</h1>
			<div className='grid items-center lg:grid-cols-2'>
				<Link href='/valeriamuster'>
					<div className={style.card}>
						<div className={style.cardimagewarpper}>
							<img
								src='/img/Valeria_muster-2.jpg'
								alt='Valeria Muster'
								className='rounded-full aspect-square w-32 sm:w-44 object-cover object-top'
							/>
							<h2 className='text-sm sm:text-xl'>
								«Ich würde meinen rechten Arm geben - den linken eher nicht so…
								ich bin Linkshändlerin»
							</h2>
						</div>
					</div>
				</Link>
				<Link href='/michiweidmann'>
					<div className={style.card}>
						<div className={style.cardimagewarpper}>
							<img
								src='/img/M-Weidmann.jpg'
								alt='Valeria Muster'
								className='rounded-full aspect-square w-32 sm:w-44 object-cover object-top'
							/>
							<h2 className='text-sm sm:text-xl'>
							«Friede dem Wellblech, Krieg den Palästen.»
							</h2>
						</div>
					</div>
				</Link>
				<Link href='/rafaelrueegg'>
					<div className={style.card}>
						<div className={style.cardimagewarpper}>
							<img
								src='/img/Rafael_Rüegg.jpg'
								alt='Valeria Muster'
								className='rounded-full aspect-square w-32 sm:w-44 object-cover object-top'
							/>
							<h2 className='text-sm sm:text-xl'>
								Ich würde meinen rechten Arm geben - den linken eher nicht so…
								ich bin Linkshändlerin
							</h2>
						</div>
					</div>
				</Link>
				<Link href='/piavoss'>
					<div className={style.card}>
						<div className={style.cardimagewarpper}>
							<img
								src='/img/Pia_Voss.jpg'
								alt='Valeria Muster'
								className='rounded-full aspect-square w-32 sm:w-44 object-cover object-top'
							/>
							<h2 className='text-sm sm:text-xl'>
								Ich würde meinen rechten Arm geben - den linken eher nicht so…
								ich bin Linkshändlerin
							</h2>
						</div>
					</div>
				</Link>
				<Link href='/jelenaspeer'>
					<div className={style.card}>
						<div className={style.cardimagewarpper}>
							<img
								src='/img/J_Speer.jpg'
								alt='Valeria Muster'
								className='rounded-full aspect-square w-32 sm:w-44 object-cover object-top'
							/>
							<h2 className='text-sm sm:text-xl'>
							«Ich bin trans, antifaschistisch und queerfeministisch - ein bunter Wirbelwind im Sturm der Rebellion. Akzeptiere meine Existenz oder werde vom Wind der Veränderung fortgeweht.»
							</h2>
						</div>
					</div>
				</Link>
			</div>
		</>
	);
}
