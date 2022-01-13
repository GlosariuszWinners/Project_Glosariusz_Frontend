import { Flex, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const UtilsLoading = ({ apiCalls }) => {
	return (
		<Flex justifyContent="center">
			{apiCalls.isLoadingPagination === true &&
             <Text fontSize='md' color='gray.400'>Trwa ładowanie, proszę czekać</Text>}
		</Flex>
	);
};

UtilsLoading.propTypes = {
	apiCalls: PropTypes.object
};

const mapStateToProps = (state) => ({
	apiCalls: state.apiCalls
});

export default connect(mapStateToProps, null)(UtilsLoading);
