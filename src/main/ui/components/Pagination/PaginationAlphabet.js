import { Box, Button } from '@chakra-ui/react';
import { polishAlphabet } from './utils/alphabet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { wordDetailsService } from '../../../ducks/wordDetails/operations';
import { wordsService } from '../../../ducks/words/operations';

const PaginationAlphabet = ({ clearWordDetails, clearWords, setPaginationLetter, paginationLetter }) => {
	const handleChangePaginationLetter = (letter) => {
		clearWords();
		clearWordDetails();
		setPaginationLetter(letter);
	};
	return (
		<Box display={{ 'sm': 'block', 'xl': 'flex' }}
			justifyContent={{ 'sm': 'center' }}
			overflow={{ 'sm': 'auto', 'xl': 'visible' }}
			whiteSpace={{ 'sm': 'nowrap' }}
			flexWrap={{ 'xl': 'wrap' }}
			marginTop='59px'
			marginBottom={5}
			as='section'
		>
			{polishAlphabet.map(letter => (
				<Link to="/" key={letter}>
					<Button
						bgColor={letter === paginationLetter ? '#f6ae2d' : 'transparent'}
						color='#fdfdfd'
						width={{ 'sm': '42px', 'xl': '55px' }}
						_active={{ 'bgColor': '#f6ae2d' }}
						_hover={{ 'bgColor': { 'lg': 'rgba(119, 203, 229, 0.5)' } }}
						_disabled={{ 'cursor': 'not-allowed' }}
						height={{ 'sm': '45px', 'xl': '32px' }}
						marginRight={{ 'sm': '5px' ,'lg': '17px' }}
						marginBottom={{ 'sm': '15px', 'xl': '3px' }}
						marginTop='10px'
						fontSize={{ 'sm': '25px' }}
						onClick={() => handleChangePaginationLetter(letter)}
						isActive={letter === paginationLetter}
						isDisabled={letter === paginationLetter}>
						{letter.toUpperCase()}
					</Button>
				</Link>
			)
			)}
					
		</Box>
	);
};

const mapStateToProps = (state) => ({
	paginationLetter: state.words.paginationLetter
});

const mapDispatchToProps = (dispatch) => ({
	clearWordDetails: () => dispatch(wordDetailsService.clear),
	clearWords: () => dispatch(wordsService.clear),
	setPaginationLetter: (letter) => dispatch(wordsService.set(letter))
});

PaginationAlphabet.propTypes = {
	clearWordDetails: PropTypes.func,
	clearWords: PropTypes.func,
	setPaginationLetter: PropTypes.func,
	paginationLetter: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(PaginationAlphabet);
