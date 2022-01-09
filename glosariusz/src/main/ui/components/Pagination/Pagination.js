import { Box, Button, Center, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { clearPaginationElements, getPaginationPage } from '../../../ducks/actions';
import WordDetails from '../WordDetails/WordDetails';
const Pagination = ({ elemToShow, setElemToShow, paginationElements, nextPaginationUrl, getPaginationPage, apiCalls, clearPaginationElements }) => {
	const [paginationLetter, setPaginationLetter] = useState('a');
	useEffect(() => {
		clearPaginationElements();
		getPaginationPage(`http://localhost:8080/api/words?polishWord=${paginationLetter}`);
	}, [paginationLetter]);

	const polishAlphabeth = ['a', 'ą', 'b', 'c', 'ć', 'd', 'e', 'ę', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ł', 'm', 'n', 'ń', 'o', 'ó', 'p', 'q', 'r', 's', 'ś', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'ź', 'ż'];

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
	if (elemToShow){
		return(
			<div>
				<Button onClick={() => handleBackToPagination()}>Powrót do Listy</Button>
				<WordDetails word={elemToShow}/>
			</div>
		);
	}
	return(
		<Flex flexDirection='column' alignItems='center' bgColor='#d0e8f2'>
			<Box width='60vw'>
				<Flex flexWrap='wrap' justifyContent='center'>
					{polishAlphabeth.map(letter =>(
						<Button
							bgColor={letter === paginationLetter ? '#f6ae2d' :  'rgba(119, 203, 229, 0.2)'}
							width="40px"
							onClick={() => handleChangePaginationLetter(letter)} isDisabled={apiCalls.isLoadingPagination || letter === paginationLetter} key={letter}>
							{letter.toUpperCase()}
						</Button>)
					)}
					
				</Flex>
				{!apiCalls.isLoadingPagination && !apiCalls.isErrorPagination && paginationElements.length === 0 &&
					<Flex bgColor='#fdfdfd' borderRadius='md' justifyContent='center'>
						<Text as='span'>Brak słówek na literę
							<Text color='#fdfdfd' backgroundColor='#f6ae2d' as='h2'>
								<Center>
									{paginationLetter.toUpperCase()}
								</Center>
							</Text>
						</Text>
					</Flex>}
				{apiCalls.isErrorPagination &&
				<Flex bgColor='#fdfdfd' borderRadius='md' justifyContent='center'>
					<Text as='span'>
						Wystąpił problem, spróbuj ponownie pózniej
					</Text>
				</Flex>}
				{/* <Fade in={!paginationElements.length}>
					<Flex bgColor='#fdfdfd' borderRadius='md' justifyContent='center'>
						<Text>Brak słówek na literę
							<Text color='#fdfdfd' backgroundColor='#f6ae2d'>
								<Center>
									{paginationLetter.toUpperCase()}
								</Center>
							</Text>
						</Text>
					</Flex>
				</Fade> */}
				{paginationElements.length > 0 &&
				<Flex bgColor='#fdfdfd' borderTopRadius='md'>
					<Grid templateColumns={{ lg: 'repeat(2, 1fr)', sm: '1fr' }} width='100%' rowGap='13px' mt={1} marginLeft={3} mb={1}>
						{paginationElements.map(elem =>
							(
								<GridItem key={elem.id} alignSelf='center' overflow='hidden'>
									<Text as='span' onClick={() => handleElemButtonClick(elem)} color='#707070' letterSpacing='-0.54px' fontWeight={700} padding="4px" cursor="pointer">
										{elem.polishWord}
									</Text>
								</GridItem>
							)
						)}
					</Grid>
				</Flex>
				}
				<Flex bgColor='#fdfdfd' borderBottomRadius='md' flexDirection='column'>
					<Flex justifyContent="center">
						{apiCalls.isLoadingPagination === true && <Text fontSize='md' color='gray.400'>Trwa ładowanie, proszę czekać</Text>}
					</Flex>
					<Flex justifyContent="center">
						{(nextPaginationUrl && paginationElements.length !== 0) &&
							<Button isDisabled={nextPaginationUrl && apiCalls.isLoadingPagination === false ? false : true} onClick={() => handleLoadMore()}>
								Załaduj więcej
							</Button>
						}
					</Flex>
				</Flex>
			</Box>
		</Flex>
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
	nextPaginationUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	getPaginationPage: PropTypes.func,
	apiCalls: PropTypes.object,
	clearPaginationElements: PropTypes.func,
	elemToShow: PropTypes.object,
	setElemToShow: PropTypes.func
};
export default connect(mapStateToProps, mapDispatchToProps)(Pagination);