import type { NextPage } from 'next';
import styled from 'styled-components';
import Page from '../components/Page';

const FlexContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-end;
	color: white;
`;

const LeftSide = styled.div`
	flex-basis: 30%;
`;

const RightSide = styled.div`
	background-color: white;
	width: 275px;
	height: 275px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;

	&::after {
		content: 'Explore';
		color: #0b0d17;
		font-family: 'Bellefair';
		font-size: 32px;
		line-height: 37px;
		text-transform: uppercase;
		letter-spacing: 2px;
	}
`;

const Top = styled.div`
	font-size: 28px;
	letter-spacing: 4.725px;
	text-transform: uppercase;
	line-height: 34px;
	color: #d0d6f9;
`;

const Middle = styled.div`
	font-size: 150px;
	font-family: 'Bellefair';
	text-transform: uppercase;
	justify-self: flex-end;
`;

const Bottom = styled.div`
	font-family: 'barlow';
	line-height: 32px;
	font-size: 18px;
	text-align: justify;
	font-weight: 200;
	color: #d0d6f9;
`;

const Home: NextPage = () => {
	return (
		<Page className="" selectedUrl="/" backgroundImage="/assets/home/background-home-desktop.jpg">
			<FlexContainer className="">
				<LeftSide>
					<Top>So, you want to travel to </Top>
					<Middle>space</Middle>
					<Bottom>
						Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of
						it. Well sit back, and relax because we’ll give you a truly out of this world experience!
					</Bottom>
				</LeftSide>
				<RightSide />
			</FlexContainer>
		</Page>
	);
};

export default Home;
