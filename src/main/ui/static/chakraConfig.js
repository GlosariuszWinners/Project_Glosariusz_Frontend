import { createBreakpoints } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/react';
const breakpoints = createBreakpoints({
	'sm': '320px',
	'md': '557px',
	'lg': '720px',
	'xl': '1366px',
	'2xl': '1920px',
});


const colors = {
	colors: {
		'light-green': '#d0e8f2',
		'dark-green': {
			100: '#77cbe5',
			200: '#61abc2'
		},
		'dark-gray': '#707070',
		'light-gray': '#8a958f',
		'grayish-black': '#363636',
		'light-white': '#fdfdfd',
		'dark-orange': '#f6ae2d',
		'light-orange': '#fac564'
	}
};

const config = {
	...colors,
	breakpoints
};

const theme = extendTheme(config);

 
export default theme;