import { Input, InputRightElement } from '@chakra-ui/input';
import { Image, InputGroup, Box, Center, List, ListItem, Spinner } from '@chakra-ui/react';
import { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import searchIcon from '../../static/searchIcon.png';
import { getSuggestions, clearSuggestions, setElemToShow } from '../../../ducks/actions';
import listenForOutsideClick from './listen-for-outside-clicks';

const SearchBar = ({ apiCalls, setElemToShow, getSuggestions, clearSuggestions, suggestions }) => {
	const searchBarRef = useRef(null);
	const [listening, setListening] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(true);
	useEffect(listenForOutsideClick(listening, setListening, searchBarRef, setIsOpen));
	console.log(clearSuggestions);
	const [inputValue, setInputValue] = useState('');
	const [timer, setTimer] = useState(null);

	const handleSuggestionClick = (elem) => {
		setElemToShow(elem);
	};

	const inputChanged = e => {
		setInputValue(e.target.value);
		clearTimeout(timer);
		const newTimer = setTimeout(() => {
			if(inputValue.length > 1){
				clearSuggestions();
				getSuggestions(e.target.value);
			}
			
		}, 500);

		setTimer(newTimer);
	};
	const getResultsToRender = () => {
		if(inputValue.length > 2 && !apiCalls.isLoadingSuggestions && suggestions.length > 0){
			return(
				suggestions.slice(0,6).map((suggestion, index) => 
					<ListItem key={index} onClick={() => handleSuggestionClick(suggestion)} p={3} borderBottom={'2px solid #fdfdfd'}>
						{suggestion.polishWord}
					</ListItem>)
			);
		}
		if(apiCalls.isLoadingSuggestions){
			return(
				<ListItem p={3} borderBottom={'2px solid #fdfdfd'}>
					<Spinner/>&nbsp;&nbsp;
					<span>Ładowanie ...</span>
				</ListItem>
			);
		}
		if(apiCalls.isErrorSuggestions){
			return(
				<ListItem p={3} borderBottom={'2px solid #fdfdfd'}>
						Wystąpił problem, spróbuj ponownie
				</ListItem>
			);
		}
		return(
			<ListItem p={3} borderBottom={'2px solid #fdfdfd'}>
						Brak Wyników
			</ListItem>
		);
	};
	const renderSuggestions = () => (
		<List spacing={3} width={{ 'sm': '90vw', 'md': '80vw', 'lg': '70vw', 'xl': '60vw', '2xl': '50vw' }} bg={'gray.100'} borderRadius={{ 'xl': '60px' }} p={{ 'xl': '25px 25px 25px 60px' } }
		>
			{/* tutaj mozna dodac flagi i synonim albo gdy sa dwa synonimy po angielsku to dodac ikonki i 1 z kilku definicji */}
			{getResultsToRender()}	
		</List>
	);
		


	return (
		<Box>
			<Center>
				<InputGroup ref={searchBarRef} className={isOpen ? 'm-menu -active' : 'm-menu '} width={{ 'sm': '90vw', 'md': '80vw', 'lg': '70vw', 'xl': '60vw', '2xl': '50vw' }}  justifySelf="center">
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
						onClick={toggle}
						placeholder={'Wpisz szukane słówko'}
						bgColor="#fdfdfd"
						color='#363636'
						fontFamily="Ubuntu"
						fontWeight="300"
						border="none"
						value={inputValue}
						onChange={inputChanged}
						// height={'20'}
						// borderRadius="2em"
						// p="0 60px 0 30px"
						// fontSize='3xl'
						height={{ 'xl': '100px' }}
						borderRadius={{ 'xl': '60px' }}
						p={{ 'xl': '25px 80px 25px 60px' } }
						fontSize={{ 'xl': '35px' }}
						_placeholder={{
							'height': { 'xl': '60px' },
							'fontFamily': 'Ubuntu',
							'fontSize': { 'xl': '35px' },
							'fontWeight': 'lighter',
							'fontStretch': 'normal',
							'fontStyle': 'normal',
							'lineHeight': 'normal',
							'letterSpacing': '-0.7px',
							'textAlign': 'left',
							'paddingRight': { 'xl': '60px' },
							'color': '#8a958f',
						}}
					/>
				</InputGroup>
			</Center>
			<Center>
				{(isOpen && inputValue.length > 2) && renderSuggestions()}
			</Center>
		</Box>
	);
};
const mapStateToProps = (state) => ({
	suggestions: state.suggestions,
	apiCalls: state.apiCalls
});
const mapDispatchToProps = (dispatch) => ({
	getSuggestions: (inputValue) => dispatch(getSuggestions(inputValue)),
	clearSuggestions: () => dispatch(clearSuggestions()),
	setElemToShow: (payload) => dispatch(setElemToShow(payload))
});
SearchBar.propTypes = {
	suggestions: PropTypes.array,
	getSuggestions: PropTypes.func,
	clearSuggestions: PropTypes.func,
	setElemToShow: PropTypes.func,
	apiCalls: PropTypes.object
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);