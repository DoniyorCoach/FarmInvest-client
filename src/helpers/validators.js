export const registerValidate = (login, email, password) => {
  const loginCheck = login.toLowerCase().trim();
  const emailCheck = email.toLowerCase().trim();
  const passwordCheck = password.toLowerCase().trim();

  // Login
  if (!(loginCheck.length >= 3 && loginCheck.length <= 12)) {
    return 'Длина логина должна быть от 3 до 12 символов';
  }

  // Email
  if (!(emailCheck.length >= 7 && emailCheck.length <= 30)) {
    return 'Длина электронной почты должна быть от 7 до 30 символов';
  }
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(emailCheck)) {
    return 'Адрес электронной почты невалидный';
  }

  // Password
  if (!(passwordCheck.length >= 6 && passwordCheck.length <= 22)) {
    return 'Длина пароля должна быть от 6 до 22 символов';
  }

  return [loginCheck, emailCheck, passwordCheck];
};

export const loginValidate = (email, password) => {
  const emailCheck = email.toLowerCase().trim();
  const passwordCheck = password.toLowerCase().trim();

  // Email
  if (!(emailCheck.length >= 7 && emailCheck.length <= 35)) {
    return 'Длина электронной почты должна быть от 7 до 35 символов';
  }
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(emailCheck)) {
    return 'Адрес электронной почты невалидный';
  }

  // Password
  if (!(passwordCheck.length >= 6 && passwordCheck.length <= 22)) {
    return 'Длина пароля должна быть от 6 до 22 символов';
  }
  return [emailCheck, passwordCheck];
};
