import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export default createGlobalStyle`
	${reset}

	:root {
		/* color */
		--background-primary: #FECAB3;
		--background-secondary: #FF96AC;
		--color-dark-primary: #443353;
		--color-light-primary: #FFFFFF;
		--color-light-secondary: #E3E1FE;
		--color-pink-primary: #ED8DE0;
		--color-pink-secondary: #DE3EC5;
		--color-purple-primary: #B4A7F7; 
		--color-purple-secondary: #7850D7;

		/* border */
		--border-size-sm: 3px;
		--border-size-md: 5px;

		/* spacing */
		--spacing-sm: 10px;
		--spacing-md: 20px;

		/* size */
		--screen-width: 960px;

		/* animation */
		@keyframes blinking {
			0%		{ color: red; }
			100%	{ color: yellow; }
		}
	}

	* {
		box-sizing: border-box;
	}

	html {
		font-family: 'Courier Prime', monospace;
	}
`