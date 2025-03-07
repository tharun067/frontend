"use client";

import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Nav() {
  const { data: session } = useSession();
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const router = useRouter();

  return (
    <nav className="fixed top-0 left-0 right-0 px-6 py-4 backdrop-blur-md bg-orange/300 border-b border-orange/20 shadow-md flex justify-between items-center z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/images/logo.png"
          alt="CareerNavigator Logo"
          width={40}
          height={40}
          className="object-contain"
        />
        <p className="text-lg font-semibold text-orange-900">Career Navigator</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex gap-6 items-center">
        {session?.user ? (
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={signOut}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Sign Out
            </button>
            <Link href="/profile">
              <Image 
                src={session?.user.image}
                width={36}
                height={36}
                className="rounded-full border border-gray-300 shadow-sm hover:scale-105 transition"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <button
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            onClick={() => router.push("/signup")}
          >
            Sign In
          </button>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex items-center">
            <Image
              src={session?.user.image}
              width={36}
              height={36}
              className="rounded-full border border-gray-300 shadow-sm hover:scale-105 transition"
              alt="profile"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />
            {toggleDropdown && (
              <div className="absolute right-0 mt-3 w-40 bg-white/70 backdrop-blur-lg rounded-lg shadow-md p-3 border border-white/20">
                <Link
                  href="/profile"
                  className="block text-gray-800 hover:text-blue-600 p-2"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut({ callbackUrl: "/" });
                  }}
                  className="mt-2 w-full px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            onClick={() => router.push("/signup")}
          >
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
}

export default Nav;
