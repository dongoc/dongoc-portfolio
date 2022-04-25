import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export default createGlobalStyle`
	${reset}

	:root {
		/* color */
		--background-primary: #F7CBB2;

		/* spacing */
		--spacing-s: 10px;
		--spacing-m: 20px;

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
`