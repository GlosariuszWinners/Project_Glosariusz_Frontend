import { Flex } from '@chakra-ui/react';
import { UtilsLoading } from '../../';

const UtilsSection = () => {
	return (
		<Flex bgColor='light-white' borderBottomRadius='50px' flexDirection='column' paddingTop='24px' marginBottom='15px' paddingBottom='15px'>
			<UtilsLoading/>
		</Flex>
	);
};


export default UtilsSection;
