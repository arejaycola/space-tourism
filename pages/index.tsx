import type { NextPage } from 'next';
import styled from 'styled-components';
import Page from '../components/Page';

const FlexContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	color: white;
`;

const LeftSide = styled.div`
	padding: 0 20px;
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
`;

const Home: NextPage = () => {
	return (
		<Page className="" selectedUrl="/">
			<FlexContainer className="">
				<LeftSide>
					<Top>So, you want to travel to </Top>
					<Middle>space</Middle>
					<div>
						Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of
						it. Well sit back, and relax because we’ll give you a truly out of this world experience!
					</div>
				</LeftSide>
				<LeftSide>
					<div>So, you want to travel to </div>
					<div> space</div>
					<div>
						Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of
						it. Well sit back, and relax because we’ll give you a truly out of this world experience!
					</div>
				</LeftSide>
			</FlexContainer>
		</Page>
	);
};

export default Home;
