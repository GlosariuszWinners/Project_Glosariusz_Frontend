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
	const history = useHistory();
	const searchBarRef = useRef(null);
	console.log(suggestions);
	const [listening, setListening] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(true);
	useEffect(listenForOutsideClick(listening, setListening, searchBarRef, setIsOpen));
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
					<ListItem key={index} onClick={() => handleSuggestionClick(suggestion)} p={3} borderBottom={'2px solid #fdfdfd'} _hover={{ bg: '#fdfdfd' }}>
						{suggestion.polishWord}
					</ListItem>
				)
				)
			);
		}
		if(loading){
			return(
				<ListItem p={3} borderBottom={'2px solid #fdfdfd'}>
					<Spinner/>&nbsp;&nbsp;
					<span>Ładowanie ...</span>
				</ListItem>
			);
		}
		if(error){
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
		<List spacing={3} width={{ 'sm': '90vw', 'md': '80vw', 'lg': '70vw', 'xl': '60vw', '2xl': '50vw' }} bg={'gray.100'} borderRadius={{ 'xl': '60px' }} p={{ 'xl': '25px 25px 25px 60px' }} zIndex={2} position='relative'>
			{/* tutaj mozna dodac flagi i synonim albo gdy sa dwa synonimy po angielsku to dodac ikonki i 1 z kilku definicji */}
			{getResultsToRender()}	
		</List>
	);
	
	const handleEnterKeyPressed = (event) => {
		if(event.key === 'Enter'){
			setIsOpen(false);
			suggestions.length > 0 && handleSuggestionClick(suggestions[0]);	
		}
	};


	return (
		<Box>
			<Center position='relative' zIndex={2}>
				<InputGroup ref={searchBarRef} className={isOpen ? 'm-menu -active' : 'm-menu '} width={{ 'sm': '90vw', 'md': '80vw', 'lg': '70vw', 'xl': '60vw', '2xl': '50vw' }}  justifySelf='center'>
					<InputRightElement
						pointerEvents='none'
						marginRight='15px' 
						marginTop='20px'
						marginBottom='20px'
						boxSize={{ 'xl': '60px' }}
					>
						<Image src={searchIcon} alt='SearchIcon'/>
					</InputRightElement>
			
					<Input
						onKeyPress={handleEnterKeyPressed}
						onClick={toggle}
						placeholder={'Wpisz szukane słówko'}
						bgColor='#fdfdfd'
						color='#363636'
						fontFamily='Ubuntu'
						fontWeight='300'
						border='none'
						value={inputValue}
						onChange={inputChanged}
						// height={'20'}
						// borderRadius='2em'
						// p='0 60px 0 30px'
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