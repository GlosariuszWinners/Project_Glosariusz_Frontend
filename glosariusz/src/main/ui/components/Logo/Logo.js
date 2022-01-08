import { Center, Text } from '@chakra-ui/react';

const Logo = () => {
	return (
		<div className="Logo">
			<Center>
				<Text height="7vw" fontFamily="Ubuntu" fontSize={{ 'sm': '18px', 'md': '30px', 'lg': '40px', 'xl': '60px' }} fontWeight="300" textAlign="center"  color='#fff'>Polsko - Angielski Słownik Biologiczny</Text>
			</Center>
		</div>
	);
};

export default Logo;