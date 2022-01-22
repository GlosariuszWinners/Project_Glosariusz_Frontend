import { Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import polishFlag from '../../static/poland-flag.svg';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PolishSections = ({ polishWord }) => {
	return (
		<Flex width='100%' height='100%' padding='40px' alignItems='center' as='section'>
			<Grid templateColumns='36px 1fr' gap={4} alignItems='center' justifyItems='flex-start'>
				<GridItem><Image src={polishFlag}/></GridItem>
				<GridItem>
					<Text fontFamily='Ubuntu' fontSize='25px' fontWeight={700} letterSpacing='-0.5px' color='#fdfdfd'>
						{polishWord && polishWord.toUpperCase()}
					</Text>
				</GridItem>
			</Grid>
		</Flex>
	);
};

const mapStateToProps = (state) => ({
	polishWord: state.wordDetails.data.polishWord,
});

PolishSections.propTypes = {
	polishWord: PropTypes.string,
};

export default connect(mapStateToProps, null)(PolishSections);
