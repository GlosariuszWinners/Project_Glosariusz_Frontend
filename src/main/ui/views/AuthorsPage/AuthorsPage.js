import { Box } from '@chakra-ui/react';
import { Navbar, Logo, ProviderWrapper, Authors } from '../..';

const AuthorsPage = () => {
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