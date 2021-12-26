import { DeleteButton } from 'react-admin';

// eslint-disable-next-line react/prop-types
const WordDeleteButton = ({ record }) => {
	return <DeleteButton basePath='/words' label='Delete' record={record}/>;
};

export default WordDeleteButton;

