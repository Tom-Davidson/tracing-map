import MainLayout from '../layouts/main';

function HomePage({ map, env }) {
	return (
		<MainLayout>
			<p>Welcome to Tracing Map.</p>
			<p>Server-side fetched data: {map.random_data_a}</p>
			<p>Server-side env data: {env}</p>
		</MainLayout>
	);
}
HomePage.getInitialProps = async (ctx) => {
	const res = await fetch('http://localhost:3000/map.json');
	const json = await res.json();
	return { map: json, env: process.env.SOMEVAR };
};
export default HomePage;
