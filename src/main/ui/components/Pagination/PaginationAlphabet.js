import { Box, Button } from '@chakra-ui/react';
import { getPolishAlphabet } from './utils/alphabet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { wordsService } from '../../../ducks/words/operations';
import { useEffect, useState } from 'react';

const PaginationAlphabet = ({ setPaginationLetter, paginationLetter }) => {
	const handleChangePaginationLetter = (letter) => {
		setPaginationLetter(letter);
	};
	
	const [alphabet, setAlphabet] = useState();
	console.log(alphabet);
	useEffect(() => {
		const getAlphabet = async () => {
			const data = await getPolishAlphabet();
			setAlphabet(data);
		};
		getAlphabet();
	}, []);
	return (
		<Box display={{ 'sm': 'block', 'xl': 'flex' }}
			justifyContent={{ 'sm': 'center' }}
			overflowX={{ 'sm': 'auto', 'xl': 'visible' }}
			whiteSpace={{ 'sm': 'nowrap' }}
			flexWrap={{ 'xl': 'wrap' }}
			marginTop='59px'
			marginBottom={5}
			as='section'
		>
			{alphabet && alphabet.map(letter => (
				<Link to="/" key={letter}>
					<Button
						bgColor={letter === paginationLetter ? 'dark-orange' : 'transparent'}
						color='light-white'
						width={{ 'sm': '42px', 'xl': '55px' }}
						_active={{ 'bgColor': 'dark-orange' }}
						_hover={{ 'bgColor': { 'lg': 'rgba(119, 203, 229, 0.5)' } }}
						_disabled={{ 'cursor': 'not-allowed' }}
						height={{ 'sm': '45px', 'xl': '32px' }}
						marginRight={{ 'sm': '5px' ,'lg': '17px' }}
						marginBottom={{ 'sm': '15px', 'xl': '3px' }}
						marginTop='10px'
						fontSize={{ 'sm': '25px' }}
						onClick={() => handleChangePaginationLetter(letter)}
						isActive={letter === paginationLetter}
						isDisabled={letter === paginationLetter}>
						{letter.toUpperCase()}
					</Button>
				</Link>
			)
			)}
					
		</Box>
	);
};

const mapStateToProps = (state) => ({
	paginationLetter: state.words.paginationLetter
});

const mapDispatchToProps = (dispatch) => ({
	setPaginationLetter: (letter) => dispatch(wordsService.set(letter))
});

PaginationAlphabet.propTypes = {
	setPaginationLetter: PropTypes.func,
	paginationLetter: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(PaginationAlphabet);
