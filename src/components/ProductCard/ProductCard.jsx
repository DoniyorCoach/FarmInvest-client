import { useState } from 'react';
import PropTypes from 'prop-types';

import Alert from '@UIkit/Alert';
import Button, { buttonTypes } from '@UIkit/Button';
import Typography, { typographyVariants } from '@UIkit/Typography';

import NotFoundImage from '@Assets/images/notFound.png';
import colors from '@Assets/styles/colors';

import PaymentStore from '@Store/PaymentStore';

import { buyProduct } from '@Api/fetchProducts';

import './ProductCard.scss';

const ProductCard = ({
  id,
  image,
  name,
  income,
  price,
  disabled,
  setBtnsDisabled,
}) => {
  const [status, setStatus] = useState(null);
  const { balanceToBuy } = PaymentStore.wallet;

  const handleBuy = async () => {
    setBtnsDisabled(true);

    if (balanceToBuy >= price) {
      try {
        PaymentStore.setBalanceToBuy(balanceToBuy - price);
        await buyProduct(id);
      } catch (error) {
        setStatus(['error', 'Ошибка сервера']);
      }
      setStatus(['success', 'Благодарим за покупку']);
    } else {
      setStatus(['error', 'недостаточно средств']);
    }

    setTimeout(() => setBtnsDisabled(false), 500);
    setTimeout(() => setStatus(null), 1500);
  };

  return (
    <div className="productCard">
      <img src={image} alt="product" className="productCard__image" />
      <Typography
        variant={typographyVariants.HeadingH2}
        color={colors.secondary}
        className="productCard__name"
      >
        {name}
      </Typography>
      <Typography
        variant={typographyVariants.Regular14}
        color={colors.success}
        className="productCard__price"
      >
        {`Стоимость: ${price} ₽`}
      </Typography>
      <Typography color={colors.gray}>Доход:</Typography>
      <Typography
        variant={typographyVariants.Medium16}
        color={colors.primary}
        className="productCard__statistics"
      >
        {`В час ${income} монет `}
      </Typography>
      <Button
        type={buttonTypes.Success}
        onClick={handleBuy}
        className="productCard__order"
        disabled={disabled}
      >
        ➕ Купить
      </Button>
      {status && <Alert status={status[0]}>{status[1]}</Alert>}
    </div>
  );
};

ProductCard.defaultProps = {
  image: NotFoundImage,
  name: '',
  income: 0,
  price: 0,
  disabled: false,

  setBtnsDisabled: () => null,
};

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string,
  name: PropTypes.string,
  income: PropTypes.number,
  price: PropTypes.number,
  disabled: PropTypes.bool,

  setBtnsDisabled: PropTypes.func,
};

export default ProductCard;
