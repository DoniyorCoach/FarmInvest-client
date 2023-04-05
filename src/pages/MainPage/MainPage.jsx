import Button from '@UIkit/Button';
import buttonTypes from '@UIkit/Button/ButtonTypes';

import UserLayout from '@Layouts/UserLayout';

import pages from '@Utils/pages';

import './MainPage.scss';

const MainPage = () => (
  <UserLayout>
    <div className="mainPage">
      {pages.map((page) => (
        <Button
          key={page.path}
          type={buttonTypes.Cyan}
          to={page.path}
          width="35%"
        >
          {page.name}
        </Button>
      ))}
    </div>
  </UserLayout>
);

export default MainPage;
