import { ArrayField, List, Datagrid, TextField, BooleanField } from 'react-admin'; 

const WordList = (props) => {
	return (
		<List {...props} title='List of all words in the dictionary'>
			<Datagrid>
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
				<BooleanField label='Reference' source='reference'/>
			</Datagrid>
		</List>
        
	);
};

export default WordList;
