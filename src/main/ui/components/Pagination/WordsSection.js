import { Center, Grid, GridItem, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { wordDetailsService } from './../../../ducks/wordDetails/operations';
import { useHistory } from 'react-router';
import InfiniteScroll from 'react-infinite-scroll-component';
import { wordsService } from '../../../ducks/words/operations';


const WordsSection = ({ paginationLetter, setWordDetails, words, getWordsByUrl, nextPaginationUrl }) => {
	const history = useHistory();

	const handleElemButtonClick = (elem) => {
		setWordDetails(elem);
		history.push(`/slownik/${elem.id}`);
	};

	const handleLoadMore = () => {
		getWordsByUrl(nextPaginationUrl);
	};

	return (
		<InfiniteScroll
			dataLength={words.length}
			next={handleLoadMore}
			hasMore={nextPaginationUrl}
			style={{ background:  '#fdfdfd', borderTopLeftRadius: '50px', borderTopRightRadius: '50px' }}
			endMessage={
				<p style={{ textAlign: 'center' }}>
					<b>Załadowałeś wszystkie słowa</b>
				</p>
			}
		>
			<Grid
				templateColumns={{ 'md': 'repeat(2, 1fr)', 'sm': '1fr' }}
				bgColor='light-white'
				borderTopRadius='50px'
				width='100%'
				rowGap='13px'
				paddingTop='35px'
				paddingLeft={{ 'sm': '35px', 'md': '25px', 'lg': '45px', 'xl': '55px' }}
				paddingRight={{ 'sm': '35px', 'md': '25px', 'lg': '25px', 'xl': '25px' }}
				// marginTop={{ 'sm': '15px', 'md': '45px' }}
				as='main'
			>
				<GridItem justifySelf={{ 'sm': 'center', 'md': 'flex-start' }}>
					<Center
						bgColor='dark-orange'
						color='white'
						width={{ 'sm': '64px', 'xl': '67px' }}
						height={{ 'sm': '56px', 'xl': '59px' }}
						boxShadow='0 10px 30px 0 rgba(0, 0, 0, 0.2)'
						borderRadius='20px'
						fontFamily='Ubuntu'
						fontSize={{ 'sm': '30px', 'xl': '45px' }}
						fontWeight='bold'
						letterSpacing='-1px'
						marginBottom='5px'
						userSelect='none'
					>
						{paginationLetter.toUpperCase()}
					</Center>
				</GridItem>
				<GridItem></GridItem>
				{words.map(elem =>
					(
						<GridItem key={elem.id} alignSelf='center' overflow='hidden'>
							<Text
								onClick={() => handleElemButtonClick(elem)}
								as='span'
								color='dark-gray'
								letterSpacing='-0.54px'
								fontWeight={700}
								padding='4px'
								cursor='pointer'
								fontSize={{ 'sm': '23px', 'md': '20px' }}
							>
								{elem.polishWord}
							</Text>
						</GridItem>
					)
				)}
			
			</Grid>
		</InfiniteScroll>
	);
};


const mapStateToProps = (state) => ({
	words: state.words.words,
	paginationLetter: state.words.paginationLetter,
	nextPaginationUrl: state.words.nextPaginationUrl,
});

const mapDispatchToProps = (dispatch) => ({
	setWordDetails: (payload) => dispatch(wordDetailsService.set(payload)),
	getWordsByUrl: (url) => dispatch(wordsService.getByUrl(url)),
});

WordsSection.propTypes = {
	setWordDetails: PropTypes.func,
	words: PropTypes.array,
	paginationLetter: PropTypes.string,
	getWordsByUrl: PropTypes.func,
	nextPaginationUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default connect(mapStateToProps, mapDispatchToProps)(WordsSection);
