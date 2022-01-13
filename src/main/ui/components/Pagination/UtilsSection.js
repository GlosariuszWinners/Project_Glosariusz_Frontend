import { Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { UtilsLoading, UtilsLoadMore } from '../../';

const UtilsSection = () => {
	return (
		<Flex bgColor='#fdfdfd' borderBottomRadius='md' flexDirection='column'>
			<UtilsLoading/>
			<UtilsLoadMore/>
		</Flex>
	);
};

UtilsSection.propTypes = {
	apiCalls: PropTypes.object,
	paginationElements: PropTypes.array,
	nextPaginationUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	handleLoadMore: PropTypes.func
};


export default UtilsSection;
