import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Navbar, Logo, ProviderWrapper, About } from '../..';

const AboutPage = () => {
	useEffect(() => {
		document.title = 'O słowniku';
	}, []);
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