import { Box, Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { UtilsSection } from '../../';
import { PaginationAlphabet, NoWordsFound, ApiError, WordsSection } from '../../';
import { wordsService } from '../../../ducks/words/operations';

const Pagination = ({ words, loading, error, getWordsByLetter, paginationLetter, clearWords }) => {


	useEffect(() => {
		clearWords();
		getWordsByLetter(paginationLetter);
	}, [paginationLetter]);

	return(
		<Flex flexDirection='column' alignItems='center' bgColor='light-green'>
			<Box width={{ 'sm': '93vw', 'lg': '78vw', 'xl': '70vw', '2xl': '60vw' }} zIndex={2}>
				<PaginationAlphabet/>
				{!loading && !error && words.length === 0 &&
					<NoWordsFound/>
				}
				{error &&
					<ApiError/>
				}
				{words.length > 0 &&
					<WordsSection/>
				}
				<UtilsSection/>
			</Box>
			
		</Flex>
	);
};

const mapStateToProps = (state) => ({
	words: state.words.words,
	loading: state.words.loading,
	error: state.words.error,
	paginationLetter: state.words.paginationLetter,
	nextPaginationUrl: state.words.nextPaginationUrl,
});

const mapDispatchToProps = (dispatch) => ({
	getWordsByUrl: (url) => dispatch(wordsService.getByUrl(url)),
	getWordsByLetter: (letter) => dispatch(wordsService.getByLetter(letter)),
	clearWords: wordsService.clear,
});

Pagination.propTypes = {
	words: PropTypes.array,
	loading: PropTypes.bool,
	error: PropTypes.string,
	nextPaginationUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	paginationLetter: PropTypes.string,
	getWordsByUrl: PropTypes.func,
	getWordsByLetter: PropTypes.func,
	clearWords: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);