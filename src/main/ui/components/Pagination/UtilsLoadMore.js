import { Button, Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPaginationPage } from '../../../ducks/actions';


const UtilsLoadMore = ({ nextPaginationUrl, paginationElements, apiCalls, getPaginationPage }) => {
	const handleLoadMore = () => {
		getPaginationPage(nextPaginationUrl);
	};
	return (
		<Flex justifyContent='center'>
			{(nextPaginationUrl && paginationElements.length !== 0) &&
				<Button onClick={() => handleLoadMore()} isDisabled={nextPaginationUrl && apiCalls.isLoadingPagination}>
					Załaduj więcej
				</Button>
			}
		</Flex>
	);
};

UtilsLoadMore.propTypes = {
	apiCalls: PropTypes.object,
	paginationElements: PropTypes.array,
	nextPaginationUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	getPaginationPage: PropTypes.func
};

const mapStateToProps = (state) => ({
	nextPaginationUrl: state.nextPaginationUrl,
	paginationElements: state.paginationElements,
	apiCalls: state.apiCalls,
});

const mapDispatchToProps = (dispatch) => ({
	getPaginationPage: (url) => dispatch(getPaginationPage(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UtilsLoadMore);
