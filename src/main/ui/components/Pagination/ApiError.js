import { Flex, Text } from '@chakra-ui/react';

const ApiError = () => {
	return (
		<Flex bgColor='light-white' borderRadius='md' justifyContent='center' as='label'>
			<Text as='p'>
				Wystąpił problem, spróbuj ponownie pózniej
			</Text>
		</Flex>
	);
};

export default ApiError;
