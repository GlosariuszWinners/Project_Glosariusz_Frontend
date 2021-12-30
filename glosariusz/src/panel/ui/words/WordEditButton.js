import { EditButton } from 'react-admin';

// eslint-disable-next-line react/prop-types
const WordEditButton = ({ record }) => (
	<EditButton basePath="/words" label="Edit" record={record} />
);

export default WordEditButton;
