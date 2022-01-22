import { Center, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';
import ukFlag from '../../static/uk-flag.svg';
import { connect } from 'react-redux';

const EnglishSection = ({ wordDetails }) => {
	return (
		<Flex width='100%' height='100%' paddingLeft={{ 'lg': '40px' }} paddingRight={{ 'lg': '40px' }} paddingBottom='20px' as='section'>
			<Grid templateColumns={{ 'lg': '36px 1fr 1fr', 'sm': '36px 1fr 1fr' }} gap={4} alignItems='center' justifyItems={{ 'sm': 'center', 'lg': 'flex-start' }}>
				{wordDetails.synonyms && wordDetails.synonyms.map((synonym, index) => (
					<React.Fragment key={index}>
						{index === 0 ? (
							<GridItem>
								<Center>
									<Image src={ukFlag}/>
								</Center>
							</GridItem>) : <GridItem></GridItem>}
						<GridItem>
							<Text fontFamily='Ubuntu' fontSize='25px' fontWeight={700} letterSpacing='-0.5px' color='#fdfdfd'>
								{synonym?.singularForm && synonym.singularForm.toUpperCase()}
							</Text>
						</GridItem>
						<GridItem>
							<Text fontFamily='Ubuntu' fontSize='25px' fontWeight={700} letterSpacing='-0.5px' color='#fdfdfd'>
								{synonym?.pluralCountable || synonym?.pluralUncountable ? 'l.mn.' : ''} {synonym?.pluralCountable && synonym.pluralCountable.toUpperCase()}{synonym?.pluralUncountable && `, ${synonym?.pluralUncountable.toUpperCase()}`}
							</Text>
						</GridItem>
					</React.Fragment>
				))}
			</Grid>
		</Flex>
	);
};

const mapStateToProps = (state) => ({
	wordDetails: state.wordDetails.data,
});

EnglishSection.propTypes = {
	wordDetails: PropTypes.object,
};


export default connect(mapStateToProps, null)(EnglishSection);
