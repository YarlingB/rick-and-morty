import { Link } from 'react-router-dom';
import ROUTES from 'routes/routes';
import logo from '../../../assets/rick-morty-logo.svg';

import './styles.scss';

const RMHeader = () => {
  return (
    <header>
      <Link to={ROUTES.ROOT} className='logo_wrapper'>
        <img src={logo} className='logo' alt='logo' />
      </Link>
    </header>
  );
};

export default RMHeader;
