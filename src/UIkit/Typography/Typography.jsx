import PropTypes from 'prop-types';
import classnames from 'classnames';

import colors from '@Assets/styles/colors';

import typographyVariants from './TypographyVariants';

import './Typography.scss';

const Typography = ({ variant, color, className, children }) => {
  const typographyClass = classnames(
    'typography',
    `typography--${variant}`,
    className,
  );

  return (
    <p className={typographyClass} style={{ color: `${color}` }}>
      {children}
    </p>
  );
};

Typography.defaultProps = {
  variant: typographyVariants.Regular16,
  color: colors.white,
  className: '',
};

Typography.propTypes = {
  variant: PropTypes.oneOf(Object.values(typographyVariants)),
  color: PropTypes.oneOf(Object.values(colors)),

  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]).isRequired,
};

export default Typography;
