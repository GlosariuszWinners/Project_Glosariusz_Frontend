import { Logo, SearchBar, Navbar } from '../..';
import { Box } from '@chakra-ui/react';
import { Pagination } from '../..';
const MainPage = () => {
	return (
		<>
			<Navbar/>
			<div className='MainPage'>
				<Box d="grid" justifyContent="center" backgroundColor={'#d0e8f2'}width='100vw'>
					<Logo/>
					<SearchBar/>
					<Pagination/>
				</Box>
			</div>
		</>
        
	);
};
export default MainPage;