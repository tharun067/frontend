"use client"
import { getProviders, signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function SignupSignin() {
    const { data: session } = useSession();
    const [providers, setProviders] = useState(null);
    const router = useRouter();
    function handleProviders(providerId) {
        try {
            signIn(providerId, { callbackUrl: "/" });
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders();
            setProviders(response);
        }
        setUpProviders();
    }, []);

    useEffect(() => {
        if (session) {
            router.push("/home");
        }
    }, [session, router]);
    return (
        <>
            <div className='flex justify-center items-center md:w-1/3  w-1/2  bg-slate-500 rounded-lg border-t-2 m-32'>
                <div className="flex flex-col space-around">
                    {providers && Object.values(providers).filter(provider => provider.name === "Google" || provider.name === "GitHub" || provider.name === "Facebook").map((provider) => (
                        <button
                            type="button"
                            key={provider.name}
                            onClick={() => handleProviders(provider.id)}
                            className="flex m-2 md:m-4 hover:bg-slate-200 rounded-xl"
                        >
                            <Image
                                src={`/icons/${provider.name.toLowerCase()}.svg`}
                                alt={`${provider.name} Icon`}
                                width={20}
                                height={20}
                            />
                            <span className="mx-2">Sign Up using {provider.name}</span>
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}

export default SignupSignin
