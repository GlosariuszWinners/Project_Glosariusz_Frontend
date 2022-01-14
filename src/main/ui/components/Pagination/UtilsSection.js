import { Flex } from '@chakra-ui/react';
import { UtilsLoading, UtilsLoadMore } from '../../';

const UtilsSection = () => {
	return (
		<Flex bgColor='#fdfdfd' borderBottomRadius='50px' flexDirection='column' paddingTop='24px' marginBottom='15px' paddingBottom='15px'>
			<UtilsLoading/>
			<UtilsLoadMore/>
		</Flex>
	);
};


export default UtilsSection;
