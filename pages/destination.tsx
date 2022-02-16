import { NextPage } from 'next';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Nav, { NavOption } from '../components/Nav';
import Page from '../components/Page';
import { useRouter } from 'next/router';

import { destinations } from '../constants/constants';

const LeftSide = styled.section`
	/* color: red; */
	width: 100%;
`;
const RightSide = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	/* height: 100%; */
`;

const RightNav = styled.div`
	width: 80%;
	height: 35px;
	text-transform: uppercase;
	color: #d0d6f0;
	font-size: 16px;
	letter-spacing: 2.7px;
`;

const TopLeft = styled.div`
	font-size: 28px;
	line-height: 34px;
	letter-spacing: 4.725px;
	color: white;
	text-transform: uppercase;
	margin-bottom: 100px;
	span {
		color: rgba(256, 256, 256, 0.25);
	}
`;
const BottomLeft = styled.div`
	margin-left: 100px;
`;

const Title = styled.div`
	font-size: 100px;
	font-family: 'Bellefair';
	color: white;
`;

const options: NavOption[] = [
	{
		id: 1,
		link: '/destination?location=moon',
		labelText: 'Moon',
	},
	{
		id: 2,
		link: '/destination?location=mars',
		labelText: 'Mars',
	},
	{
		id: 3,
		link: '/destination?location=europa',
		labelText: 'Europa',
	},
	{
		id: 4,
		link: '/destination?location=titan',
		labelText: 'Titan',
	},
];

const Destination: NextPage = () => {
	const { query, asPath } = useRouter();
	const [selected, setSelected] = useState<{ key: string }>(destinations[0]);
	const [selectedUrl, setSelectedUrl] = useState<string>(''+query.asPath);

	useEffect(() => {
		if (!query.location) {
			setSelectedUrl('/destination?location=moon');
		}
	}, []);

	useEffect(() => {
		const temp = destinations.filter((dest) => {
			return dest.key === query.location;
		});

		setSelected(temp[0]);
	}, [query]);

	return (
		<Page className="" selectedUrl={selectedUrl} backgroundImage="/assets/destination/background-destination-desktop.jpg">
			{destinations.map((destination) => {
				return (
					selected?.key === destination.key && (
						<div key={destination.key}>
							<LeftSide>
								<TopLeft>
									<span>01&nbsp;</span> Pick your destination
								</TopLeft>
								<BottomLeft>
									<Image width="445px" height="445px" src={destination.image} alt={destination.key}></Image>
								</BottomLeft>
							</LeftSide>
							<RightSide>
								<RightNav>
									<Nav options={options} selectedURL={destination.url} />
									<Title>{destination.title}</Title>
								</RightNav>
							</RightSide>
						</div>
					)
				);
			})}

			{/* </Destination> */}
		</Page>
	);
};
export default Destination;
