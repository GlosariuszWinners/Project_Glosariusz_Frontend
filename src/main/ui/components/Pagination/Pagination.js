import { Box, Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { WordDetails, UtilsSection } from '../../';
import { clearPaginationElements, getPaginationPage, setPaginationLetter } from '../../../ducks/actions';
import { PaginationAlphabet, NoWordsFound, ApiError, WordsSection } from '../../';


const Pagination = ({ elemToShow, paginationLetter, paginationElements, getPaginationPage, apiCalls, clearPaginationElements }) => {
	useEffect(() => {
		clearPaginationElements();
		getPaginationPage(`http://localhost:8080/api/words?polishWord=${paginationLetter}`);
	}, [paginationLetter]);

	if (elemToShow){
		return(
			<div>
				<WordDetails/>
			</div>
		);
	}
	return(
		<Flex flexDirection='column' alignItems='center' bgColor='#d0e8f2'>
			<Box width='60vw'>
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
	);
};

const mapStateToProps = (state) => ({
	paginationElements: state.paginationElements,
	apiCalls: state.apiCalls,
	elemToShow: state.elemToShow,
	paginationLetter: state.paginationLetter
});

const mapDispatchToProps = (dispatch) => ({
	getPaginationPage: (url) => dispatch(getPaginationPage(url)),
	clearPaginationElements: () => dispatch(clearPaginationElements()),
	setPaginationLetter: (letter) => dispatch(setPaginationLetter(letter))
});

Pagination.propTypes = {
	paginationElements: PropTypes.array,
	paginationLetter: PropTypes.string,
	getPaginationPage: PropTypes.func,
	apiCalls: PropTypes.object,
	clearPaginationElements: PropTypes.func,
	elemToShow: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);