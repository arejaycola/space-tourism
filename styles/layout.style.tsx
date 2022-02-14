import styled from 'styled-components';
export const PrimaryContainer = styled.div`
	background: ${(props) => props.theme.main};
	color: ${(props) => props.theme.mainColor};
	display: flex;
	flex-direction: column;
`;
