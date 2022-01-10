import { ArrayInput, BooleanInput, Edit, SimpleForm, SimpleFormIterator, TextInput } from 'react-admin';
import validators from './utils/validators';

const WordEdit = (props) => {
	return (
		<Edit {...props} title='Edytuj istniejące słowo'>
			<SimpleForm>
				<TextInput disabled source='id'/>
				<TextInput source='polishWord' label='Polskie słowo' validate={validators.validatePolishWord}/>
				<ArrayInput source='synonyms' label='Angielskie tłumaczenia'>
					<SimpleFormIterator>
						<TextInput source='singularForm' label='Singular form' validate={validators.validateSynonym}/>
						<TextInput source='pluralCountable' label='Forma mnoga policzalna' validate={validators.validateSynonym}/>
						<TextInput source='pluralUncountable' label='Forma mnoga niepoliczalna' validate={validators.validateSynonym}/>
					</SimpleFormIterator>
				</ArrayInput>
				<TextInput source='definition' label='Definicja' multiline={true} validate={validators.validateDefinition}/>
				<BooleanInput source="reference" label='Referencja'/>
			</SimpleForm>
		</Edit>
	);
};

export default WordEdit;
