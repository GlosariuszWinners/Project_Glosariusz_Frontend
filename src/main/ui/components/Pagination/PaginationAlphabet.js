import { Box, Button } from '@chakra-ui/react';
import { polishAlphabeth } from './utils/alphabeth';
import PropTypes from 'prop-types';

const PaginationAlphabet = ({ handleChangePaginationLetter, paginationLetter, apiCalls }) => {
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
					height={{ 'sm': '35px', 'lg': '25px' }}
					marginRight={{ 'sm': '5px' ,'lg': '20px' }}
					marginBottom={{ 'sm': '10px', 'lg': '3px' }}
					marginTop='10px'
					onClick={() => handleChangePaginationLetter(letter)} isDisabled={apiCalls.isLoadingPagination || letter === paginationLetter} key={letter}>
					{letter.toUpperCase()}
				</Button>)
			)}
					
		</Box>
	);
};

PaginationAlphabet.propTypes = {
	handleChangePaginationLetter: PropTypes.func,
	paginationLetter: PropTypes.string,
	apiCalls: PropTypes.object,
};

export default PaginationAlphabet;
