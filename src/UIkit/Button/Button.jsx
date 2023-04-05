import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Typography from '@UIkit/Typography';

import colors from '@Assets/styles/colors';

import buttonTypes from './ButtonTypes';

import './Button.scss';

const Button = ({
  children,
  type,
  width,
  color,
  className,
  onClick,
  disabled,
  to,
}) => {
  const buttonClass = classnames('button', `button--${type}`, className);
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else {
      onClick();
    }
  };
  return (
    <button
      type="button"
      className={buttonClass}
      disabled={disabled}
      onClick={handleClick}
      style={{ width: `${width}` }}
    >
      <Typography color={color}>{children}</Typography>
    </button>
  );
};

Button.defaultProps = {
  type: 'primary',
  width: null,
  color: null,
  className: '',

  onClick: () => null,

  disabled: false,
  to: null,
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(buttonTypes)),
  color: PropTypes.oneOf(Object.values(colors)),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  width: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  to: PropTypes.string,
};
export default Button;
