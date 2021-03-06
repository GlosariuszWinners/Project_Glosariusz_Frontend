import { Center, Flex, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const NoWordsFound = ({ paginationLetter }) => {
	return (
		<Flex bgColor='light-white' borderRadius='md' justifyContent='center'>
			<Text as='span'>
				Brak słówek na literę
				<Text color='light-white' backgroundColor='dark-orange' as='h2'>
					<Center>
						{paginationLetter.toUpperCase()}
					</Center>
				</Text>
			</Text>
		</Flex>
	);
};

const mapStateToProps = (state) => ({
	paginationLetter: state.words.paginationLetter
});

NoWordsFound.propTypes = {
	paginationLetter: PropTypes.string,
};

export default connect(mapStateToProps, null)(NoWordsFound);
