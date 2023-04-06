import { useState } from 'react';

import Button, { buttonTypes } from '@UIkit/Button';
import Typography, { typographyVariants } from '@UIkit/Typography';
import Input from '@UIkit/Input';
import Alert from '@UIkit/Alert';

import colors from '@Assets/styles/colors';

import { loginValidate } from '@Helpers/validators';

import UserStore from '@Store/UserStore';
import PaymentStore from '@Store/PaymentStore';

import { login } from '@Api/fetchUser';

import Logo from '../../assets/images/logo.png';

import './LoginPage.scss';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [valid, setValid] = useState(null);
  const [apiData, setApiData] = useState(null);

  const handleSubmit = async () => {
    // VALIDATE
    const validateResult = loginValidate(email, password);
    if (typeof validateResult === 'string') {
      setValid(validateResult);
      return;
    }
    setValid('');

    // FETCH API
    const { status, message } = await login(
      validateResult[0],
      validateResult[1],
    );

    if (status !== 200) {
      setApiData(['error', message]);
    } else {
      setApiData(null);
      localStorage.setItem('token', message.token);
      UserStore.setUser(message.user);
      UserStore.setAuth(true);
      await PaymentStore.getWallet();
    }
  };
  return (
    <div className="loginPage">
      <img src={Logo} alt="logo" className="loginPage__logo" />
      <Typography variant={typographyVariants.HeadingH1} color={colors.primary}>
        Авторизация
      </Typography>
      <Input
        type="email"
        width="35%"
        value={email}
        setValue={setEmail}
        placeholder="Введите почту"
      />
      <Input
        type="password"
        width="35%"
        value={password}
        setValue={setPassword}
        placeholder="Введите пароль"
      />
      <Button type={buttonTypes.Success} width="25%" onClick={handleSubmit}>
        Войти в аккаунт
      </Button>
      <Button type={buttonTypes.Primary} width="25%" to="/register">
        &#10528; Ещё нет аккаунта ? &#10527;
      </Button>
      {valid && <Alert status="error">{valid}</Alert>}
      {apiData && <Alert status={apiData[0]}>{apiData[1]}</Alert>}
    </div>
  );
};

export default LoginPage;
