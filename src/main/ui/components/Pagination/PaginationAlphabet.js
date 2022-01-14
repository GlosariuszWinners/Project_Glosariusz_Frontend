import { Box, Button } from '@chakra-ui/react';
import { polishAlphabeth } from './utils/alphabeth';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { clearPaginationElements, setPaginationLetter } from '../../../ducks/actions';

const PaginationAlphabet = ({ clearPaginationElements, setPaginationLetter, paginationLetter, apiCalls }) => {
	const handleChangePaginationLetter = (letter) => {
		clearPaginationElements();
		setPaginationLetter(letter);
	};
	return (
		<Box display={{ 'sm': 'block', 'xl': 'flex' }}
			justifyContent={{ 'sm': 'center' }}
			overflow={{ 'sm': 'auto', 'xl': 'visible' }}
			whiteSpace={{ 'sm': 'nowrap' }}
			flexWrap={{ 'xl': 'wrap' }}
			marginTop={5}
			marginBottom={5}
		>
			{polishAlphabeth.map(letter => (
				<Button
					bgColor={letter === paginationLetter ? '#f6ae2d' : '#d0e8f2'}
					color='#fdfdfd'
					width='42px'
					_hover={{ 'bgColor': { 'lg': 'rgba(119, 203, 229, 0.5)', 'sm': '#f6ae2d' } }}
					_disabled={{ 'bgColor': '#f6ae2d', 'cursor': 'not-allowed' }}
					height={{ 'sm': '45px', 'xl': '32px' }}
					marginRight={{ 'sm': '5px' ,'lg': '17px' }}
					marginBottom={{ 'sm': '15px', 'xl': '3px' }}
					marginTop='10px'
					fontSize={{ 'sm': '25px' }}
					onClick={() => handleChangePaginationLetter(letter)} isDisabled={apiCalls.isLoadingPagination || letter === paginationLetter} key={letter}>
					{letter.toUpperCase()}
				</Button>)
			)}
					
		</Box>
	);
};

const mapStateToProps = (state) => ({
	apiCalls: state.apiCalls,
	paginationLetter: state.paginationLetter
});

const mapDispatchToProps = (dispatch) => ({
	clearPaginationElements: () => dispatch(clearPaginationElements()),
	setPaginationLetter: (letter) => dispatch(setPaginationLetter(letter))
});

PaginationAlphabet.propTypes = {
	clearPaginationElements: PropTypes.func,
	setPaginationLetter: PropTypes.func,
	paginationLetter: PropTypes.string,
	apiCalls: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(PaginationAlphabet);
