import Navbar from '../../components/commons/Navbar';
import Card from '../../components/ui/Card';
import Footer from '../../components/commons/Footer';
import Head from 'next/head';

export const getStaticProps = async () => {
	const res = await fetch('http://localhost:3004/items');
	const data = await res.json();

	return {
		props: {items: data},
	}
}

const Items = ({items}) => {
	return (
		<>
			<Head>
				<title>Dummy Data</title>
				<meta name="description" content="Generated by create next app"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			<Navbar/>
			<div className="m-10 grid md:grid-cols-3 gap-8">
				{items.map((data) => (
					<Card key={data.id} title={data.name_place} description={data.weather} src={data.src}
					menu={data.type_menu}
					tracks={data.tracks_num}
						  accessible={(data.accessible === true ? 'Aperto' : 'Chiuso')}
						  accessibleStyle={(data.accessible === true ? 'badge-success' : 'badge-danger')}
						  href={`dummyDataPage/${data.id}`}/>
				))}
			</div>
			<Footer/>
		</>
	);
}

export default Items;