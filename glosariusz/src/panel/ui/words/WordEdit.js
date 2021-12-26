import { ArrayInput, BooleanInput, Edit, SimpleForm, SimpleFormIterator, TextInput } from 'react-admin'; 

const WordEdit = (props) => {
	return (
		<Edit {...props} title='Edit existing word'>
			<SimpleForm>
				<TextInput disabled source='id'/>
				<TextInput source='polishWord'/>
				<ArrayInput source='synonyms'>
					<SimpleFormIterator>
						<TextInput source='singularForm' label='Singular form'/>
						<TextInput source='pluralCountable' label='Plural Countable Form'/>
						<TextInput source='pluralUncountable' label='Plural Uncountable Form'/>
					</SimpleFormIterator>
				</ArrayInput>
				<TextInput source='definition' multiline={true}/>
				<BooleanInput label="Reference" source="reference" />
			</SimpleForm>
		</Edit>
	);
};

export default WordEdit;
