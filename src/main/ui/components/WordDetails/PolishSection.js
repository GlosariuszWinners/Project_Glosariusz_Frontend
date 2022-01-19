import { Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import polishFlag from '../../static/poland-flag.svg';
import PropTypes from 'prop-types';

const PolishSections = ({ word }) => {
	return (
		<Flex width='100%' height='100%' padding='40px' alignItems='center' as='section'>
			<Grid templateColumns='36px 1fr' gap={4} alignItems='center' justifyItems='flex-start'>
				<GridItem><Image src={polishFlag}/></GridItem>
				<GridItem>
					<Text fontFamily='Ubuntu' fontSize='25px' fontWeight={700} letterSpacing='-0.5px' color='#fdfdfd'>
						{word?.polishWord && word.polishWord.toUpperCase()}
					</Text>
				</GridItem>
			</Grid>
		</Flex>
	);
};

PolishSections.propTypes = {
	word: PropTypes.object,
};

export default PolishSections;
