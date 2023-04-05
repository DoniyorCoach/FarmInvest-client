import Spinner from '@Assets/images/spinner.svg';

import './LoadingPage.scss';

const LoadingPage = () => (
  <div className="loadingPage">
    <img src={Spinner} alt="spinner" className="loadingPage__spinner" />
  </div>
);

export default LoadingPage;
