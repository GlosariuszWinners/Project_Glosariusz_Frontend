import { Box } from '@chakra-ui/react';
import { Navbar, Logo, ProviderWrapper, Contact } from '../..';

const ContactPage = () => {
	return (
		<ProviderWrapper>
			<Navbar/>
			<Box as='header'>
				<Logo/>
			</Box>
			<Contact/>
		</ProviderWrapper>
	);
};

export default ContactPage;