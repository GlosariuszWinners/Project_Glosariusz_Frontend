import { ArrayField, Datagrid, List, TextField, TextInput } from 'react-admin';
import { WordDeleteButton, WordEditButton } from '..';

const wordFilters = [
	<TextInput source='polishWord' placeholder='Wpisz polskie słowo' label='Wyszukaj słowo' alwaysOn key={1}/>,
];

const WordList = (props) => {
	return (
		<List {...props} title='Lista słówek dostępnych w słowniku' filters={wordFilters}>
			<Datagrid>
				<TextField source='id'/>
				<TextField source='polishWord' label='Polskie słowo'/>
				<ArrayField source='synonyms' label='Angielskie tłumaczenia'>
					<Datagrid>
						<TextField source='singularForm' label='Forma pojedyncza'/>
						<TextField source='pluralCountable' label='Forma mnoga policzalna'/>
						<TextField source='pluralUncountable' label='Forma mnoga niepoliczalna'/>
					</Datagrid>
				</ArrayField>
				<TextField source='definition' label='Definicja'/>
				<WordEditButton/>
				<WordDeleteButton/>
			</Datagrid>
		</List>
        
	);
};

export default WordList;
