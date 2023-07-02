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
				src='/img/M-Weidmann.jpg'
				className={style.image}
			/>
			<div className={style.quote}>
				<div className='ml-2 mb-2 flex flex-col'>
					<h2 className='lg:text-xl text-lg h-fit'>Michi Weidmann</h2>
					<span className='text-xs'>Er/ihm</span>
					<span className='text-xs'>27 (bei Wahl)</span>
				</div>
				<h2 className='lg:text-2xl text-sm sm:ml-5'>
					«Friede dem Wellblech, Krieg den Palästen.»
				</h2>
			</div>
			</div>
			<div className={style.paragraphwrapper}>
				<h2 className={style.paragraphtitel}>Mein Leben</h2>
				<p className={style.paragraph}>
				Studieren, an der Bar arbeiten, Vorstand Juso Winti, Festivals und Konzerte, Skifahren, Reisen und viel Lesen und Hören (Musik, Podcasts und Hörbücher).
				</p>
			</div>

			<div className={style.paragraphwrapper}>
				<h2 className={style.paragraphtitel}>Warum kandidiere ich</h2>
				<p className={style.paragraph}>
				Ich kandidiere, weil wir in einer vom Kapitalismus beherrschten Welt mit unheimlich vielen Krisen, endlich Alternativen zu diesem System aufzeigen müssen!
				</p>
			</div>

			<div className={style.paragraphwrapper}>
				<h2 className={style.paragraphtitel}>Für das stehe ich</h2>
				<p className={style.paragraph}>
				Ich stehe für Gleichberechtigung und Inklusion auf allen Ebenen, gleiche Chancen für alle, eine sozial gerechte Klimapolitik, mehr Queerness, gerechtere Verteilung des Vermögens und gegen Nazis und Rechtsextremismus in allen Formen.
				</p>
			</div>

		</div>
	);
}
