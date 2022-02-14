import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme.config';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<Head>
				<title>Frontend Mentor | Space tourism website</title>
			</Head>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
