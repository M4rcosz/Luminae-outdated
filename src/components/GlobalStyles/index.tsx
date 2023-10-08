import { Global, css } from "@emotion/react"

import "tailwindcss/base.css"
import "tailwindcss/components.css"
import "tailwindcss/utilities.css"

const styles = css`
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

:root{
	font-family: 'Lato', sans-serif;
}

*{
    box-sizing: border-box;
}

body{
	min-height: 100vh;
}

`


const GlobalStyles = () => {
	return (<Global styles={styles} />
	)
}

export default GlobalStyles