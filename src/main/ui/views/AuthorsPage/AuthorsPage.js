import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Navbar, Logo, ProviderWrapper, Authors } from '../..';

const AuthorsPage = () => {
	useEffect(() => {
		document.title = 'Autorzy';
	}, []);
	return (
		<ProviderWrapper>
			<Navbar/>
			<Box as='header'>
				<Logo/>
			</Box>
			<Authors/>
		</ProviderWrapper>
	);
};

export default AuthorsPage;