import PropTypes from 'prop-types';

import Typography, { typographyVariants } from '@UIkit/Typography';

import colors from '@Assets/styles/colors/index';

import './BoughtCard.scss';

const BoughtCard = ({ name, income, amount }) => (
  <div className="boughtCard">
    <Typography
      variant={typographyVariants.HeadingH2}
      color={colors.secondary}
      className="boughtCard__name"
    >
      {name}
    </Typography>
    <Typography
      variant={typographyVariants.Medium16}
      color={colors.primary}
      className="boughtCard__amount"
    >
      {`Количество: ${amount}`}
    </Typography>
    <div className="boughtCard__income">
      <Typography variant={typographyVariants.Regular14} color={colors.gray}>
        Заработанные монеты:
      </Typography>
      <Typography variant={typographyVariants.Medium16} color={colors.success}>
        {income}
      </Typography>
    </div>
  </div>
);

BoughtCard.defaultProps = {
  name: '',
  amount: 0,
  income: 0,
};

BoughtCard.propTypes = {
  name: PropTypes.string,
  amount: PropTypes.number,
  income: PropTypes.number,
};

export default BoughtCard;
