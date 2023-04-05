import Button, { buttonTypes } from '@UIkit/Button';
import Typography from '@UIkit/Typography';
import typographyVariants from '@UIkit/Typography/TypographyVariants';

import colors from '@Assets/styles/colors';

import './ErrorPage.scss';

const ErrorPage = () => (
  <div className="errorPage">
    <Typography variant={typographyVariants.HeadingH1} color={colors.primary}>
      Ошибка 404
    </Typography>
    <Typography variant={typographyVariants.Medium16} color={colors.grayLight}>
      Упс, похоже эта страница не работает.
    </Typography>
    <Typography variant={typographyVariants.Regular14} color={colors.success}>
      Зато мы работаем круглосуточно.
    </Typography>
    <Button type={buttonTypes.Danger} to="/" width="20%">
      Перейти в главную
    </Button>
  </div>
);

export default ErrorPage;
