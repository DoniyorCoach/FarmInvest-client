import { useState } from 'react';

import Typography, { typographyVariants } from '@UIkit/Typography';
import Button, { buttonTypes } from '@UIkit/Button';
import Alert from '@UIkit/Alert';

import colors from '@Assets/styles/colors';

import UserLayout from '@Layouts/UserLayout/UserLayout';

import PaymentStore from '@Store/PaymentStore';

import { getBonus } from '@Api/fetchPayment';

import './BonusPage.scss';

const BonusPage = () => {
  const [alert, setAlert] = useState(null);

  const handleCollect = async () => {
    const { status, message } = await getBonus();

    if (status === 200) {
      PaymentStore.setBalanceToBuy(PaymentStore.wallet.balanceToBuy + message);

      setAlert(['success', `Вы успешно забрали бонус в размере ${message} ₽`]);
    } else {
      setAlert(['error', message]);
    }

    setTimeout(() => {
      setAlert(null);
    }, 4000);
  };
  return (
    <UserLayout>
      <div className="bonusPage">
        <div className="bonusPage__title">
          <Typography
            variant={typographyVariants.HeadingH1}
            color={colors.grayLight}
          >
            Ежедневный бонус
          </Typography>
        </div>
        <div className="bonusPage__desc">
          <Typography color={colors.yellow}>
            Бонус выдается 1 раз в 24 часа.
          </Typography>
          <Typography color={colors.yellow}>
            Бонус выдается на счет для покупок.
          </Typography>
          <Typography color={colors.yellow}>
            Сумма бонуса генерируется случайно от 1 до 5 рубля.
          </Typography>
        </div>
        <div className="bonusPage__btn">
          <Button
            type={buttonTypes.Success}
            width="70%"
            onClick={handleCollect}
          >
            Получить бонус
          </Button>
        </div>
        {alert && <Alert status={alert[0]}>{alert[1]}</Alert>}
      </div>
    </UserLayout>
  );
};

export default BonusPage;
