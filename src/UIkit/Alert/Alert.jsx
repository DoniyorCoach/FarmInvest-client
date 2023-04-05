import PropTypes from 'prop-types';

import Typography, { typographyVariants } from '@UIkit/Typography';

import colors from '@Assets/styles/colors';

import './Alert.scss';

const Alert = ({ children, status }) => (
  <div className="alert">
    <Typography
      variant={typographyVariants.Medium16}
      color={status === 'success' ? colors.success : colors.error}
      className="alert__message"
    >
      {children}
    </Typography>
  </div>
);

Alert.propTypes = {
  children: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['error', 'success']).isRequired,
};

export default Alert;
