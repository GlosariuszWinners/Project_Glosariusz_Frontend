import { Box, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const DefinitionSection = ({ word }) => {
	return (
		<Box bgColor='#fdfdfd' borderRadius='20px' p={50, 50, 50, 50}>
			<Text fontFamily='Ubuntu' fontSize='25px' letterSpacing='-0.5px' color='#363636'>
				{word?.definition}
			</Text>
		</Box>
	);
};

DefinitionSection.propTypes = {
	word: PropTypes.object,
};

export default DefinitionSection;
