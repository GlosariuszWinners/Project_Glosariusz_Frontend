import { ArrayInput, BooleanInput, Edit, SimpleForm, SimpleFormIterator, TextInput } from 'react-admin';
import validators from './utils/validators';

const WordEdit = (props) => {
	return (
		<Edit {...props} title='Edit existing word'>
			<SimpleForm>
				<TextInput disabled source='id'/>
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
		</Edit>
	);
};

export default WordEdit;
