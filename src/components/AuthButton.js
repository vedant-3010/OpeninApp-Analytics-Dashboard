import React from 'react';
import { signIn } from 'next-auth/react';

const AuthButton = ({ provider }) => {
    const handleSignIn = async () => {
        await signIn(provider, { callbackUrl: '/dashboard' });
    };

    return (
        <button onClick={handleSignIn} className="flex items-center justify-between px-8 py-2 rounded-lg bg-white text-xs">
            <div className="flex ">
                <div>{`Sign in with ${provider}`}</div>
            </div>
        </button>
    );
};

export default AuthButton;
