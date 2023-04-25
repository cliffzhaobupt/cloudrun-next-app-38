'use client';

import { useLogin } from '@/libs/auth/hooks/useLogin';
import { useI18n } from '@/libs/i18n/hooks/useI18n';
import { ChangeEvent, FormEvent, useCallback, useState } from 'react';

export const LoginClientPage: React.FC = () => {
  const { t } = useI18n();

  const { isLoading, loggedInUserCredential, login } = useLogin();

  const [email, setEmail] = useState('');
  const handleEmailChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
    []
  );

  const [password, setPassword] = useState('');
  const handlePasswordChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    },
    []
  );

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      login({ email, password });
    },
    [email, password, login]
  );

  return (
    <>
      <h1>{t('page_login_title')}</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <button type="submit" disabled={isLoading}>
          Submit
        </button>
      </form>

      {loggedInUserCredential && (
        <dl>
          <dt>E-mail</dt>
          <dd>{loggedInUserCredential.user.email}</dd>
        </dl>
      )}
    </>
  );
};
