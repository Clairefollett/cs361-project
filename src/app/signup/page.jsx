"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })
    const [buttonDisable, setButtonDisabled] = React.useState(false);

    const onSignup = async () => {
        try {
            const response = await axios.post("/api/users/signup", user);
            console.log("Sign Up success", response.data);
            router.push("/login");
        } catch(error) {
            console.log("Sign Up Failed", error.message);
            toast.error(error.message)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 pb-8">Sign Up</h1>
            <hr />
            <label htmlFor="username">Username</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="username"
                type="text"
                value={user.username}
                onChange={(e) => setUser({...user, username: e.target.value})}
                placeholder="username"
            />
            <label htmlFor="email">Email</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                placeholder="email"
            />
            <label htmlFor="password">Password</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
                placeholder="password"
            />
            <button 
            onClick={onSignup}
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium 
            rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Register</button>
            <Link href="/login">Click Here to Login</Link>
        </div>
    );
}