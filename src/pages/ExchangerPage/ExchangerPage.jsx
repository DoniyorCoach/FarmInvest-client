import Tabs from '@Components/Tabs';

import Typography, { typographyVariants } from '@UIkit/Typography';

import colors from '@Assets/styles/colors';

import UserLayout from '@Layouts/UserLayout/UserLayout';

import ExchengeCoinsToRuble from './ExchengeCoinsToRuble';
import Reinvest from './Reinvest';

import './ExchangerPage.scss';

const ExchangerPage = () => {
  const tabs = [
    { id: 1, label: 'Продажа монет', content: <ExchengeCoinsToRuble /> },
    { id: 2, label: 'Реинвест', content: <Reinvest /> },
  ];

  return (
    <UserLayout>
      <div className="exchangerPage">
        <Typography
          variant={typographyVariants.HeadingH1}
          color={colors.grayLight}
        >
          Обменник
        </Typography>
        <Tabs tabs={tabs} defaultTab={2} />
      </div>
    </UserLayout>
  );
};

export default ExchangerPage;
