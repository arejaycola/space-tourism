import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled, { css } from 'styled-components';

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

const Nav = styled.nav`
	display: flex;
	flex-basis: 60%;
	height: 100px;
	justify-content: flex-start;
	align-items: stretch;
	margin-left: -25px;
	background: rgba(255, 255, 255, 0.04);
	backdrop-filter: blur(10px);
	letter-spacing: 2px;
`;

const Divider = styled.div`
	border-bottom: 1px solid #fff;
	display: flex;
	flex-basis: 50%;
	opacity: 0.25;
	margin-left: 45px;
	z-index: 100;
`;

const StyledLink = styled.a<{ isSelected: boolean }>`
	align-items: stretch;
	align-self: center;
	margin-left: 70px;

	position: relative;
	span {
		font-weight: 700;
		margin-right: 5px;
	}

	&:after {
		content: '';
		position: absolute;
		bottom: -40px;
		left: 0;
		width: 100%;
		height: 3px;
		${({ isSelected }) => isSelected && 'background-color: white'}
	}
`;

const Header = ({ selectedURL }: { selectedURL: string }) => {
	const options = [
		{
			link: '/',
			labelNumber: '00',
			labelText: 'HOME',
		},
		{
			link: '/destination',
			labelNumber: '01',
			labelText: 'DESTINATION',
		},
		{
			link: '/crew',
			labelNumber: '02',
			labelText: 'CREW',
		},
		{
			link: '/technology',
			labelNumber: '03',
			labelText: 'TECHNOLOGY',
		},
	];

	return (
		<StyledHeader>
			<Image src="/assets/shared/logo.svg" alt="" width="48px" height="48px" priority />
			<Divider />
			<Nav>
				{options.map((option) => {
					return (
						<Link key={option.labelNumber} href={option.link} passHref>
							<StyledLink isSelected={option.link === selectedURL ? true : false}>
								<span>{option.labelNumber}</span> {option.labelText}
							</StyledLink>
						</Link>
					);
				})}
			</Nav>
		</StyledHeader>
	);
};
export default Header;
