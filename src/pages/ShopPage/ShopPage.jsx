import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

import ProductCard from '@Components/ProductCard';

import Typography, { typographyVariants } from '@UIkit/Typography';
import Alert from '@UIkit/Alert/Alert';

import colors from '@Assets/styles/colors';

import UserLayout from '@Layouts/UserLayout';

import { getAllProducts } from '@Api/fetchProducts';

import './ShopPage.scss';

const ShopPage = observer(() => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [btnsDisabled, setBtnsDisabled] = useState(false);

  useEffect(() => {
    (async () => {
      const { status, message } = await getAllProducts();
      if (status === 200) {
        setProducts(message);
      } else {
        setError(message);
      }
    })();
  }, [btnsDisabled]);

  return (
    <UserLayout>
      {products && (
        <div className="shopPage">
          <div className="shopPage__title">
            <Typography
              variant={typographyVariants.HeadingH1}
              color={colors.grayLight}
            >
              Магазин
            </Typography>
          </div>
          <div className="shopPage__content">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                id={product._id}
                name={product.name}
                price={product.price}
                income={product.incomePerHour}
                image={`${process.env.REACT_APP_API_MEDIA}/${product.image}`}
                disabled={btnsDisabled}
                setBtnsDisabled={setBtnsDisabled}
              />
            ))}
          </div>
        </div>
      )}
      {error && <Alert status="error">{error}</Alert>}
    </UserLayout>
  );
});

export default ShopPage;
