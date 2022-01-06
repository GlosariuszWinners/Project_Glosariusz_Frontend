import { Box, Button, Center, Grid, GridItem, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { clearPaginationElements, getPaginationPage } from '../../../ducks/actions';
const Pagination = ({ paginationElements, nextPaginationUrl, getPaginationPage, apiCalls, clearPaginationElements }) => {
	const [paginationLetter, setPaginationLetter] = useState('a');
	useEffect(() => {
		getPaginationPage(`http://localhost:8080/api/words?polishWord=${paginationLetter}`);
	}, [paginationLetter]);

	const polishAlphabeth = ['a', 'ą', 'b', 'c', 'ć', 'd', 'e', 'ę', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ł', 'm', 'n', 'ń', 'o', 'ó', 'p', 'q', 'r', 's', 'ś', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'ź', 'ż'];
	const [elemToShow, setElemToShow] = useState(null); 

	const handleElemButtonClick = (elem) => {
		setElemToShow(elem);
	};
	const handleBackToPagination = () => {
		setElemToShow(null);
	};
	const handleChangePaginationLetter = (letter) => {
		clearPaginationElements();
		setPaginationLetter(letter);
	};
	const handleLoadMore = () => {
		getPaginationPage(nextPaginationUrl);
	};
	console.log('NextURL: ', nextPaginationUrl);
	if (elemToShow){
		return(
			<div>
				<div>Tutaj bedzie dymek przedstawiajacy element {elemToShow.polishWord}</div>
				<button onClick={() => handleBackToPagination()}>Powrót do Listy</button>
			</div>
			
		);
	}
	console.log(apiCalls.isLoading);
	console.log(paginationElements);
	return(
		<div className="Pagination">
			<Box m={'5', '20', '5', '20'}>
				{polishAlphabeth.map(letter => <Button style={letter === paginationLetter ? { 'backgroundColor': '#f6ae2d' } : { 'backgroundColor': 'rgba(119, 203, 229, 0.2)' }} onClick={() => handleChangePaginationLetter(letter)} isDisabled={apiCalls.isLoading} key={letter}>{letter.toUpperCase()}</Button>)}
				<Box bgColor={'#fdfdfd'} borderRadius={'50px'}>
					<Center>
						{!apiCalls.isLoading && paginationElements.length == 0 ? <Text>Brak słówek na literę <Text color={'#fdfdfd'} backgroundColor={'#f6ae2d'}><Center>{paginationLetter.toUpperCase()}</Center></Text></Text> : <></>}
					</Center>
					<Grid templateColumns='repeat(2, 1fr)' gap={4} p={'50px 50px 50px 50px'}>
						{paginationElements.map(elem => <GridItem key={elem.id}><Button onClick={() => handleElemButtonClick(elem)}>{elem.polishWord}</Button></GridItem>)}
					</Grid>
					<Center>
						{apiCalls.isLoading == true ? <Text fontSize={'md'} color={'gray.400'}>Trwa ładowanie, proszę czekać</Text>: <></>}
					</Center>
					<Center>
						{nextPaginationUrl ? <Button isDisabled={nextPaginationUrl && apiCalls.isLoading == false ? false : true} onClick={() => handleLoadMore()}>Załaduj więcej</Button> : <></> }
					</Center>
				</Box>
			</Box>
			
		</div>
	);
};
const mapStateToProps = (state) => ({
	paginationElements: state.paginationElements,
	nextPaginationUrl: state.nextPaginationUrl,
	apiCalls: state.apiCalls
});
const mapDispatchToProps = (dispatch) => ({
	getPaginationPage: (url) => dispatch(getPaginationPage(url)),
	clearPaginationElements: () => dispatch(clearPaginationElements())
});
Pagination.propTypes = {
	paginationElements: PropTypes.array,
	nextPaginationUrl: PropTypes.string,
	getPaginationPage: PropTypes.func,
	apiCalls: PropTypes.object,
	clearPaginationElements: PropTypes.func
};
export default connect(mapStateToProps, mapDispatchToProps)(Pagination);