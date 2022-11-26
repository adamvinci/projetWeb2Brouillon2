import { clearAuthenticatedUser } from '../../utils/auths';
import Navbar from '../Navbar/Navbar';
import Navigate from '../Router/Navigate';

const Logout = () => {
  console.log("logout")
  clearAuthenticatedUser();
  Navigate('/');
  Navbar();
};

export default Logout;