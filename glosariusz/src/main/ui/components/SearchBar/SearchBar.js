import { Input, InputRightElement } from '@chakra-ui/input';
import { Image, InputGroup } from '@chakra-ui/react';
import searchIcon from '../../static/searchIcon.png';
const SearchBar = () => {
	return (
		<InputGroup width={{ 'sm': '90vw', 'md': '80vw', 'lg': '70vw', 'xl': '60vw', '2xl': '50vw' }} height={{ 'sm': '30vh', 'md': '25vw', 'lg': '20vw', 'xl': '15vw', '2xl': '5vw' }} justifySelf="center">
			<InputRightElement
				pointerEvents='none'
				marginRight='15px' 
				marginTop='20px'
				marginBottom='20px'
				boxSize={{ 'xl': '60px' }}
			>
				<Image src={searchIcon} alt="SearchIcon"/>
			</InputRightElement>
			
			<Input
				placeholder={'Wpisz szukane słówko'}
				bgColor="#fdfdfd"
				color='#363636'
				fontFamily="Ubuntu"
				fontWeight="300"
				border="none"
				// height={'20'}
				// borderRadius="2em"
				// p="0 60px 0 30px"
				// fontSize='3xl'
				height={{ 'xl': '100px' }}
				borderRadius={{ 'xl': '60px' }}
				p={{ 'xl': '25px 80px 25px 60px' } }
				fontSize={{ 'xl': '35px' }}
				_placeholder={{
					height: { 'xl': '60px' },
					'fontFamily': 'Ubuntu',
					'fontSize': { 'xl': '35px' },
					'fontWeight': 'lighter',
					'fontStretch': 'normal',
					'fontStyle': 'normal',
					'lineHeight': 'normal',
					'letterSpacing': '-0.7px',
					'textAlign': 'left',
					'paddingRight': { 'xl': '60px' },
					color: '#8a958f',
				}}
			/>
		</InputGroup>
		
	);
};

export default SearchBar;