import { ArrayInput, BooleanInput, Create, SimpleForm, SimpleFormIterator, TextInput } from 'react-admin';
import validators from './utils/validators';

const WordCreate = (props) => {
	return (
		<Create {...props} title='Add word to the dictionary'>
			<SimpleForm>
				<TextInput source='polishWord' validate={validators.validatePolishWord}/>
				<ArrayInput source='synonyms'>
					<SimpleFormIterator>
						<TextInput source='singularForm' label='Singular form' validate={validators.validateSynonym}/>
						<TextInput source='pluralCountable' label='Plural Countable Form' validate={validators.validateSynonym}/>
						<TextInput source='pluralUncountable' label='Plural Uncountable Form' validate={validators.validateSynonym}/>
					</SimpleFormIterator>
				</ArrayInput>
				<TextInput source='definition' multiline={true} validate={validators.validateDefinition}/>
				<BooleanInput label="Reference" source="reference" />
			</SimpleForm>
		</Create>
	);
};

export default WordCreate;
