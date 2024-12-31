import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const UserButtons = () => {
  return (
    <div>
      <button className="px-2 relative">
        <FontAwesomeIcon icon={faBagShopping} />
        <div
          id="cart-amount"
          className="absolute inline-flex items-center justify-center w-6 h-6 font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2"
        >
          3
        </div>
      </button>
      <Link to="/history" className="px-2">
        <FontAwesomeIcon icon={faUser} />
      </Link>
    </div>
  );
};

export default UserButtons;
