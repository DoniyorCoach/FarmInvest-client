import Ceil from '@UIkit/Ceil';
import Typography, { typographyVariants } from '@UIkit/Typography';
import Button, { buttonTypes } from '@UIkit/Button';

import colors from '@Assets/styles/colors/index';

import UserLayout from '@Layouts/UserLayout/UserLayout';

import UserStore from '@Store/UserStore';
import PaymentStore from '@Store/PaymentStore';

import './ProfilePage.scss';

const ProfilePage = () => {
  const { login, email, createdAt, referrer } = UserStore.User;
  const { balanceToBuy, balanceToWithdraw } = PaymentStore.wallet;
  return (
    <UserLayout>
      <div className="profilePage">
        <div className="profilePage__title">
          <Typography
            variant={typographyVariants.HeadingH1}
            color={colors.grayDark}
          >
            Профиль
          </Typography>
        </div>
        <div className="profilePage__info">
          <Ceil left="Псевдоним" right={login} />
          <Ceil left="Дата регистрации" right={createdAt.slice(0, 10)} />
          <Ceil left="Email" right={email} />
          <Ceil left="Реферер" right={referrer} />
        </div>
        <div className="profilePage__wallet">
          <Ceil
            left="На покупки"
            right={`${new Intl.NumberFormat('ru-RU').format(balanceToBuy)} ₽`}
          />
          <Ceil
            left="На вывод"
            right={`${new Intl.NumberFormat('ru-RU').format(
              balanceToWithdraw,
            )} ₽`}
          />
        </div>
        <div className="profilePage__controller">
          <Button
            type={buttonTypes.Danger}
            onClick={() => {
              UserStore.setAuth(false);
            }}
          >
            Выйти с аккаунта
          </Button>
        </div>
      </div>
    </UserLayout>
  );
};

export default ProfilePage;
