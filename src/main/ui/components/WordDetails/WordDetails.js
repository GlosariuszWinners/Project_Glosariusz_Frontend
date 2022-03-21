import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Center, Text } from '@chakra-ui/react';
import { PolishSection, EnglishSection, DefnitionSection } from '../..';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { wordDetailsService } from '../../../ducks/wordDetails/operations';
import { wordsService } from './../../../ducks/words/operations';

const WordDetails = ({ getWordDetails, wordDetails, clearWordDetails, clearWords, error, loading }) => {
	const { id } = useParams();
	
	useEffect(() => {
		if(!wordDetails?.id) getWordDetails(id);
	}, []);

	const handleBackToPagination = () => {
		clearWordDetails();
		clearWords();
	};


	if(loading) return (
		<Center>
			<Text>
				Ładowanie...
			</Text>
		</Center>
	);

	if(error) return (
		<Center>
			<Text>
			Wystąpił problem, spróbuj ponownie pózniej
			</Text>
		</Center>
	);

	return (
		wordDetails && (
			<Box bgColor='dark-green.200' borderRadius='20px' width='100%' marginTop='80px' as='main' position='relative' zIndex={2}>
				<Link onClick={handleBackToPagination} to='/'>
					<Button>
							Powrót do Listy
					</Button>
				</Link>
				<PolishSection/>
				<EnglishSection/>
				<DefnitionSection/>
			</Box>
		)
	);
};

const mapStateToProps = (state) => ({
	loading: state.wordDetails.loading,
	error: state.wordDetails.error,
	wordDetails: state.wordDetails.data,
	words: state.words
});

const mapDispatchToProps = {
	clearWordDetails: wordDetailsService.clear,
	clearWords: wordsService.clear,
	getWordDetails: wordDetailsService.getById,
};

WordDetails.propTypes = {
	wordDetails: PropTypes.object,
	clearWordDetails: PropTypes.func,
	clearWords: PropTypes.func,
	getWordDetails: PropTypes.func,
	error: PropTypes.object,
	loading: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(WordDetails);
