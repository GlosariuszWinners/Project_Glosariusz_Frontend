import { MenuItemLink } from 'react-admin';
import TranslateIcon from '@material-ui/icons/Translate'; 

const PanelMenu = (props) => {
	return (
		<div>
			<MenuItemLink
				to='/words'
				primaryText='Słownik'
				leftIcon={<TranslateIcon />}
				exact
				{...props}
			/>
		</div>
	);
};

export default PanelMenu;
