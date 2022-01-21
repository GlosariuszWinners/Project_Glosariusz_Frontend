import { Box, Flex } from '@chakra-ui/react';
import { PaginationAlphabet, ProviderWrapper, WordDetails, Navbar, Logo, SearchBar } from '../..';

const DetailPage = () => {
	return (
		<ProviderWrapper>
			<Navbar/>
			<Box display='grid' justifyContent='center' backgroundColor='#d0e8f2' position='relative' as='header'>
				<Logo/>
				<SearchBar/>
			</Box>
			<Flex flexDirection='column' alignItems='center' bgColor='#d0e8f2'>
				<Box width={{ 'sm': '93vw', 'lg': '78vw', 'xl': '60vw' }} zIndex={2}>
					<PaginationAlphabet/>
					<WordDetails/>
				</Box>
			</Flex>
		</ProviderWrapper>
	);
};

export default DetailPage;