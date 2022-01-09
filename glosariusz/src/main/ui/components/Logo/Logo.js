import { Center, Text } from '@chakra-ui/react';
import { PropTypes } from 'prop-types';
const Logo = ({ setElemToShow }) => {
	return (
		<Center onClick={() => setElemToShow(null)}>
			<Text height="7vw" fontFamily="Ubuntu" fontSize={{ 'sm': '18px', 'md': '30px', 'lg': '40px', 'xl': '60px' }} fontWeight="300" textAlign="center"  color='#fff'>Polsko - Angielski Słownik Biologiczny</Text>
		</Center>
	);
};
Logo.propTypes = {
	setElemToShow: PropTypes.func
};
export default Logo;