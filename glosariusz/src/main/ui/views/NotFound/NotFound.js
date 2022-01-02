import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<Box textAlign="center" py={10} px={6}>
			<Heading
				display="inline-block"
				as="h2"
				size="2xl"
				bgGradient="linear(to-r, teal.400, teal.600)"
				backgroundClip="text">

        404
			</Heading>
			<Text fontSize="18px" mt={3} mb={2}>
        Nie znaleziono 🙁
			</Text>
			<Text color={'gray.500'} mb={6}>
        Strona, której szukasz wydaje się nie istnieć.
			</Text>

			<Button
				colorScheme="teal"
				bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
				color="white"
				variant="solid">
				<Link to={'/'}>
        Wróć do strony domowej
				</Link>
			</Button>
		</Box>
	);
};
export default NotFound;