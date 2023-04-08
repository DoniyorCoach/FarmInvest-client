import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import Button from '@UIkit/Button';
import Typography from '@UIkit/Typography';
import typographyVariants from '@UIkit/Typography/TypographyVariants';

import colors from '@Assets/styles/colors';
import Coins from '@Assets/images/coins.svg';
import Logo from '@Assets/images/logo.png';

import PaymentStore from '@Store/PaymentStore';

import './Header.scss';

const Header = observer(() => (
  <div className="header">
    <Link to="/">
      <img src={Logo} alt="logo" className="header__logo" />
    </Link>
    <Button to="/" className="header__main">
      Главная
    </Button>
    <div className="header__balance">
      <Typography variant={typographyVariants.HeadingH2} color={colors.success}>
        {new Intl.NumberFormat('ru-RU').format(PaymentStore.wallet.coins)}
      </Typography>
      <img src={Coins} alt="coins" />
    </div>
  </div>
));

export default Header;
