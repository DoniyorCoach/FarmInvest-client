import PropTypes from 'prop-types';

import Header from '@Components/Header';

import './UserLayout.scss';

const UserLayout = ({ children }) => (
  <div className="userLayout">
    <Header />
    {children}
  </div>
);

UserLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserLayout;
