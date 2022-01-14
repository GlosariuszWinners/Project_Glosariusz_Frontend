import { Flex } from '@chakra-ui/react';
import { UtilsLoading, UtilsLoadMore } from '../../';

const UtilsSection = () => {
	return (
		<Flex bgColor='#fdfdfd' borderBottomRadius='md' flexDirection='column'>
			<UtilsLoading/>
			<UtilsLoadMore/>
		</Flex>
	);
};


export default UtilsSection;
