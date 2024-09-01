'use client';

import { SecondaryButton } from "./Button"
import { signIn } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { useRouter } from "next/navigation";

export const Hero = () => {
    const session = useSession();
    const router = useRouter();
    return (
        <div>
            <div className="text-6xl font-semibold">
                <span>
                The Indian Cryto
                </span>

                <span className="text-blue-500 pl-4">
                    Wallet!
                </span>
            </div>
            <div className="flex justify-center pt-4 text-2xl text-slate-400">
                Create a frictionless wallet from India with just a Google Account!
            </div>
            <div className="flex justify-center pt-2 text-2xl text-slate-400">
                Convert your INR your Cryptocurrency
            </div>
            <div className="pt-8 flex justify-center">
                {session.data?.user ?
                <SecondaryButton onClick={() => {
                    router.push('/dashboard');
                }}>
                    Go to Dashboard
                </SecondaryButton>
                :
                <SecondaryButton onClick={() => {
                    signIn('google');
                }}>
                    Login with Google
                </SecondaryButton>}
            </div>
        </div>
    )
}