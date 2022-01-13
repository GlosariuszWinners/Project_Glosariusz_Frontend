import React from 'react';
import PropTypes from 'prop-types';
import { Box, Center, Button } from '@chakra-ui/react';
import { PolishSection, EnglishSection, DefnitionSection } from '../..';

// eslint-disable-next-line no-unused-vars
const WordDetails = ({ word, handleBackToPagination }) => {
	return (
		<div className='WordDetails'>
			<Center marginTop={5}>
				<Box bgColor='#61abc2' borderRadius='20px' width={{ 'sm': '90vw', 'lg': '60vw' }}>
					<Button onClick={() => handleBackToPagination()}>Powrót do Listy</Button>
					<PolishSection word={word}/>
					<EnglishSection word={word}/>
					<DefnitionSection word={word}/>
				</Box>
			</Center>
		</div>
	);
};

WordDetails.propTypes = {
	word: PropTypes.object,
	handleBackToPagination: PropTypes.func
};
export default WordDetails;
