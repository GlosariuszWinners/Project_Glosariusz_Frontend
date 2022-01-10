import { DeleteButton } from 'react-admin';

// eslint-disable-next-line react/prop-types
const WordDeleteButton = ({ record }) => {
	return <DeleteButton basePath='/words' label='Usuń' record={record}/>;
};

export default WordDeleteButton;

