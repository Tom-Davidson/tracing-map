import Head from 'next/head';
import SiteHeader from '../components/siteheader';
import SiteFooter from '../components/sitefooter';

function MainLayout(props) {
	return (
		<div>
			<Head>
				<title>System Map</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
				<meta name="description" content="Visually map your system interactions from its tracing." key="description" />
				<link rel="shortcut icon" type="image/png" href="/favicon.ico" />
			</Head>
			<SiteHeader />
			<div className="content">{props.children}</div>
			<SiteFooter />
			<style jsx global>{`
			`}</style>
		</div>
	);
}

export default MainLayout;
