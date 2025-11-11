import React from 'react';
import { Navigate } from 'react-router-dom';
import { AuthState } from './login/authState';

export function ProtectedRoute({ authState, children }) {
    if (authState == AuthState.Unknown) {
        return <div>Loading....</div>;
    }
    if (authState == AuthState.Unauthenticated) {
        return <Navigate to='/login' replace/>;
    }
    return children;
}