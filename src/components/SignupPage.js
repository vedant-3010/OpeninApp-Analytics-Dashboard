import React from 'react';
import AuthButton from './AuthButton';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
const SigninPage = () => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const router = useRouter();
    const { data: session } = useSession();

    if (session) {
        router.push('/dashboard');
        return null;
    }

    return (
        <div className="w-full  h-screen flex justify-center items-center bg-gray-100">
            <div className="w-full max-w-md p-8 rounded-lg">
                <h1 className="text-4xl font-bold text-slate-950 mb-2">Sign In</h1>
                <p className="text-slate-950 text-base mb-6 font-medium">Sign in to your account</p>

                <div className="mb-6">
                    <div className="flex justify-between">
                        <AuthButton provider="Google" />
                        <AuthButton provider="Apple" />
                    </div>
                </div>
                <div className='bg-white p-6  rounded-2xl'>
                    <form>
                        <div className="mb-4">
                            <label className="block text-black text-sm font-medium mb-2" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                className="w-full p-1 rounded  bg-gray-100 text-black focus:outline-none"
                                type="email"
                                id="email"
                                placeholder="you@example.com"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-black text-sm font-medium mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="w-full p-1 rounded  bg-gray-100 text-black focus:outline-none"
                                type="password"
                                id="password"
                                placeholder="********"
                                required
                            />
                        </div>
                        <div className="flex items-center justify-between mb-4">
                            <div className="text-blue-600">
                                <a href="#" className="hover:underline">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="mb-4">
                            <button
                                className="w-full bg-black text-white py-2 rounded-xl focus:outline-none"
                                type="submit"
                            >
                                Sign In
                            </button>
                        </div>


                    </form>
                </div>

                <div className='pt-3 flex justify-center items-center'>
                    <p>
                        Dont have an account? <a href="#" className="text-blue-600 hover:underline">Register here</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SigninPage;
