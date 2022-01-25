import { Grid, GridItem, Image, Text } from '@chakra-ui/react';
import polishFlag from '../../static/poland-flag.svg';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PolishSections = ({ polishWord }) => {
	return (
		<Grid templateColumns='36px 1fr' gap={4} paddingLeft={{ 'sm': '20px', 'lg': '40px' }} paddingRight={{ 'sm': '5px', 'lg': '40px' }} paddingBottom='40px' paddingTop={{ 'sm': '40px' }} alignItems='center' justifyItems='flex-start' as='section'>
			<GridItem height='100%' marginTop='10px'>
				<Image src={polishFlag}/>
			</GridItem>
			<GridItem>
				<Text fontFamily='Ubuntu' fontSize='25px' fontWeight={700} letterSpacing='-0.5px' color='#fdfdfd'>
					{polishWord && polishWord.toUpperCase()}
				</Text>
			</GridItem>
		</Grid>
	);
};

const mapStateToProps = (state) => ({
	polishWord: state.wordDetails.data.polishWord,
});

PolishSections.propTypes = {
	polishWord: PropTypes.string,
};

export default connect(mapStateToProps, null)(PolishSections);
