import { Box, Center, Image, Text } from '@chakra-ui/react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearElemToShow } from '../../../ducks/actions';
import leafLogo from '../../static/leaf.svg';


const Logo = ({ clearElemToShow }) => {
	const handleLogoClick = () => {
		clearElemToShow();
	};
	return (
		<Center display='flex' flexDirection='column' className='Logo Center'>
			<Link onClick={handleLogoClick} to="/">
				<Text as='h1' fontFamily='Ubuntu' fontSize={{ 'sm': '18px', 'md': '30px', 'lg': '40px', 'xl': '60px' }} fontWeight="300" textAlign="center" color='#fff' cursor='pointer'>
					Polsko - Angielski Słownik Biologiczny
				</Text>
			</Link>
			<Box
				width='172px'
				height='172px'
				marginBottom='50px'
				marginTop='50px'
				position='relative'
				_before={
					{ 	'content': '"a"',
						'position': 'absolute',
						'width': { 'sm': '200vw', 'lg': '150vw', 'xl': '130vw' },
						'bgColor': 'rgba(119, 203, 229, 0.2)',
						'left': { 'sm': 'calc(-100vw + 86px)', 'lg': 'calc(-75vw + 86px)', 'xl': 'calc(-65vw + 86px)' },
						'top': 100,
						'height': '1200px',
						'borderRadius': '50%'
					}
				}
			>
				<Link onClick={handleLogoClick} to="/">
					<Box height='100%' bgColor='#fdfdfd' borderRadius='50%' position='relative' zIndex={2} cursor='pointer'>
						<Center height='100%'>
							<Image src={leafLogo}/>
						</Center>
					</Box>
				</Link>
			</Box>
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