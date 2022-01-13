import React from 'react';
import PropTypes from 'prop-types';
import { Box, Center, Flex, Grid, GridItem, Text, Button, Image } from '@chakra-ui/react';
import polishFlag from '../../static/poland-flag.svg';
import ukFlag from '../../static/uk-flag.svg';

// eslint-disable-next-line no-unused-vars
const WordDetails = ({ word, handleBackToPagination }) => {
	return (
		<div className='WordDetails'>
			<Center marginTop={5}>
				<Box bgColor='#61abc2' borderRadius='20px' width={{ 'sm': '90vw', 'lg': '60vw' }}>
					<Button onClick={() => handleBackToPagination()}>Powrót do Listy</Button>
					<Flex width='100%' height='100%' padding='40px' alignItems='center'>
						<Grid templateColumns='36px 1fr' gap={4} alignItems='center' justifyItems='flex-start'>
							<GridItem><Image src={polishFlag}/></GridItem>
							<GridItem>
								<Text fontFamily='Ubuntu' fontSize='25px' fontWeight={700} letterSpacing='-0.5px' color='#fdfdfd'>
									{word?.polishWord && word.polishWord.toUpperCase()}
								</Text>
							</GridItem>
						</Grid>
					</Flex>
					<Flex width='100%' height='100%' paddingLeft={{ 'lg': '40px' }} paddingRight={{ 'lg': '40px' }} paddingBottom='20px'>
						<Grid templateColumns={{ 'lg': '36px 1fr 1fr', 'sm': '36px 1fr 1fr' }} gap={4} alignItems='center' justifyItems={{ 'sm': 'center', 'lg': 'flex-start' }}>
							{word.synonyms.map((synonym, index) => (
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
					
					<Box bgColor='#fdfdfd' borderRadius='20px' p={50, 50, 50, 50}>
						<Text fontFamily='Ubuntu' fontSize='25px' letterSpacing='-0.5px' color='#363636'>
							{word?.definition}
						</Text>
					</Box>
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
