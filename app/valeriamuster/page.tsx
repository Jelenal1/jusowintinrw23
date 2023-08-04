export default function ValeriaMuster() {
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
				src='/img/valeria_muster.jpg'
				className={style.image}
			/>
			<div className={style.quote}>
				<div className='ml-2 mb-2 flex flex-col'>
					<h2 className='lg:text-xl text-lg h-fit '>Valeria Muster</h2>
					<span className='text-xs'>Sie/ihr</span>
					<span className='text-xs'>21</span>

				</div>
				<h2 className='lg:text-2xl text-sm sm:ml-5'>
					«Ich würde meinen rechten Arm geben - den linken eher nicht so… ich
					bin Linkshändlerin»
				</h2>
			</div>
			</div>
			<div className={style.paragraphwrapper}>
				<h2 className={style.paragraphtitel}>Mein Leben</h2>
				<p className={style.paragraph}>
					Ich arbeite als Campaignerin bei der SP Zürich und über den Sommer als
					Blasintrumentenreparateurin (Ja crazy ich weiss, diesen Beruf gibt es
					wirklich… genau wie meinen Nachnamen auch ). <br />
					Meine freien Minuten fülle ich mit Musik machen und hören, sowie viel
					politischem Aktivismus bei der JUSO (oder auch der SP, wenn Mensch das
					Aktivismus nennen kann).
				</p>
			</div>

			<div className={style.paragraphwrapper}>
				<h2 className={style.paragraphtitel}>Warum kandidiere ich</h2>
				<p className={style.paragraph}>
					1. Capitalism sucks! (Kapitalismus nervt!) <br />
					2. Punkt Nummer 1 sollte reichen… <br />
					3. …Falls nicht…. Wir leben in einer Zeit in welcher Genderstern und
					Inklusion als «Woke-Wahnsinn» bezeichnet werden. Der rasante Klimawandel noch immer nicht von allen als Krise
					wahrgenommen wird und es selbstverständlich ist, all diese Krisen auf
					dem Buckel der 99 Prozent auszutragen.
				</p>
			</div>

			<div className={style.paragraphwrapper}>
				<h2 className={style.paragraphtitel}>Für das stehe ich</h2>
				<p className={style.paragraph}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas molestiae placeat quod aliquid enim a dolor repudiandae consequuntur fuga maxime?
				</p>
			</div>

		</div>
	);
}
