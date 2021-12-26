import { ShowButton } from 'react-admin';

// eslint-disable-next-line react/prop-types
const WordShowButton = ({ record }) => (
	<ShowButton basePath="/words" label="Show" record={record} />
);

export default WordShowButton;
