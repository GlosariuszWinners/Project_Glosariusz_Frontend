import { useEffect } from 'react';
import { ArrayInput, Edit, SimpleForm, SimpleFormIterator, TextInput } from 'react-admin';
import validators from './utils/validators';

const WordEdit = (props) => {
	console.log(props);
	useEffect(() => {
		// eslint-disable-next-line react/prop-types
		document.title = `Edytuj ${props?.id}`;
	}, []);
	return (
		<Edit {...props} title='Edytuj istniejące słowo'>
			<SimpleForm>
				<TextInput disabled source='id'/>
				<TextInput source='polishWord' label='Polskie słowo' validate={validators.validatePolishWord}/>
				<ArrayInput source='synonyms' label='Angielskie tłumaczenia'>
					<SimpleFormIterator>
						<TextInput source='singularForm' label='Singular form' validate={validators.validateSynonym}/>
						<TextInput source='pluralForm' label='Forma mnoga' validate={validators.validateSynonym}/>
					</SimpleFormIterator>
				</ArrayInput>
				<TextInput source='definition' label='Definicja' multiline={true} validate={validators.validateDefinition}/>
			</SimpleForm>
		</Edit>
	);
};

export default WordEdit;
