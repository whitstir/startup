import React from 'react';
import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

export function Login({ userName, authState, onAuthChange }) {
  return (
    <main>
      <div>
        {authState === AuthState.Authenticated && (
          <Authenticated
            userName={userName}
            onLogout={() =>
              onAuthChange('', AuthState.Unauthenticated)
            }
          />
        )}
        {authState === AuthState.Unauthenticated && (
          <Unauthenticated
            userName={userName}
            onLogin={(loginUserName) =>
              onAuthChange(loginUserName, AuthState.Authenticated)
            }
          />
        )}
      </div>
    </main>
  );
}


