import styled from 'styled-components'

export const Background = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: var(--spacing-s);
	width: 100%;
	min-width: var(--screen-width);
	height: 100vh;
	padding: 0 var(--spacing-m);
	background-color: var(--background-primary);
`