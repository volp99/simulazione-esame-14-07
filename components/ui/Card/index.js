import Button from '../Button';
import Link from 'next/link';
import Image from 'next/image';
import Badge from '../Badge';

export default function Card({title, description, src, accessible, accessibleStyle, href, menu, tracks}) {
	return (
		<div
			className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
			<Link href="#">
				<Image className="rounded-t-lg relative" width={500} height={300} src={src} alt="card-image"/>
			</Link>
			<div className="p-4 flex justify-between items-center gap-2">
				<h5 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
				<Badge text={accessible} className={accessibleStyle}/>
			</div>
			<div className="px-4 mb-6">
				<p className="font-normal text-gray-700">{description}</p>
			</div>
			<div className="px-4 mb-6 flex flex-row justify-between">
				<p className="font-normal text-gray-700">{menu}</p>
				<p className="font-normal text-gray-700">Numero Sentieri: <span className='font-bold'>{tracks}</span></p>
			</div>
			<div className="px-4 mb-3">
				<Link href={href}>
					<a>
						<Button className="button-primary" text="Di più"/>
					</a>
				</Link>
			</div>
		</div>
	)
}