import { ArrayInput, Create, SimpleForm, SimpleFormIterator, TextInput } from 'react-admin'; 

const WordCreate = (props) => {
	return (
		<Create {...props} title='Add word to the dictionary'>
			<SimpleForm>
				<TextInput source='polishWord'/>
				<ArrayInput source='synonyms'>
					<SimpleFormIterator>
						<TextInput source='singularForm' label='Singular form'/>
						<TextInput source='pluralCountable' label='Plural Countable Form'/>
						<TextInput source='pluralUncountable' label='Plural Uncountable Form'/>
					</SimpleFormIterator>
				</ArrayInput>
				<TextInput source='definition'/>
			</SimpleForm>
		</Create>
	);
};

export default WordCreate;
