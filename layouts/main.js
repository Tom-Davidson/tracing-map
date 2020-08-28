import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';

function MainLayout(props) {
	return (
		<div>
			<Head>
				<title>System Map</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
				<meta name="description" content="Visually map your system interactions from its tracing." key="description" />
				<link
					rel="stylesheet"
					type="text/css"
					href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
				/>
				<link rel="shortcut icon" type="image/png" href="/static/favicon.png" />
				<link href="https://fonts.googleapis.com/css?family=Lora|Open+Sans&display=swap" rel="stylesheet" />
			</Head>
			<Header />
			<div className="content">{props.children}</div>
			<Footer />
			<style jsx global>{`
				div.content {
					padding: 20px;
					background-color: #faecee;
					min-height: 400px;
				}
			`}</style>
		</div>
	);
}

export default MainLayout;
