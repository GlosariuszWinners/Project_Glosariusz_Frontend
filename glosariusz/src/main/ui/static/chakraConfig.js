import { createBreakpoints } from '@chakra-ui/theme-tools';
import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/react';
const breakpoints = createBreakpoints({
	sm: '320px',
	md: '557px',
	lg: '720px',
	xl: '1366px',
	'2xl': '1920px',
});
const styles = {
	global: props => ({
		body: {
			bg: mode('gray.100', '#d0e8f2')(props),
		},
	}),
};
 
 
const theme = extendTheme({
	styles,
	breakpoints
});
 
export default theme;