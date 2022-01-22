import { Flex, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const UtilsLoading = ({ loading }) => {
	return (
		<Flex justifyContent='center'>
			{loading &&
             <Text fontSize='md' color='gray.400'>Trwa ładowanie, proszę czekać</Text>}
		</Flex>
	);
};

UtilsLoading.propTypes = {
	loading: PropTypes.bool
};

const mapStateToProps = (state) => ({
	loading: state.words.loading
});

export default connect(mapStateToProps, null)(UtilsLoading);
