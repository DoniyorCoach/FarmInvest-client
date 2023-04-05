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
  const [statusProducts, setStatusProducts] = useState(null);
  const [statusCollect, setStatusCollect] = useState(null);
  const [collect, setCollect] = useState(false);

  useEffect(() => {
    (async () => {
      const { status, message } = await getUserProducts(UserStore.User.id);
      if (status === 200) {
        setProducts(message);
      } else {
        setStatusProducts(message);
      }
    })();
  }, [collect]);

  const handleCollect = async () => {
    const { status, message } = await collectIncome();
    if (status === 200) {
      setCollect(!collect);
      PaymentStore.setCoins(message);
    } else {
      setStatusCollect(message);
    }
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
      {statusProducts && <Alert status="error">{statusProducts}</Alert>}
      {statusCollect && <Alert status="error">{statusCollect}</Alert>}
    </UserLayout>
  );
};

export default FarmPage;
