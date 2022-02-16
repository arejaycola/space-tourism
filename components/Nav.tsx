import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	align-self: center;
	height: 100%;
	width: 80%;
`;

const StyledLink = styled.a<{ isSelected: boolean }>`
	display: flex;
	align-items: center;
	height: 100%;
	position: relative;
	span {
		font-weight: 700;
		margin-right: 5px;
	}
	&:after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 3px;
		${({ isSelected }) => isSelected && 'background-color: white'}
	}
`;

export type NavOption = {
	id: number;
	link: string;
	labelNumber?: string;
	labelText: string;
};

const Nav = ({ selectedURL, options }: { selectedURL: string; options: NavOption[] }) => {
	return (
		<StyledNav>
			{options.map((option) => {
				return (
					<Link key={option.id} href={option.link} passHref>
						<StyledLink isSelected={option.link === selectedURL ? true : false}>
							{option.labelNumber && <span>{option.labelNumber}</span>} {option.labelText}
						</StyledLink>
					</Link>
				);
			})}
		</StyledNav>
	);
};
export default Nav;
