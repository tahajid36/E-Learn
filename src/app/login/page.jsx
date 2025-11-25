'use client'
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc'; 
import { signIn, useSession } from 'next-auth/react';
import CurrentUser from '../hooks/CurrentUser';

const Page = () => {
    const user = CurrentUser()
    

    const handleSubmit = (e) => {
        e.preventDefault()

    }
    
        return (
            <div className="flex items-center justify-center min-h-screen p-4">
          <div className="w-full max-w-md bg-slate-800/80 backdrop-blur-md border border-indigo-500/30 rounded-3xl shadow-2xl p-8 md:p-10 space-y-6 transform transition duration-500 hover:shadow-indigo-500/30">
            
            <h2 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 mb-6">
                Welcome Back
            </h2>
            
            <button 
            onClick={()=> signIn('google')}
                className="w-full flex justify-center items-center py-3 px-4 rounded-xl shadow-lg text-sm font-medium text-white bg-slate-700 hover:bg-slate-600 transition duration-300 transform hover:scale-[1.01] space-x-2"
            >
                <FcGoogle className="w-5 h-5" />
                <span>Sign In with Google</span>
            </button>
    
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-3 bg-slate-800/80 text-gray-400">or use your email</span>
                </div>
            </div>
    
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-indigo-300 mb-1" htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-slate-700/70 border border-slate-600 rounded-xl text-white placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500 transition duration-150 shadow-inner"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-indigo-300 mb-1" htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  required
                  className="w-full px-4 py-3 bg-slate-700/70 border border-slate-600 rounded-xl text-white placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500 transition duration-150 shadow-inner"
                  placeholder="••••••••"
                />
              </div>
    
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-lg text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition duration-300 transform hover:scale-[1.01]"
                >
                  Login
                </button>
              </div>
            </form>
    
            <p className="text-center text-sm text-gray-400 mt-6">
              Do not have an account? 
              <Link href="/register" className="font-medium text-purple-400 hover:text-purple-300 ml-1 transition duration-150">
                Create Account
              </Link>
            </p>
          </div>
        </div>
        );

    }
  
   


export default Page;