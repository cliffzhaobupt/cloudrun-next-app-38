'use client';

import { useRegisterUser } from '@/libs/auth/hooks/useRegisterUser';
import { useI18n } from '@/libs/i18n/hooks/useI18n';
import { ChangeEvent, FormEvent, useCallback, useState } from 'react';

export const RegisterClientPage: React.FC = () => {
  const { t } = useI18n();

  const { isLoading, registeredUserCredential, registerUser } =
    useRegisterUser();

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
      registerUser({ email, password });
    },
    [email, password, registerUser]
  );

  return (
    <>
      <h1>{t('page_register_title')}</h1>

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

      {registeredUserCredential && (
        <dl>
          <dt>E-mail</dt>
          <dd>{registeredUserCredential.user.email}</dd>
        </dl>
      )}
    </>
  );
};
