import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button, { buttonTypes } from '@UIkit/Button';
import Typography, { typographyVariants } from '@UIkit/Typography';
import Input from '@UIkit/Input';
import Alert from '@UIkit/Alert';

import colors from '@Assets/styles/colors';

import { registerValidate } from '@Helpers/validators';

import { register } from '@Api/fetchUser';

import Logo from '../../assets/images/logo.png';

import './RegisterPage.scss';

const RegisterPage = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [valid, setValid] = useState(null);
  const [apiData, setApiData] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    // VALIDATE
    const validateResult = registerValidate(login, email, password);

    if (typeof validateResult === 'string') {
      setValid(validateResult);
      return;
    }
    setValid('');

    // FETCH API
    const { status, message } = await register(
      validateResult[0],
      validateResult[1],
      validateResult[2],
    );

    if (status !== 201) {
      setApiData(['error', message]);
    } else {
      setApiData(null);
      navigate('/login');
    }
  };
  return (
    <div className="registerPage">
      <img src={Logo} alt="logo" className="registerPage__logo" />
      <Typography variant={typographyVariants.HeadingH1} color={colors.primary}>
        Регистрация
      </Typography>
      <Input
        width="35%"
        value={login}
        setValue={setLogin}
        placeholder="Введите логин"
      />
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
        Создать аккаунт
      </Button>
      <Button type={buttonTypes.Primary} width="25%" to="/">
        &#10528; Уже есть аккаунт ? &#10527;
      </Button>
      {valid && <Alert status="error">{valid}</Alert>}
      {apiData && <Alert status={apiData[0]}>{apiData[1]}</Alert>}
    </div>
  );
};

export default RegisterPage;
