import React from 'react';
import { unauthenticated } from './unauthenticated';
import { authenticated } from './authenticated';
import { authState } from './authState';

export function Login({ userName, authState, onAuthChange }) {
  return (
    <main>
      <div>
        {authState === authState.authenticated && (
          <authenticated
            userName={userName}
            onLogout={() =>
              onAuthChange(userName, authState.unauthenticated)
            }
          />
        )}
        {authState === authState.unauthenticated && (
          <unauthenticated
            userName={userName}
            onLogin={(loginUserName) =>
              onAuthChange(loginUserName, authState.authenticated)
            }
          />
        )}
      </div>
    </main>
  );
}
