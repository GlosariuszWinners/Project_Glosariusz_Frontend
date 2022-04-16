import { Box, Center, Text } from '@chakra-ui/react';

const About = () => {
	return (
		<Center>
			<Box as='main' width={{ 'sm': '93vw', 'lg': '78vw', 'xl': '70vw', '2xl': '60vw' }} bgColor='light-white' zIndex={2} fontFamily='Ubuntu' borderRadius='50px' paddingBottom='15px'>
				<Center flexDirection='column'>
					<Text as='h1' textTransform='uppercase' marginTop='15px' fontWeight='700' fontSize='1.3em'>o słowniku</Text>
					<Box paddingLeft='10%' paddingRight='10%'>
						<Text as='p' marginTop='25px'>
                    Niniejszy słownik zawiera tłumaczenia polskich terminów z zakresu szeroko pojętej biologii – (od biochemii po ekologię) - na język angielski. Obejmuje to zarówno liczbę pojedynczą, jak i mnogą, zarówno formy regularne i nieregularne. Zaznaczona jest też niepoliczalność. W przypadku wielu tłumaczeń, uwzględniono angielskie synonimy i warianty ortograficzne wyrażeń. 
						</Text>
						<Text as='p' marginTop='25px'>
                    Ponadto, każdy termin opatrzony został definicją w języku angielskim, która nie stanowi jednak wyczerpującej informacji naukowej, a tylko ma za zadanie wskazać, czy poszukiwane tłumaczenie jest właściwe dla żądanego kontekstu.
						</Text>
					</Box>
				</Center>
			</Box>
		</Center>
	);
};

export default About;