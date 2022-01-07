import { Center, Text } from '@chakra-ui/react';

const Logo = () => {
	return (
		<div className="Logo">
			<Center>
				<Text width='60vw' height="7vw" fontFamily="Ubuntu" fontSize={{ 'sm': '10px', 'md': '20px', 'lg': '30px', 'xl': '40px' }} fontWeight="normal" textAlign="center"  color='#fff'>Polsko - Angielski Słownik Biologiczny</Text>
			</Center>
		</div>
	);
};

export default Logo;