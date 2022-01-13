import { Center, Flex, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const NoWordsFound = ({ paginationLetter }) => {
	return (
		<Flex bgColor='#fdfdfd' borderRadius='md' justifyContent='center'>
			<Text as='span'>Brak słówek na literę
				<Text color='#fdfdfd' backgroundColor='#f6ae2d' as='h2'>
					<Center>
						{paginationLetter.toUpperCase()}
					</Center>
				</Text>
			</Text>
		</Flex>
	);
};

NoWordsFound.propTypes = {
	paginationLetter: PropTypes.string,
};

export default NoWordsFound;
