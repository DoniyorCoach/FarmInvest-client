import PropTypes from 'prop-types';

import Typography, { typographyVariants } from '@UIkit/Typography';

import colors from '@Assets/styles/colors/index';

import './Ceil.scss';

const Ceil = ({
  left,
  leftColor,
  center,
  centerColor,
  right,
  rightColor,
  width,
  className,
  variant,
}) => (
  <div className={`ceil ${className}`} style={{ width: `${width}` }}>
    <Typography variant={variant} color={leftColor}>
      {left}
    </Typography>
    <Typography variant={variant} color={centerColor}>
      {center}
    </Typography>
    <Typography variant={variant} color={rightColor}>
      {right}
    </Typography>
  </div>
);

Ceil.defaultProps = {
  left: '',
  right: '',
  center: '',
  width: null,
  className: '',
  variant: typographyVariants.Medium16,
  leftColor: colors.grayDark,
  centerColor: colors.primary,
  rightColor: colors.cyan,
};

Ceil.propTypes = {
  left: PropTypes.string,
  right: PropTypes.string,
  center: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(Object.values(typographyVariants)),
  leftColor: PropTypes.oneOf(Object.values(colors)),
  centerColor: PropTypes.oneOf(Object.values(colors)),
  rightColor: PropTypes.oneOf(Object.values(colors)),
};

export default Ceil;
