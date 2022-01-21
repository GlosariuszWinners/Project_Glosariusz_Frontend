import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Center, Button } from '@chakra-ui/react';
import { PolishSection, EnglishSection, DefnitionSection } from '../..';
import { clearElemToShow, setElemToShow } from '../../../ducks/actions';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { getSingleWord } from '../../../ducks/actions';
import { Link } from 'react-router-dom';

const WordDetails = ({ getSingleWord, elemToShow, clearElemToShow }) => {
	const { id } = useParams();
	useEffect(() => {
		if(!elemToShow) getSingleWord(id);
	}, []);

	const handleBackToPagination = () => {
		clearElemToShow();
	};
	return (
		elemToShow && (
			<Center marginTop={5} position='relative' zIndex={2}>
				<Box bgColor='#61abc2' borderRadius='20px' width='100%' marginTop='88px' as='main'>
					<Link onClick={handleBackToPagination} to="/">
						<Button>
							Powrót do Listy
						</Button>
					</Link>
					<PolishSection/>
					<EnglishSection/>
					<DefnitionSection/>
				</Box>
			</Center>)
	);
};

const mapStateToProps = (state) => ({
	elemToShow: state.elemToShow,
	paginationElements: state.paginationElements
});

const mapDispatchToProps = (dispatch) => ({
	clearElemToShow: () => dispatch(clearElemToShow()),
	setElemToShow: (payload) => dispatch(setElemToShow(payload)),
	getSingleWord: (id) => dispatch(getSingleWord(id)),
});

WordDetails.propTypes = {
	elemToShow: PropTypes.object,
	clearElemToShow: PropTypes.func,
	getSingleWord: PropTypes.func,
	paginationElements: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(WordDetails);
