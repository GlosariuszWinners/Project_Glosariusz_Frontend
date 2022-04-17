import {  Grid, GridItem, Image, Text } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';
import ukFlag from '../../static/uk-flag.svg';
import { connect } from 'react-redux';

const EnglishSection = ({ wordDetails }) => {
	return (
		<Grid
			templateColumns={{ 'sm': '36px 1fr' }}
			paddingLeft={{ 'sm': '20px', 'lg': '40px' }}
			paddingRight={{ 'sm': '5px', 'lg': '40px' }}
			paddingBottom='20px' gap={4}
			alignItems='center'
			justifyItems={{ 'sm': 'center', 'lg': 'flex-start' }}
			as='section'
		>
			<GridItem height='100%' marginTop='10px'>
				<Image src={ukFlag}/>
			</GridItem>
			<Grid width='100%' display='grid' templateColumns={{ 'sm': '1fr', 'lg': '1fr 1fr' }}
				gridGap='10px' wordBreak='break-word'>
				{wordDetails.synonyms && wordDetails.synonyms.map((synonym) => (
					<React.Fragment key={synonym._id}>
						<GridItem>
							<Text fontFamily='Ubuntu' fontSize='25px' fontWeight={700} letterSpacing='-0.5px' color='light-white'>
								{synonym?.singularForm && synonym.singularForm.toUpperCase()}
							</Text>
						</GridItem>
						<GridItem>
							<Text fontFamily='Ubuntu' fontSize='25px' fontWeight={500} letterSpacing='-0.5px' color='light-white'>
								{synonym?.pluralForm
									? `l.mn. ${synonym?.pluralForm && synonym.pluralForm.toUpperCase()}`
									: 'l.mn -'} 
							</Text>
						</GridItem>
					</React.Fragment>
				))}
			</Grid>
		</Grid>
	);
};

const mapStateToProps = (state) => ({
	wordDetails: state.wordDetails.data,
});

EnglishSection.propTypes = {
	wordDetails: PropTypes.object,
};


export default connect(mapStateToProps, null)(EnglishSection);
