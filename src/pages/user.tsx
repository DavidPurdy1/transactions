import type { NextPage } from 'next';
import Head from 'next/head';
import { useUser } from '@clerk/clerk-react';
import { Dropdown } from '~/components/dropdown';
import AvatarComponent from '~/components/avatar';

const UserPage: NextPage = () => {
    const user = useUser();

    return (
        <>
            <Head>
                <title>Create T3 App</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex min-h-screen flex-col items-center justify-center bg-slate-600">
                <div className="flex justify-center items-center flex-col text-center">
                    <div>
                        <svg className="absolute top-0 left-0" viewBox="0 0 500 150" preserveAspectRatio="xMinYMin meet">
                            <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" fontStyle="stroke: none; fill:red;"></path>
                        </svg>
                        <Dropdown></Dropdown>
                    </div>
                    {/* <h1 className="my-5 text-5xl font-bold text-slate-100 absolute top-10">Welcome back to Transactions!</h1> */}
                    {user.isLoaded && user.user && user.user.profileImageUrl && user.user.fullName && <AvatarComponent alt={user.user.fullName} image={user.user.profileImageUrl} />}
                </div>
            </main>
        </>
    );
};

export default UserPage;