import Image from 'next/image';

const Logo = () => {
	return (
		<>
			<Image
				width={32}
				height={32}
				className="h-8 w-auto sm:h-10"
				src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
				alt="logo"
			/>
		</>
	)
}
export default Logo;