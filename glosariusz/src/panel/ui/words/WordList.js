import { ArrayField, List, Datagrid, TextField } from 'react-admin'; 
import { WordShowButton, WordDeleteButton } from '..';

const WordList = (props) => {
	return (
		<List {...props} title='List of all words in the dictionary'>
			<Datagrid rowClick="edit">
				<TextField source='id'/>
				<TextField source='polishWord'/>
				<ArrayField source='synonyms'>
					<Datagrid>
						<TextField source='singularForm'/>
						<TextField source='pluralCountable'/>
						<TextField source='pluralUncountable'/>
					</Datagrid>
				</ArrayField>
				<TextField source='definition'/>
				<WordShowButton/>
				<WordDeleteButton/>
			</Datagrid>
		</List>
        
	);
};

export default WordList;
