import { ArrayInput, BooleanInput, Create, SimpleForm, SimpleFormIterator, TextInput } from 'react-admin';
import validators from './utils/validators';

const WordCreate = (props) => {
	return (
		<Create {...props} title='Dodaj słowo do słownika'>
			<SimpleForm>
				<TextInput source='polishWord' validate={validators.validatePolishWord} label="Polskie słowo"/>
				<ArrayInput source='synonyms' label='Angielskie tłumaczenia'>
					<SimpleFormIterator>
						<TextInput source='singularForm' label='Forma pojedyncza' validate={validators.validateSynonym}/>
						<TextInput source='pluralCountable' label='Forma mnoga policzalna' validate={validators.validateSynonym}/>
						<TextInput source='pluralUncountable' label='Forma mnoga niepoliczalna' validate={validators.validateSynonym}/>
					</SimpleFormIterator>
				</ArrayInput>
				<TextInput source='definition' label='Definicja' multiline={true} validate={validators.validateDefinition}/>
				<BooleanInput source='reference' label='Referencja'/>
			</SimpleForm>
		</Create>
	);
};

export default WordCreate;
