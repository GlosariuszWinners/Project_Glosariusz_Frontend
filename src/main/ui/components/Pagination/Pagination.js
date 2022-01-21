import { Box, Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { UtilsSection } from '../../';
import { clearPaginationElements, getPaginationPage, setPaginationLetter } from '../../../ducks/actions';
import { PaginationAlphabet, NoWordsFound, ApiError, WordsSection } from '../../';
import InfiniteScroll from 'react-infinite-scroll-component';


const Pagination = ({ nextPaginationUrl, paginationLetter, paginationElements, getPaginationPage, apiCalls, clearPaginationElements }) => {
	const handleLoadMore = () => {
		getPaginationPage(nextPaginationUrl);
	};
	useEffect(() => {
		clearPaginationElements();
		getPaginationPage(`http://localhost:8080/api/words?polishWord=${paginationLetter}`);
	}, [paginationLetter]);

	return(
		<InfiniteScroll
			dataLength={paginationElements.length}
			next={handleLoadMore}
			hasMore={nextPaginationUrl}
		>
			<Flex flexDirection='column' alignItems='center' bgColor='#d0e8f2'>
				<Box width={{ 'sm': '93vw', 'lg': '78vw', 'xl': '60vw' }} zIndex={2}>
					<PaginationAlphabet/>
					{!apiCalls.isLoadingPagination && !apiCalls.isErrorPagination && paginationElements.length === 0 &&
					<NoWordsFound/>
					}
					{apiCalls.isErrorPagination &&
					<ApiError/>
					}
					{paginationElements.length > 0 &&
					<WordsSection/>
					}
					<UtilsSection/>
				</Box>
			</Flex>
		</InfiniteScroll>
	);
};

const mapStateToProps = (state) => ({
	paginationElements: state.paginationElements,
	apiCalls: state.apiCalls,
	paginationLetter: state.paginationLetter,
	nextPaginationUrl: state.nextPaginationUrl,
});

const mapDispatchToProps = (dispatch) => ({
	getPaginationPage: (url) => dispatch(getPaginationPage(url)),
	clearPaginationElements: () => dispatch(clearPaginationElements()),
	setPaginationLetter: (letter) => dispatch(setPaginationLetter(letter))
});

Pagination.propTypes = {
	paginationElements: PropTypes.array,
	nextPaginationUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	paginationLetter: PropTypes.string,
	getPaginationPage: PropTypes.func,
	apiCalls: PropTypes.object,
	clearPaginationElements: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);