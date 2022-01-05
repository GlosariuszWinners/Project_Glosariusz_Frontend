import { EditButton } from 'react-admin';

// eslint-disable-next-line react/prop-types
const WordEditButton = ({ record }) => (
	<EditButton basePath="/words" label="Edytuj" record={record} />
);

export default WordEditButton;
