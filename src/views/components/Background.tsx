import styled from 'styled-components'

export const Background = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: var(--spacing-md);
	width: 100%;
	min-width: var(--screen-width);
	height: 100vh;
	padding: 0 var(--spacing-md);
	background: linear-gradient(var(--background-primary), var(--background-secondary));
`