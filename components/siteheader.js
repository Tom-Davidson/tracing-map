import { Header } from 'semantic-ui-react'

function SiteHeader() {
	return (
		<header>
            <Header as='h1'>System Map</Header>
			<style jsx>{`
				h1 {
				}
			`}</style>
		</header>
	);
}

export default SiteHeader;
