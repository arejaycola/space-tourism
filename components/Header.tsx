import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled, { css } from 'styled-components';
import Nav, { NavOption } from './Nav';

const StyledHeader = styled.header`
	color: #fff;
	padding-top: 40px;
	margin-left: 55px;
	position: absolute;
	display: flex;
	width: calc(100% - 55px);
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-family: 'Barlow Condensed';
	font-weight: 400;
`;

const Divider = styled.div`
	border-bottom: 1px solid #fff;
	display: flex;
	flex-basis: 50%;
	opacity: 0.25;
	margin-left: 45px;
	z-index: 100;
`;

const StyledNav = styled.div`
	flex-basis: 60%;
	height: 100px;
	margin-left: -25px;
	background: rgba(255, 255, 255, 0.04);
	backdrop-filter: blur(10px);
	letter-spacing: 2px;
	display: flex;
`;

const Header = ({ selectedURL }: { selectedURL: string }) => {
	const options: NavOption[] = [
		{
            id: 1,
			link: '/',
			labelNumber: '00',
			labelText: 'HOME',
		},
		{
            id: 2,
			link: '/destination',
			labelNumber: '01',
			labelText: 'DESTINATION',
		},
		{
            id: 3,
			link: '/crew',
			labelNumber: '02',
			labelText: 'CREW',
		},
		{
            id: 4,
			link: '/technology',
			labelNumber: '03',
			labelText: 'TECHNOLOGY',
		},
	];

	return (
		<StyledHeader>
			<Image src="/assets/shared/logo.svg" alt="" width="48px" height="48px" priority />
			<Divider />
			<StyledNav>
				<Nav selectedURL={selectedURL} options={options} />
			</StyledNav>
		</StyledHeader>
	);
};
export default Header;
