import Image from 'next/image';
import Button from '../../ui/Button';

const Header = ({place, locality, openHour, closeHour, src, openMonth, closeMonth, period}) => {
	return (
		<div className="w-full grid md:grid-cols-2 mt-8 p-4 gap-8">
			<div className="flex flex-col gap-3">
				<h3 className="text-4xl md:text-5xl font-bold">{place}</h3>
				<h4 className="text-xl font-mono">{locality}</h4>
				<div className="mt-6 flex flex-col gap-3">
					<span>Aperto tutti i giorni dalle {openHour} alle {closeHour} dal {openMonth} al {closeMonth}</span>
				</div>
				<div className="mt-6 flex flex-col gap-3">
					<span className='italic'>Periodo consigliato: {period}</span>
				</div>
				<div className="mt-20 flex flex-row justify-around gap-3">
					<Button className="button-primary" text="Prenota"/>
					<Button className="button-secondary" text="Più Informazioni"/>

				</div>
			</div>
			<div>
				<Image src={src} width="700" height="500" alt="header-image" className="object-fill rounded-2xl"/>
			</div>
		</div>
	)
}
export default Header;