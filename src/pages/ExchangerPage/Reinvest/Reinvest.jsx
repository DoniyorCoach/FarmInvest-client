import { useEffect, useState } from 'react';

import Alert from '@UIkit/Alert';
import Button, { buttonTypes } from '@UIkit/Button';
import Input from '@UIkit/Input';
import Typography from '@UIkit/Typography';

import colors from '@Assets/styles/colors/index';

import round from '@Helpers/round';

import PaymentStore from '@Store/PaymentStore';

import './Reinvest.scss';

const Reinvest = () => {
  const [withdrawnRuble, setWithdrawnRuble] = useState('');
  const [replinishedRuble, setReplinishedRuble] = useState('');
  const [status, setStatus] = useState(null);
  const { balanceToWithdraw, balanceToBuy } = PaymentStore.wallet;

  const exchengeValue = round(
    Number(withdrawnRuble) + Number(withdrawnRuble) * 0.15,
    2,
  );

  useEffect(() => {
    if (Number(withdrawnRuble) > 0) setReplinishedRuble(`${exchengeValue} ₽`);
  }, [exchengeValue, withdrawnRuble]);

  const handleExchenge = () => {
    if (Number(withdrawnRuble) >= 5) {
      if (balanceToWithdraw >= Number(withdrawnRuble)) {
        PaymentStore.setBalanceToWithdraw(
          round(balanceToWithdraw - Number(withdrawnRuble), 2),
        );
        PaymentStore.setBalanceToBuy(round(balanceToBuy + exchengeValue, 2));

        setWithdrawnRuble('');
        setReplinishedRuble('');
        setStatus(['success', 'Успешно']);
      } else {
        setStatus(['error', 'Недостаточно средств']);
      }
    } else {
      setStatus(['error', 'Минимальная сумма обмена 5 рублей']);
    }

    setTimeout(() => {
      setStatus(null);
    }, 2000);
  };

  return (
    <div className="reinvest">
      <div className="reinvest__title">
        <Typography color={colors.primary}>
          Обмен баланса для вывода на баланс для покупок. При обмене баланса вы
          получаете бонус + 15% на счет для покупок
        </Typography>
      </div>
      <Input
        type="number"
        value={withdrawnRuble}
        setValue={setWithdrawnRuble}
        placeholder="Отдаете рублей"
      />
      <Input value={replinishedRuble} placeholder="Получаете рублей" disabled />
      <Button type={buttonTypes.Cyan} width="60%" onClick={handleExchenge}>
        Обменять
      </Button>
      {status && <Alert status={status[0]}>{status[1]}</Alert>}
    </div>
  );
};

export default Reinvest;
