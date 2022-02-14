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
	color: white;
`;

const StyledBody = styled.main<{ backgroundImage: string }>`
	background-size: cover;
	height: 100vh;
	background-image: ${({ backgroundImage = '' }) => `url(${backgroundImage})`};
	background-attachment: fixed;
`;

const Page = ({
	className = '',
	selectedUrl,
	backgroundImage,
	children,
}: {
	className: string;
	selectedUrl: string;
	backgroundImage: string;
	children: React.ReactNode;
}) => {
	return (
		<>
			<Header selectedURL={selectedUrl} />
			<StyledBody backgroundImage={backgroundImage}>
				<StyledPage className={className}>{children}</StyledPage>
			</StyledBody>
		</>
	);
};
export default Page;
