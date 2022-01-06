import { Box, Button, Center, Grid, GridItem } from '@chakra-ui/react';
import { useState } from 'react';
import WordDetails from '../WordDetails/WordDetails';

const Pagination = () => {
	const [paginationLetter, setPaginationLetter] = useState('a');
	const polishAlphabeth = ['a', 'ą', 'b', 'c', 'ć', 'd', 'e', 'ę', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ł', 'm', 'n', 'ń', 'o', 'ó', 'p', 'q', 'r', 's', 'ś', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'ź', 'ż'];
	const [elemToShow, setElemToShow] = useState(null); 
	const mockElements = [{ 'id': 20, 'polish' : 'łegawka','english': 'pppp', 'definition': 'Tutaj jest definicja', 'isReg': 'reg.' }, { 'id': 20, 'polish' : 'łegawka2','english': 'pppp', 'definition': 'Tutaj jest definicja', 'isReg': 'reg.' }, { 'id': 20, 'polish' : 'łegawka3','english': 'pppp', 'definition': 'Tutaj jest definicja', 'isReg': 'reg.' }, { 'id': 20, 'polish' : 'łegawka4','english': 'pppp', 'definition': 'Tutaj jest definicja', 'isReg': 'reg.' }, { 'id': 20, 'polish' : 'łegawka5','english': 'pppp', 'definition': 'Tutaj jest definicja', 'isReg': 'reg.' }, { 'id': 20, 'polish' : 'łegawka6','english': 'pppp', 'definition': 'Tutaj jest definicja', 'isReg': 'reg.' }];

	const [paginationElements, setPaginationElements] = useState(mockElements);
	const handleElemButtonClick = (elem) => {
		setElemToShow(elem);
		setPaginationElements(mockElements);
	};
	const handleBackToPagination = () => {
		setElemToShow(null);
	};
	const handleChangePaginationLetter = (letter) => {
		setPaginationLetter(letter);
	};
	// const handleLoadMore = () => {
	// 	setLoading(true);
	// }
	if (elemToShow){
		return(
			<WordDetails handleBackToPagination={handleBackToPagination}/>
		);
	}
	return(
		<div className="Pagination">
			{polishAlphabeth.map(letter => <button style={letter === paginationLetter ? { 'backgroundColor': 'black' } : { 'backgroundColor': '#fdfdfd' }} onClick={() => handleChangePaginationLetter(letter)} key={letter}>{letter.toUpperCase()}</button>)}
			<Box bgColor={'#fdfdfd'} borderRadius={'50px'}>
				<Grid templateColumns='repeat(2, 1fr)' gap={4} p={'50px 50px 50px 50px'}>
					{paginationElements.map(elem => <GridItem key={elem.id}><button onClick={() => handleElemButtonClick(elem)}>{elem.polish}</button></GridItem>)}
				</Grid>
				<Center>
					<Button>Załaduj więcej</Button>
				</Center>
			</Box>
		</div>
	);
};

export default Pagination;