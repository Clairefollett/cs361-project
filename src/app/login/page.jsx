"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    })

    const onLogin = async () => {
        try {
            const response = await axios.post("/api/users/login", user);
            console.log("Login successful", response);
            toast.success("Login success");
            router.push("/profile");
        } catch (error) {
            console.log("Login failed", error.message);
            toast.error(error.message);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 pb-8">Login</h1>
            <hr />
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
            onClick={onLogin}
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium 
            rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Login</button>
            <Link href="/signup">Click Here to Create Account</Link>
        </div>
    );
}