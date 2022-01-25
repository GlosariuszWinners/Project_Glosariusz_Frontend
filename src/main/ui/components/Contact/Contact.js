import { Box, Center, Link, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const Contact = () => {
	return (
		<Center>
			<Box as='main' width={{ 'sm': '93vw', 'lg': '78vw', 'xl': '70vw', '2xl': '60vw' }} bgColor='#fff' zIndex={2} fontFamily='Ubuntu' borderRadius='50px'>
				<Center flexDirection='column'>
					<Text as='h1' textTransform='uppercase' marginTop='15px' fontWeight='700' fontSize='1.3em'>kontakt</Text>
					<Box paddingLeft='10%' paddingRight='10%'>
						<Center flexDirection='column'>
							<Text as='p' marginTop='25px'>
						Kontakt z autorami dostępny mailowo:
							</Text>
							<Link href='mailto: slownikbiologia@gmail.com' fontWeight='600'>slownikbiologia@gmail.com</Link>
						</Center>
					</Box>
					<Center margin='25px'>
						<Link href='https://forms.gle/ZFwLMs7FxL1RBT9A8' target='blank' fontWeight='700'>Zgłoś błąd / zaproponuj nowy termin</Link> <ExternalLinkIcon mx='2px' />
					</Center>
				</Center>
			</Box>
		</Center>
	);
};

export default Contact;