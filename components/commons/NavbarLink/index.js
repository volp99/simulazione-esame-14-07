import Link from 'next/link';

const NavbarLink = () => {

	const routes = [
		{
			href: '/dummyDataPage',
			text: 'Home',
		},
		{
			href: '/about',
			text: 'Chi Siamo',
		},
		{
			href: '/contact',
			text: 'Contatti',
		},
	]

	return (
		<>
			{routes.map((route, index) => (
				<Link key={index} href={route.href} className="text-base font-medium text-gray-500 hover:text-gray-900">
					<a>{route.text}</a>
				</Link>
			))}
		</>
	)
}
export default NavbarLink