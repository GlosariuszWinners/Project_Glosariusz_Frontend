import { Center, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setElemToShow } from '../../../ducks/actions';

const WordsSection = ({ paginationLetter, setElemToShow, paginationElements }) => {
	const handleElemButtonClick = (elem) => {
		setElemToShow(elem);
	};
	return (
		<Flex bgColor='#fdfdfd' borderTopRadius='50px' marginTop='88px'>
			<Grid
				templateColumns={{ 'md': 'repeat(2, 1fr)', 'sm': '1fr' }}
				width='100%'
				rowGap='13px'
				mt={1}
				paddingLeft={{ 'sm': '35px', 'md': '25px', 'lg': '45px', 'xl': '55px' }}
				paddingRight={{ 'sm': '35px', 'md': '25px', 'lg': '25px', 'xl': '25px' }}
				marginTop={{ 'sm': '15px', 'md': '45px' }}
				mb={1}
			>
				<GridItem justifySelf={{ 'sm': 'center', 'md': 'flex-start' }}>
					<Center
						bgColor='#f6ae2d'
						color='#fff'
						width={{ 'sm': '64px', 'xl': '67px' }}
						height={{ 'sm': '56px', 'xl': '59px' }}
						boxShadow='0 10px 30px 0 rgba(0, 0, 0, 0.2)'
						borderRadius='20px'
						fontFamily='Ubuntu'
						fontSize={{ 'sm': '30px', 'xl': '45px' }}
						fontWeight='bold'
						letterSpacing='-1px'
						userSelect='none'
					>
						{paginationLetter.toUpperCase()}
					</Center>
				</GridItem>
				<GridItem></GridItem>
				{paginationElements.map(elem =>
					(
						<GridItem key={elem.id} alignSelf='center' overflow='hidden'>
							<Text
								as='span'
								onClick={() => handleElemButtonClick(elem)}
								color='#707070'
								letterSpacing='-0.54px'
								fontWeight={700}
								padding="4px"
								cursor="pointer"
								fontSize={{ 'sm': '27px', 'md': '20px' }}
							>
								{elem.polishWord}
							</Text>
						</GridItem>
					)
				)}
			</Grid>
		</Flex>
	);
};

WordsSection.propTypes = {
	setElemToShow: PropTypes.func,
	paginationElements: PropTypes.array,
	paginationLetter: PropTypes.string
};

const mapStateToProps = (state) => ({
	paginationElements: state.paginationElements,
	paginationLetter: state.paginationLetter
});

const mapDispatchToProps = (dispatch) => ({
	setElemToShow: (payload) => dispatch(setElemToShow(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WordsSection);
