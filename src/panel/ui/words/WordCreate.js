import { useEffect } from 'react';
import { ArrayInput, Create, SimpleForm, SimpleFormIterator, TextInput } from 'react-admin';
import validators from './utils/validators';

const WordCreate = (props) => {
	useEffect(() => {
		document.title = 'Dodawanie słowa';
	}, []);
	return (
		<Create {...props} title='Dodaj słowo do słownika'>
			<SimpleForm>
				<TextInput source='polishWord' validate={validators.validatePolishWord} label='Polskie słowo'/>
				<ArrayInput source='synonyms' label='Angielskie tłumaczenia'>
					<SimpleFormIterator>
						<TextInput source='singularForm' label='Forma pojedyncza' validate={validators.validateSynonym}/>
						<TextInput source='pluralForm' label='Forma mnoga' validate={validators.validateSynonym}/>
					</SimpleFormIterator>
				</ArrayInput>
				<TextInput source='definition' label='Definicja' multiline={true} validate={validators.validateDefinition}/>
			</SimpleForm>
		</Create>
	);
};

export default WordCreate;
