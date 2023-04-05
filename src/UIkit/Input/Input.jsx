import PropTypes from 'prop-types';

import './Input.scss';

const Input = ({
  type,
  value,
  setValue,
  width,
  placeholder,
  error,
  disabled,
  required,
}) => (
  <div className="input" style={{ width: `${width}` }}>
    <input
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      disabled={disabled}
      required={required}
      placeholder={placeholder}
      autoComplete="off"
      className={error ? 'input--error' : ''}
    />
  </div>
);

Input.defaultProps = {
  type: 'text',
  value: '',
  setValue: () => null,

  width: null,
  placeholder: null,

  error: false,
  disabled: false,
  required: false,
};

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setValue: PropTypes.func,

  width: PropTypes.string,
  placeholder: PropTypes.string,

  required: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
};

export default Input;
