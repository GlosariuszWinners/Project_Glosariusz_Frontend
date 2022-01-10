import {
	required,
	minLength,
	maxLength,
} from 'react-admin';

const validatePolishWord = [required(), minLength(2), maxLength(100)];
const validateDefinition = [required(), minLength(2), maxLength(250)];
const validateSynonym = [minLength(2), maxLength(100)];

const validators = {
	validatePolishWord,
	validateDefinition,
	validateSynonym
};

export default validators;