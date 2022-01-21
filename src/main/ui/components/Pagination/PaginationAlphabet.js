import { Box, Button } from '@chakra-ui/react';
import { polishAlphabeth } from './utils/alphabeth';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { clearElemToShow, clearPaginationElements, setPaginationLetter } from '../../../ducks/actions';
import { Link } from 'react-router-dom';

const PaginationAlphabet = ({ clearElemToShow, clearPaginationElements, setPaginationLetter, paginationLetter }) => {
	const handleChangePaginationLetter = (letter) => {
		clearPaginationElements();
		clearElemToShow();
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
			{polishAlphabeth.map(letter => (
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
	paginationLetter: state.paginationLetter
});

const mapDispatchToProps = (dispatch) => ({
	clearElemToShow: () => dispatch(clearElemToShow()),
	clearPaginationElements: () => dispatch(clearPaginationElements()),
	setPaginationLetter: (letter) => dispatch(setPaginationLetter(letter))
});

PaginationAlphabet.propTypes = {
	clearElemToShow: PropTypes.func,
	clearPaginationElements: PropTypes.func,
	setPaginationLetter: PropTypes.func,
	paginationLetter: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(PaginationAlphabet);
