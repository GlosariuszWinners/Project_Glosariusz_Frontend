import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Navbar, Logo, ProviderWrapper, Contact } from '../..';

const ContactPage = () => {
	useEffect(() => {
		document.title = 'Kontakt';
	}, []);
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