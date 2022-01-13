import { Flex, Text } from '@chakra-ui/react';

const ApiError = () => {
	return (
		<Flex bgColor='#fdfdfd' borderRadius='md' justifyContent='center'>
			<Text as='span'>
				Wystąpił problem, spróbuj ponownie pózniej
			</Text>
		</Flex>
	);
};

export default ApiError;
