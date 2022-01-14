import { Box, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { WordDetails, UtilsSection } from '../../';
import { clearPaginationElements, getPaginationPage } from '../../../ducks/actions';
import { PaginationAlphabet, NoWordsFound, ApiError, WordsSection } from '../../';


const Pagination = ({ elemToShow, paginationElements, getPaginationPage, apiCalls, clearPaginationElements }) => {
	const [paginationLetter, setPaginationLetter] = useState('a');
	useEffect(() => {
		clearPaginationElements();
		getPaginationPage(`http://localhost:8080/api/words?polishWord=${paginationLetter}`);
	}, [paginationLetter]);

	const handleChangePaginationLetter = (letter) => {
		clearPaginationElements();
		setPaginationLetter(letter);
	};
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
				<PaginationAlphabet handleChangePaginationLetter={handleChangePaginationLetter} paginationLetter={paginationLetter}/>
				{!apiCalls.isLoadingPagination && !apiCalls.isErrorPagination && paginationElements.length === 0 &&
					<NoWordsFound paginationLetter={paginationLetter}/>
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
});

const mapDispatchToProps = (dispatch) => ({
	getPaginationPage: (url) => dispatch(getPaginationPage(url)),
	clearPaginationElements: () => dispatch(clearPaginationElements()),
});

Pagination.propTypes = {
	paginationElements: PropTypes.array,
	getPaginationPage: PropTypes.func,
	apiCalls: PropTypes.object,
	clearPaginationElements: PropTypes.func,
	elemToShow: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);