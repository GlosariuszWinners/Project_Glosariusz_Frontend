import { Box, Heading, Text, Button, Image, Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ShrekIMG from '../../static/shrek_confused.jpeg';
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
			<Center>
				<Image src={ShrekIMG}/>
			</Center>
			<Text fontSize="18px" mt={3} mb={2}>
        Nie znaleziono 🙁
			</Text>
			<Text color={'gray.500'} mb={6}>
        Strona, której szukasz wydaje się nie istnieć.
			</Text>
			<Link to={'/'}>
				<Button
					colorScheme="teal"
					bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
					color="white"
					variant="solid">
        Wróć do strony domowej
				</Button>
			</Link>
		</Box>
	);
};
export default NotFound;