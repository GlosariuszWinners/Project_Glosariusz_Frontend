import { Box, Center, Link, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const Authors = () => {
	return (
		<Center>
			<Box as='main' width={{ 'sm': '93vw', 'lg': '78vw', 'xl': '70vw', '2xl': '60vw' }} bgColor='#fff' zIndex={2} fontFamily='Ubuntu' borderRadius='50px'>
				<Center flexDirection='column'>
					<Text as='h1' textTransform='uppercase' marginTop='15px' fontWeight='700' fontSize='1.3em'>o autorach</Text>
					<Box paddingLeft='10%' paddingRight='10%'>
						<Text as='p' marginTop='25px'>
                            Polsko-angielski słownik terminów biologicznych, pierwszy tego typu słownik w Polsce, został przygotowany przez następujących studentów Genetyki i Biologii Eksperymentalnej z Wydziału Biologii Uniwersytetu Gdańskiego:
						</Text>
						<Center marginTop='10px'>
							<UnorderedList spacing={2}>
								<ListItem fontWeight='600'>
								Marcina Banackiego 
								</ListItem>
								<ListItem fontWeight='600'>
								Annę Barczak
								</ListItem>
								<ListItem fontWeight='600'>
								Katarzynę Bryszowską 
								</ListItem>
								<ListItem fontWeight='600'>
								Kacpra Boguszewskiego
								</ListItem>
								<ListItem fontWeight='600'>
								Huberta Czyża
								</ListItem>
								<ListItem fontWeight='600'>
								Aleksandrę Kujałowicz
								</ListItem>
							</UnorderedList>
						</Center>
						<Text as='p' marginTop='25px'>
                            Pod opieką mgr Barbary Kubicy-Daniel z Centrum Języków Obcych Uniwersytetu Gdańskiego.
						</Text>
						<Text as='p' marginTop='25px'>
                        Za przygotowanie strony internetowej odpowiedzialny jest zespół studentów Wydziału Matematyki, Fizyki i Informatyki pod opieką dr Hanny Furmańskiej i mgr Wojciecha Łojkowskiego w składzie: 
						</Text>
						<Center marginTop='10px'>
							<UnorderedList spacing={2}>
								<ListItem fontWeight='600'>
								Jakuba Chełchowskiego
								</ListItem>
								<ListItem fontWeight='600'>
								Wiktora Morawskiego
								</ListItem>
								<ListItem fontWeight='600'>
								Jakuba Sieczczyńskiego
								</ListItem>
							</UnorderedList>
						</Center>
						<Text as='p' marginTop='25px'>
                            Za opracowanie interfejsu odpowiedzialna jest <span style={{ 'fontWeight': '600' }}>Joanna Jaworska</span>, studentka studiów magisterskich z Wydziału Nauk Społecznych Uniwersytetu Gdańskiego.
						</Text>
					</Box>
					<Center margin='25px'>
						<Link href='https://forms.gle/ZFwLMs7FxL1RBT9A8' target='blank' fontWeight='700'>Zgłoś błąd / zaproponuj nowy termin</Link> <ExternalLinkIcon mx='2px' />
					</Center>
				</Center>
			</Box>
		</Center>
	);
};

export default Authors;