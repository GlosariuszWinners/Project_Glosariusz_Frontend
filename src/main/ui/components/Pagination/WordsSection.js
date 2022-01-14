import { Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setElemToShow } from '../../../ducks/actions';

const WordsSection = ({ setElemToShow, paginationElements }) => {
	const handleElemButtonClick = (elem) => {
		setElemToShow(elem);
	};
	return (
		<Flex bgColor='#fdfdfd' borderTopRadius='md'>
			<Grid
				templateColumns={{ 'lg': 'repeat(2, 1fr)', 'sm': '1fr' }}
				width='100%'
				rowGap='13px'
				mt={1}
				marginLeft={{ 'sm': '15px', 'lg': '45px' }}
				marginTop={{ 'sm': '15px', 'lg': '45px' }}
				mb={1}
			>
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
	);
};

WordsSection.propTypes = {
	handleElemButtonClick: PropTypes.func,
	setElemToShow: PropTypes.func,
	paginationElements: PropTypes.array,
};

const mapStateToProps = (state) => ({
	paginationElements: state.paginationElements,
});

const mapDispatchToProps = (dispatch) => ({
	setElemToShow: (payload) => dispatch(setElemToShow(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WordsSection);
