import {useEffect, useState} from 'react';

export const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const data = await response.json();
				setData(data);
				setLoading(false);
			} catch (error) {
				setError(error);
				setLoading(false);
			}
		};
		fetchData().then(r => console.log(r));
	}, [url]);

	return {data, loading, error};
}