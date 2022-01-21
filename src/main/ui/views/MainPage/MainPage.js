import { Logo, SearchBar, Navbar } from '../..';
import { Box } from '@chakra-ui/react';
import { Pagination, ProviderWrapper } from '../..';

const MainPage = () => {
	return (
		<ProviderWrapper>
			<Navbar/>
			<Box display='grid' justifyContent='center' backgroundColor='#d0e8f2' position='relative' as='header'>
				<Logo/>
				<SearchBar/>
			</Box>
			<Pagination/>
		</ProviderWrapper>
	);
};
export default MainPage;