import Head from 'next/head';

class Error extends React.Component {
	static getInitialProps({ res, err }) {
		const statusCode = res ? res.statusCode : err ? err.statusCode : null;
		return { statusCode };
	}

	render() {
		return (
			<div>
				<Head>
					<title>Oh Dear!</title>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
				</Head>
				<p>
					{this.props.statusCode ? (
						`An error ${this.props.statusCode} occurred on server`
					) : (
						'An error occurred on client'
					)}
				</p>
			</div>
		);
	}
}

export default Error;
