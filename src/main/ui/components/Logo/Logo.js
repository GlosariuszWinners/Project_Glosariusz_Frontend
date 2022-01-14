import { Center, Text } from '@chakra-ui/react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { clearElemToShow } from '../../../ducks/actions';

const Logo = ({ clearElemToShow }) => {
	const handleLogoClick = () => {
		clearElemToShow();
	};
	return (
		<Center onClick={handleLogoClick}>
			<Text height="7vw" fontFamily="Ubuntu" fontSize={{ 'sm': '18px', 'md': '30px', 'lg': '40px', 'xl': '60px' }} fontWeight="300" textAlign="center"  color='#fff'>Polsko - Angielski Słownik Biologiczny</Text>
		</Center>
	);
};

const mapDispatchToProps = (dispatch) => ({
	clearElemToShow: () => dispatch(clearElemToShow())
});

Logo.propTypes = {
	clearElemToShow: PropTypes.func
};

export default connect(null, mapDispatchToProps)(Logo);