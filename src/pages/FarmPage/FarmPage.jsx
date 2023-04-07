import { useEffect, useState } from 'react';

import BoughtCard from '@Components/BoughtCard';

import Typography, { typographyVariants } from '@UIkit/Typography';
import Button, { buttonTypes } from '@UIkit/Button';
import Alert from '@UIkit/Alert/Alert';

import colors from '@Assets/styles/colors';

import UserLayout from '@Layouts/UserLayout';

import UserStore from '@Store/UserStore';
import PaymentStore from '@Store/PaymentStore';

import { collectIncome, getUserProducts } from '@Api/fetchProducts';

import './FarmPage.scss';

const FarmPage = () => {
  const [products, setProducts] = useState('');
  const [error, setError] = useState(null);
  const [collected, setCollected] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(false);

  useEffect(() => {
    (async () => {
      const { status, message } = await getUserProducts(UserStore.User.id);
      if (status === 200) {
        setProducts(message);
      } else {
        setError(message);
      }
    })();
  }, [collected]);

  const handleCollect = async () => {
    setBtnDisabled(true);
    const { status, message } = await collectIncome();

    if (status === 200) {
      setCollected(!collected);
      PaymentStore.setCoins(message);
    } else {
      setError(message);
    }

    setTimeout(() => {
      setBtnDisabled(false);
    }, 1500);
  };

  return (
    <UserLayout>
      {products.length > 0 ? (
        <div className="farmPage">
          <Typography
            variant={typographyVariants.HeadingH1}
            color={colors.grayLight}
            className="farmPage__title"
          >
            Моя ферма
          </Typography>
          {error && <Alert status="error">{error}</Alert>}
          <div className="farmPage__content">
            {products.map((product) => (
              <BoughtCard
                key={product.id}
                image={product.image}
                name={product.name}
                amount={product.count}
                income={product.income}
              />
            ))}
          </div>
          <Button
            type={buttonTypes.Success}
            width="20%"
            onClick={handleCollect}
            className="farmPage__btn"
            disabled={btnDisabled}
          >
            Собрать
          </Button>
        </div>
      ) : (
        typeof products === 'object' && (
          <Typography
            variant={typographyVariants.HeadingH2}
            color={colors.secondary}
            className="null"
          >
            У вас нет вложений
          </Typography>
        )
      )}
    </UserLayout>
  );
};

export default FarmPage;
