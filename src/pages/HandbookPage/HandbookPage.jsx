import Typography from '@UIkit/Typography/Typography';
import typographyVariants from '@UIkit/Typography/TypographyVariants';

import colors from '@Assets/styles/colors/index';

import UserLayout from '@Layouts/UserLayout';

import './HandbookPage.scss';

const HandbookPage = () => (
  <UserLayout>
    <div className="handbookPage">
      <div className="handbookPage__title">
        <Typography
          variant={typographyVariants.HeadingH1}
          color={colors.grayLight}
        >
          Справочник
        </Typography>
      </div>
      <div className="handbookPage__advice">
        <Typography color={colors.primary}>
          В игре вы можете купить различных активы, каждое из которых будет
          приносить доход каждый час. Каждые активы имеет свою стоимость и
          уровень дохода. Перед покупкой актива, обратите внимание на его
          цену и потенциальный доход.
        </Typography>
        <Typography color={colors.secondary}>
          Вы можете обменять заработанные в игре монеты на деньги. Обратите
          внимание, что вы должны накопить определенное количество монет, прежде
          чем сможете обменять их на деньги.
        </Typography>
        <Typography color={colors.success}>
          Кроме дохода от активов, вы можете получать ежедневный бонус в
          размере от 1 рубля до 5 рублей. Это поможет вам увеличить ваш общий
          доход и быстрее достигнуть цели.
        </Typography>
      </div>
      <div className="handbookPage__benefits">
        <Typography color={colors.yellow}>
          Развитие навыков начальной инвестиции: Игра поможет вам научиться
          принимать решения, связанные с инвестированием, и улучшить свои
          финансовые навыки. Вы будете вынуждены распределять свои ресурсы между
          различными инвестициями и принимать решения, основанные на
          потенциальном доходе.
        </Typography>
        <Typography color={colors.cyan}>
          Игра предоставляет увлекательное время препровождение, которое поможет
          вам расслабиться и забыть о повседневных проблемах.
        </Typography>
      </div>
    </div>
  </UserLayout>
);

export default HandbookPage;
