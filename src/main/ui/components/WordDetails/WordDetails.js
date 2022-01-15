import React from 'react';
import PropTypes from 'prop-types';
import { Box, Center, Button } from '@chakra-ui/react';
import { PolishSection, EnglishSection, DefnitionSection } from '../..';
import { clearElemToShow } from '../../../ducks/actions';
import { connect } from 'react-redux';

const WordDetails = ({ elemToShow, clearElemToShow }) => {
	const handleBackToPagination = () => {
		clearElemToShow();
	};
	return (
		<Center marginTop={5} position='relative' zIndex={2}>
			<Box bgColor='#61abc2' borderRadius='20px' width={{ 'sm': '90vw', 'lg': '60vw' }}>
				<Button onClick={handleBackToPagination}>Powrót do Listy</Button>
				<PolishSection word={elemToShow}/>
				<EnglishSection word={elemToShow}/>
				<DefnitionSection word={elemToShow}/>
			</Box>
		</Center>
	);
};

const mapStateToProps = (state) => ({
	elemToShow: state.elemToShow,
});

const mapDispatchToProps = (dispatch) => ({
	clearElemToShow: () => dispatch(clearElemToShow())
});

WordDetails.propTypes = {
	elemToShow: PropTypes.object,
	clearElemToShow: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(WordDetails);
