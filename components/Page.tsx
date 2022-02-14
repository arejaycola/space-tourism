import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const StyledPage = styled.section`
	width: 100%;
	max-width: 1250px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 100%;
	/* align-self: center; */
	color: white;
`;

const StyledBody = styled.body`
	background-size: cover;
	height: 100vh;
	background-image: url('/assets/home/background-home-desktop.jpg');
	background-attachment: fixed;
`;

const Page = ({ className = '', selectedUrl, children }: { className: string; selectedUrl: string; children: React.ReactNode }) => {
	return (
		<>
			<Header selectedURL={selectedUrl} />
			<StyledBody>
				<StyledPage className={className}>{children}</StyledPage>
			</StyledBody>
		</>
	);
};
export default Page;
