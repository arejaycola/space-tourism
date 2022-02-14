import { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import Page from '../components/Page';

const LeftSide = styled.div`
	color: red;
`;
const RightSide = styled.div`
	color: pink;
`;

const Destination: NextPage = () => {
	return (
		<Page className="" selectedUrl="/destination" backgroundImage="/assets/destination/background-destination-desktop.jpg">
			<LeftSide>Left Side</LeftSide>
			<RightSide>Right Side</RightSide>
		</Page>
	);
};
export default Destination;
