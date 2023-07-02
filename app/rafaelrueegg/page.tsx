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
					«Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, ab.»
				</h2>
			</div>
			</div>
			<div className={style.paragraphwrapper}>
				<h2 className={style.paragraphtitel}>Mein Leben</h2>
				<p className={style.paragraph}>
				Klettern, Segeln, Kendo
				</p>
			</div>

			<div className={style.paragraphwrapper}>
				<h2 className={style.paragraphtitel}>Warum kandidiere ich</h2>
				<p className={style.paragraph}>
				Ich kandidire weil Nonbinär keine Rechte haben und für eine gerechte Welt.
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
