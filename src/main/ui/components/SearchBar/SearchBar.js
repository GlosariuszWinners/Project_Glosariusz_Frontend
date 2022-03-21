import { Input, InputRightElement } from '@chakra-ui/input';
import { Image, InputGroup, Box, Center, List, ListItem, Spinner } from '@chakra-ui/react';
import { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import searchIcon from '../../static/searchIcon.png';
import listenForOutsideClick from './listen-for-outside-clicks';
import { suggestionsService } from '../../../ducks/suggestions/operations';
import { useHistory } from 'react-router';
import { wordDetailsService } from '../../../ducks/wordDetails/operations';

const SearchBar = ({ loading, error, getSuggestions, setWordDetails, clearSuggestions, suggestions }) => {
	const [currentSelect, setCurrentSelect] = useState(0);
	const history = useHistory();
	const searchBarRef = useRef(null);
	const [listening, setListening] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(true);
	useEffect(() => listenForOutsideClick(listening, setListening, searchBarRef, setIsOpen));
	const [inputValue, setInputValue] = useState('');
	const [timer, setTimer] = useState(null);

	const handleSuggestionClick = (elem) => {
		setInputValue(elem.polishWord);
		setWordDetails(elem);
		history.push(`/slownik/${elem.id}`);
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
		if(inputValue.length > 2 && !loading && suggestions.length > 0){
			return(
				suggestions.slice(0,6).map((suggestion, index) => (
					<ListItem width={ '100%' }
						key={suggestion._id}
						onClick={() => handleSuggestionClick(suggestion)}
						p={3}
						letterSpacing='0.5px'
						borderRadius='md'
						_hover={{ 'bg': 'light-orange' }}
						bg={ currentSelect === index ? 'dark-orange' : 'light-white' }
						fontFamily='Ubuntu'
						fontWeight='light'>
						{suggestion.polishWord}
					</ListItem>
				)
				)
			);
		}
		if(loading){
			return(
				<ListItem p={3} borderBottom={'2px solid light-white'} fontFamily='Ubuntu'>
					<Spinner/>&nbsp;&nbsp;
					<span>Ładowanie ...</span>
				</ListItem>
			);
		}
		if(error){
			return(
				<ListItem p={3} borderBottom={'2px solid light-white'} fontFamily='Ubuntu'>
						Wystąpił problem, spróbuj ponownie
				</ListItem>
			);
		}
		return(
			<ListItem p={3} borderBottom={'2px solid light-white'} fontFamily='Ubuntu'>
						Brak Wyników
			</ListItem>
		);
	};

	const renderSuggestions = () => (
		<List
			spacing={3}
			width={{ 'sm': '90vw', 'md': '80vw', 'lg': '70vw', 'xl': '60vw', '2xl': '50vw' }}
			bg='light-white'
			border={'1px solid rgba(66, 153, 225, 0.6)'}
			borderRadius={{ 'sm':'35px','md': '40px','lg': '50px', 'xl': '60px' }}
			p={{ 'sm': '10px 40px 10px 20px','md': '15px 50px 15px 30px','lg': '20px 70px 20px 50px', 'xl': '25px 80px 25px 60px' }}
			zIndex={2}
			position='relative'>
			{getResultsToRender()}	
		</List>
	);

	const handleKeyPressed = (event) => {
		if(event.key === 'Enter'){
			setIsOpen(false);
			suggestions.length > 0 && handleSuggestionClick(suggestions[currentSelect]);	
		}
	};


	const handleKeyDown = (event) => {
		if(event.key === 'ArrowDown' || event.key === 'ArrowUp'){
			event.preventDefault();
		}
		if(event.key === 'ArrowDown' && suggestions.length > 0 && suggestions.length > currentSelect + 1){
			setCurrentSelect(currentSelect + 1);
		}
		if(event.key === 'ArrowUp' && suggestions.length > 0 &&  currentSelect > 0){
			setCurrentSelect(currentSelect - 1);
		}
		
	};

	return (
		<Box>
			<Center position='relative' zIndex={2}>
				<InputGroup
					ref={searchBarRef}
					className={isOpen ? 'm-menu -active' : 'm-menu '}
					width={{ 'sm': '90vw', 'md': '80vw', 'lg': '70vw', 'xl': '60vw', '2xl': '50vw' }}
					justifySelf='center'>
					<InputRightElement
						pointerEvents='none'
						marginRight='15px' 
						marginTop='20px'
						marginBottom='20px'
						boxSize={{ 'sm': '20px' ,'md': '30px','lg': '50px', 'xl': '60px' }}
					>
						<Image src={searchIcon} alt='SearchIcon'/>
					</InputRightElement>
			
					<Input
						id='mainInput'
						onKeyPress={handleKeyPressed}
						onKeyDown={handleKeyDown}
						onClick={toggle}
						placeholder={'Wpisz szukane słowo'}
						bgColor='light-white'
						color='grayish-black'
						fontFamily='Ubuntu'
						fontWeight='300'
						border='none'
						value={inputValue}
						onChange={inputChanged}
						
						// height={'20'}
						// borderRadius='2em'
						// p='0 60px 0 30px'
						// fontSize='3xl'
						height={{ 'sm': '55px','md': '70px','lg': '80px', 'xl': '100px' }}
						borderRadius={'full'}
						p={{ 'sm': '10px 40px 10px 20px','md': '15px 50px 15px 30px','lg': '20px 70px 20px 50px', 'xl': '25px 80px 25px 60px' }}
						fontSize={{ 'sm': '25px', 'md': '25px', 'lg': '30px', 'xl': '35px' }}
						_placeholder={{
							'fontFamily': 'Ubuntu',
							'fontWeight': 'lighter',
							'fontStretch': 'normal',
							'fontStyle': 'normal',
							'lineHeight': 'normal',
							'letterSpacing': '-0.7px',
							'textAlign': 'left',
							'paddingRight': { 'xl': '60px' },
							'color': 'light-gray',
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
	suggestions: state.suggestions.data,
	loading: state.suggestions.loading,
	error: state.suggestions.error,
});
const mapDispatchToProps = (dispatch) => ({
	getSuggestions: (inputValue) => dispatch(suggestionsService.get(inputValue)),
	setWordDetails: (payload) => dispatch(wordDetailsService.set(payload)),
	clearSuggestions: () => dispatch(suggestionsService.clear),
});
SearchBar.propTypes = {
	suggestions: PropTypes.array,
	loading: PropTypes.bool,
	error: PropTypes.string,
	getSuggestions: PropTypes.func,
	setWordDetails: PropTypes.func,
	clearSuggestions: PropTypes.func,
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);