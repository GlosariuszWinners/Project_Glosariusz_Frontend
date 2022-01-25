import { Center, Grid, GridItem, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { wordDetailsService } from './../../../ducks/wordDetails/operations';
import { useHistory } from 'react-router';


const WordsSection = ({ paginationLetter, setWordDetails, words }) => {
	const history = useHistory();
	const handleElemButtonClick = (elem) => {
		setWordDetails(elem);
		history.push(`/slownik/${elem.id}`);
	};

	return (
		<Grid
			templateColumns={{ 'md': 'repeat(2, 1fr)', 'sm': '1fr' }}
			bgColor='light-white'
			borderTopRadius='50px'
			width='100%'
			rowGap='13px'
			marginTop='88px'
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
	);
};


const mapStateToProps = (state) => ({
	words: state.words.words,
	paginationLetter: state.words.paginationLetter,
});

const mapDispatchToProps = (dispatch) => ({
	setWordDetails: (payload) => dispatch(wordDetailsService.set(payload)),
});

WordsSection.propTypes = {
	setWordDetails: PropTypes.func,
	words: PropTypes.array,
	paginationLetter: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(WordsSection);
