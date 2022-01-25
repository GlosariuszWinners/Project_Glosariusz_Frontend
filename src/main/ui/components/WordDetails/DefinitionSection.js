import { Box, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const DefinitionSection = ({ wordDefinition }) => {
	return (
		<Box bgColor='light-white' borderRadius='20px' padding={{ 'sm': '20px', 'lg': '50px' }} as='section'>
			<Text fontFamily='Ubuntu' fontSize='25px' letterSpacing='-0.5px' color='grayish-black'>
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
