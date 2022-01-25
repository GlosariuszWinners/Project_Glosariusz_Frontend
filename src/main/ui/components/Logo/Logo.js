import { Box, Center, Image, Text } from '@chakra-ui/react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { wordsService } from '../../../ducks/words/operations';
import leafLogo from '../../static/leaf.svg';
import { wordDetailsService } from './../../../ducks/wordDetails/operations';
// import { useHistory } from 'react-router';

const Logo = ({ shouldFetchWords = true, wordDetailsId, paginationLetter, getWordsByLetter, clearWordDetails, clearWords }) => {
	const handleLogoClick = () => {
		if(wordDetailsId) clearWordDetails();
		clearWords();
		// to prevent missing letters for 'a' and component double fetch
		if(paginationLetter === 'a' && !shouldFetchWords) getWordsByLetter(paginationLetter);
	};
	return (
		<Center display='flex' flexDirection='column' className='Logo Center'>
			<Link onClick={handleLogoClick} to="/">
				<Text as='h1' fontFamily='Ubuntu' fontSize={{ 'sm': '30px', 'md': '30px', 'lg': '40px', 'xl': '60px' }} fontWeight="300" textAlign="center" color='white' cursor='pointer'>
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
						'bgColor': 'dark-green.100',
						'opacity': '0.2',
						'left': { 'sm': 'calc(-100vw + 86px)', 'lg': 'calc(-75vw + 86px)', 'xl': 'calc(-65vw + 86px)' },
						'top': 100,
						'height': '1200px',
						'borderRadius': '50%'
					}
				}
			>
				<Link onClick={handleLogoClick} to="/">
					<Box height='100%' bgColor='light-white' borderRadius='50%' position='relative' zIndex={2} cursor='pointer'>
						<Center height='100%'>
							<Image src={leafLogo}/>
						</Center>
					</Box>
				</Link>
			</Box>
		</Center>
	);
};

const mapStateToProps = (state) => ({
	wordDetailsId: state.wordDetails.data?.id,
	paginationLetter: state.words.paginationLetter,
});

const mapDispatchToProps = {
	clearWordDetails: wordDetailsService.clear,
	clearWords: wordsService.clear,
	getWordsByLetter: wordsService.getByLetter,
};

Logo.propTypes = {
	shouldFetchWords: PropTypes.bool,
	wordDetailsId: PropTypes.string,
	paginationLetter: PropTypes.string,
	getWordsByLetter: PropTypes.func,
	clearWordDetails: PropTypes.func,
	clearWords: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Logo);