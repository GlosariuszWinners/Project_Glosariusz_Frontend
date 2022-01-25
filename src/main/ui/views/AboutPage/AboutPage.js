import { Box } from '@chakra-ui/react';
import { Navbar, Logo, ProviderWrapper, About } from '../..';

const AboutPage = () => {
	return (
		<ProviderWrapper>
			<Navbar/>
			<Box as='header'>
				<Logo/>
			</Box>
			<About/>
		</ProviderWrapper>
	);
};

export default AboutPage;