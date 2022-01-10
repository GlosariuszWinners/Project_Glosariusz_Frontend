import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="navbar__wrapper">
				<div className="navbar__section">
					<Link to="/about" className='navbar__link'>O słowniku</Link>
				</div>
				<div className="navbar__section">
					<Link to="/about" className='navbar__link'>Autorzy</Link>
				</div>
				<div className="navbar__section">
					<Link to="/about" className='navbar__link'>Kontakt</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;