import { Link } from 'react-router-dom';
import { Box, Flex, Text } from '@chakra-ui/react';

const NavbarData = [
	{ name: 'O słowniku', link: '/o-slowniku' },
	{ name: 'Autorzy', link: '/autorzy' },
	{ name: 'Kontakt', link: '/kontakt' }
];

const Navbar = () => {
	return (
		<Box
			fontFamily='Ubuntu'
			height='124px'
			bgColor='light-green'
			as='nav'>
			<Flex height='100%' alignItems='center' justifyContent={{ 'sm': 'center', 'md': 'flex-end' }}>
				{NavbarData.map(item => (
					<Box
						key={item.name}
						marginRight={{ 'sm': '30px', 'md': '60px' }}
						_last={{ 'marginRight': { 'sm': '10px', 'md': '30px' } }}>
						<Text
							color='light-white'
							textDecoration='none'
							fontWeight='700'
							_hover={{ 'textDecoration': 'underline' }}>
							<Link to={item.link}>{item.name}</Link>
						</Text>
					</Box>
				))}
				
			</Flex>
		</Box>
	);
};

export default Navbar;