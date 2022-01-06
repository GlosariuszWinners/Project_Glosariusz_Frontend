import React from 'react';
import PropTypes from 'prop-types';
import { Box, Center, Flex, Grid, GridItem, Text } from '@chakra-ui/react';

// eslint-disable-next-line no-unused-vars
const WordDetails = ({ handleBackToPagination, word }) => {
	return (
		<div className='WordDetails'>
			<Center>
				<Box bgColor={'#61abc2'} borderRadius={'20px'} maxWidth={'70vw'}>
					<Flex width="100%" height="100%" padding="40px" alignItems="center">
						<Grid templateColumns='36px 1fr' gap={4} alignItems="center" justifyItems="flex-start">
							<GridItem><Text>Flag</Text></GridItem>
							<GridItem>
								<Text fontFamily={'Ubuntu'} fontSize={'25px'} fontWeight={700} letterSpacing={'-0.5px'} color={'#fdfdfd'}>
									{word?.polishWord.toUpperCase()}
								</Text>
							</GridItem>
						</Grid>
					</Flex>
					<Flex width="100%" height="100%" paddingLeft="40px" paddingRight="40px">
						<Grid templateColumns='36px 1fr 1fr' gap={4} alignItems="center" justifyItems="flex-start">
							{word.synonyms.map((synonym, index) => (
								<React.Fragment key={index}>
									{index === 0 ? <GridItem><Center><Text>Flag</Text></Center></GridItem> : <GridItem></GridItem>}
									<GridItem>
										<Text fontFamily={'Ubuntu'} fontSize={'25px'} fontWeight={700} letterSpacing={'-0.5px'} color={'#fdfdfd'}>
											{synonym?.singularForm.toUpperCase()}
										</Text>
									</GridItem>
									<GridItem>
										<Text fontFamily={'Ubuntu'} fontSize={'25px'} fontWeight={700} letterSpacing={'-0.5px'} color={'#fdfdfd'}>
											lm. {synonym?.pluralCountable.toUpperCase()}, {synonym?.pluralUncountable && synonym?.pluralUncountable.toUpperCase()}
										</Text>
									</GridItem>
								</React.Fragment>
							))}
						</Grid>
					</Flex>
					
					<Box bgColor={'#fdfdfd'} borderRadius={'20px'} p={50, 50, 50, 50}>
						<Text fontFamily={'Ubuntu'} fontSize={'25px'} letterSpacing={'-0.5px'} color={'#363636'}>
							{word?.definition}
						</Text>
					</Box>
				</Box>
			</Center>
		</div>
	);
};

WordDetails.propTypes = {
	handleBackToPagination: PropTypes.func
};
export default WordDetails;
