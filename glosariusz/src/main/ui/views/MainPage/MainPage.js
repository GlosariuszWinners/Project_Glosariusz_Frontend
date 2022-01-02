import { Logo, SearchBar } from '../..';
import { Box } from '@chakra-ui/react';

const MainPage = () => {
	return (
		<div className='MainPage'>
			<Box h="100vh" d="grid" justifyContent="center" backgroundColor={'#d0e8f2'} alignContent='center' width='100vw'>
				<Logo/>
				<SearchBar/> 
			</Box>
		</div>
		
	);
};
export default MainPage;