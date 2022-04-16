import { Logo, SearchBar, Navbar } from '../..';
import { Box } from '@chakra-ui/react';
import { Pagination, ProviderWrapper } from '../..';
import { useEffect } from 'react';

const MainPage = () => {
	useEffect(() => {
		document.title = 'Słownik glosariusz';
	}, []);
	return (
		<ProviderWrapper>
			<Navbar/>
			<Box display='grid' justifyContent='center' backgroundColor='#d0e8f2' position='relative' as='header'>
				<Logo shouldFetchWords={false}/>
				<SearchBar/>
			</Box>
			<Pagination/>
		</ProviderWrapper>
	);
};
export default MainPage;