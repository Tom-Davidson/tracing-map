import Head from 'next/head';

function NotFound() {
    return (
        <div>
            <Head>
                <title>Not Found</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
            </Head>
            <p>This page could not be found.</p>
        </div>
    );
}

export default NotFound;
