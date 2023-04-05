import { useEffect, useState } from 'react';

import Alert from '@UIkit/Alert';
import Button, { buttonTypes } from '@UIkit/Button';
import Input from '@UIkit/Input';
import Typography from '@UIkit/Typography';

import colors from '@Assets/styles/colors/index';

import round from '@Helpers/round';

import PaymentStore from '@Store/PaymentStore';

import './ExchengeCoinsToRuble.scss';

const ExchengeCoinsToRuble = () => {
  const [coinValue, setCoinValue] = useState('');
  const [rubleValue, setRublValue] = useState('');
  const [status, setStatus] = useState(null);
  const { balanceToWithdraw, balanceToBuy, coins } = PaymentStore.wallet;

  const exchengeValue = round(Number(coinValue) / 3350, 2);

  useEffect(() => {
    if (Number(coinValue) > 0) setRublValue(`${exchengeValue} ₽`);
  }, [exchengeValue, coinValue]);

  const handleExchenge = () => {
    if (Number(coinValue) >= 3500) {
      if (coins >= Number(coinValue)) {
        PaymentStore.setCoins(coins - Math.round(Number(coinValue)));
        PaymentStore.setBalanceToBuy(
          round(balanceToBuy + exchengeValue * 0.4),
          2,
        );
        PaymentStore.setBalanceToWithdraw(
          round(balanceToWithdraw + exchengeValue * 0.6, 2),
        );

        setCoinValue('');
        setRublValue('');
        setStatus(['success', 'Успешно']);
      } else {
        setStatus(['error', 'Недостаточно средств']);
      }
    } else {
      setStatus(['error', 'минимальное количество для продажи 3500 монет']);
    }

    setTimeout(() => {
      setStatus(null);
    }, 2000);
  };

  return (
    <div className="exchengeCoinsToRuble">
      <div className="exchengeCoinsToRuble__title">
        <Typography color={colors.primary}>
          Здесь вы можете продать монеты. После продажи 40% попадает на баланс
          для покупок, a остальные 60% на баланс для вывода
        </Typography>
      </div>
      <Input
        type="number"
        value={coinValue}
        setValue={setCoinValue}
        placeholder="Отдаете золото"
      />
      <Input value={rubleValue} placeholder="Получаете рублей" disabled />
      <Button type={buttonTypes.Cyan} width="60%" onClick={handleExchenge}>
        Обменять
      </Button>
      {status && <Alert status={status[0]}>{status[1]}</Alert>}
    </div>
  );
};

export default ExchengeCoinsToRuble;
