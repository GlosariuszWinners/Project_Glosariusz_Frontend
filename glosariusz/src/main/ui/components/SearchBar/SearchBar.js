import { Input, InputRightElement } from '@chakra-ui/input';
import { Image, InputGroup } from '@chakra-ui/react';
import searchIcon from '../../static/searchIcon.png';
const SearchBar = () => {
	return (
		<InputGroup width="50vw" height="20vh" justifySelf="center">
			<InputRightElement
				pointerEvents='none'
				marginRight='15px' 
				marginTop='20px'
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
				height={'20'}
				borderRadius="2em"
				p="0 60px 0 30px"
				fontSize='3xl'
				_placeholder={{
					height: '43px',
					'font-family': 'Ubuntu',
					'font-size': '35px',
					'font-weight': 'lighter',
					'font-stretch': 'normal',
					'font-style': 'normal',
					'line-height': 'normal',
					'letter-spacing': '-0.7px',
					'text-align': 'left',
					'padding-right': '60px',
					color: '#8a958f',
				}}
			/>
		</InputGroup>
		
	);
};

export default SearchBar;