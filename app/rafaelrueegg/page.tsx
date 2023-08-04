export default function RafaelRueegg() {
	const style = {
		main: "p-2 grid",
		quotecard: 'grid sm:grid-cols-2 drop-shadow-sm',
		image: 'object-cover object-top w-full aspect-square max-h-[800px]',
		quote: 'object-cover object-top w-full flex flex-col justify-center max-h-[800px] p-2 border',
		paragraphwrapper: 'p-2 flex border flex-col mt-5',
		paragraphtitel: 'text-2xl font-bold mb-5',
		paragraph: 'sm:text-lg'

	}

	return (
		<div className={style.main}>
			<div className={style.quotecard}>
			<img
				src='/img/Rafael_Rüegg.jpg'
				className={style.image}
			/>
			<div className={style.quote}>
				<div className='ml-2 mb-2 flex flex-col'>
					<h2 className='lg:text-xl text-lg h-fit'>Rafael Rüegg</h2>
					<span className='text-xs'>Keine/er</span>
					<span className='text-xs'>18</span>
				</div>
				<h2 className='lg:text-2xl text-sm sm:ml-5'>
					«Wir sind stolz auf unsere direkte Demokratie, aber wir haben sie nicht dort wo wir am meisten sind, beim Arbeitsplatz.»
				</h2>
			</div>
			</div>
			<div className={style.paragraphwrapper}>
				<h2 className={style.paragraphtitel}>Mein Leben</h2>
				<p className={style.paragraph}>
				Ich beginne mein Studium zum Bachelor of Law. In meiner Freizeit mache ich gerne Sport und genieß die Natur.
				</p>
			</div>

			<div className={style.paragraphwrapper}>
				<h2 className={style.paragraphtitel}>Warum kandidiere ich</h2>
				<p className={style.paragraph}>
				In der Schweiz herrscht die Ungleichheit. Nonbinäre Menschen werden nicht anerkannt. Queere Menschen werden diskriminiert. <br />
				 Die Schere zwischen Arm und Reich ist gigantisch. Es wird gegen Ausländer*innen gehetzt. Gegen solche Missstände kandidiere ich. Auf zu einer sozialistischen Welt.
				</p>
			</div>

			<div className={style.paragraphwrapper}>
				<h2 className={style.paragraphtitel}>Für das stehe ich</h2>
				<p className={style.paragraph}>
				Ökosozialismus, Antifaschismus, Queerfeminismus <br />
				Auf zur sozialistischen Revolution!
				</p>
			</div>

		</div>
	);
}
