export default function PiaVoss() {
	const style = {
		main: "p-2 grid",
		quotecard: "grid sm:grid-cols-2 drop-shadow-sm",
		image: "object-cover object-top w-full aspect-square max-h-[800px]",
		quote:
			"object-cover object-top w-full flex flex-col justify-center max-h-[800px] p-2 border",
		paragraphwrapper: "p-2 flex border flex-col mt-5",
		paragraphtitel: "text-2xl font-bold mb-5",
		paragraph: "sm:text-lg",
	};

	return (
		<div className={style.main}>
			<div className={style.quotecard}>
				<img src='/img/Pia_Voss.jpg' className={style.image} />
				<div className={style.quote}>
					<div className='ml-2 mb-2 flex flex-col'>
						<h2 className='lg:text-xl text-lg h-fit'>Pia Voss</h2>
						<span className='text-xs'>Sie/ihr</span>
						<span className='text-xs'>21</span>
					</div>
					<h2 className='lg:text-2xl text-sm sm:ml-5'>
						«Stimmrecht für Alle, gleiche Rechte für Alle, Alles für Alle!»
					</h2>
				</div>
			</div>
			<div className={style.paragraphwrapper}>
				<h2 className={style.paragraphtitel}>Mein Leben</h2>
				<p className={style.paragraph}>
					Seit meiner Matura 2022 an der Atelierschule Zürich studiere ich
					Komposition an der Hochschule Luzern mit Nebenfach Geige. Politisch
					bin ich vorallem im Vorstand der JUSO Winterthur und der JUSO Kanton
					Zürich tätig.
				</p>
			</div>

			<div className={style.paragraphwrapper}>
				<h2 className={style.paragraphtitel}>Warum kandidiere ich</h2>
				<p className={style.paragraph}>
					In Zeiten, in denen Sexismus, Rassismus und Queerfeindlichkeit immer
					wieder deutlich spürbar sind, eine Partei, wie die SVP, welche die
					Auswirkungen der Klimakrise leugnet und Menschen aufgrund ihrer
					Herkunft und ihrer Identität diskriminiert, muss dagegen gesteuert
					werden. Dies ist nur mit einer Liste möglich, die marginalisierten
					Menschen eine Stimme und Gehör schenkt. Ich möchte mit meiner
					Kandidatur auf die Themenbereiche Migration und Queerfeminismus
					aufmerksam machen und gerade POCs und genderqueere Menschen
					unterstützen.
				</p>
			</div>

			<div className={style.paragraphwrapper}>
				<h2 className={style.paragraphtitel}>Für das stehe ich</h2>
				<p className={style.paragraph}>
					Migrationsrechte, Antirassismus, Queerfeminismus, Antifaschismus,
					Antikapitalismus
				</p>
			</div>
		</div>
	);
}
