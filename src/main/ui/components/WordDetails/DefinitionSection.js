import { Box, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const DefinitionSection = ({ wordDefinition }) => {
	return (
		<Box bgColor='#fdfdfd' borderRadius='20px' p={50, 50, 50, 50} as='section'>
			<Text fontFamily='Ubuntu' fontSize='25px' letterSpacing='-0.5px' color='#363636'>
				{wordDefinition}
			</Text>
		</Box>
	);
};

const mapStateToProps = (state) => ({
	wordDefinition: state.wordDetails.data.definition,
});


DefinitionSection.propTypes = {
	wordDefinition: PropTypes.string,
};

export default connect(mapStateToProps, null)(DefinitionSection);
