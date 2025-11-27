'use client'
import React from 'react';
import { DollarSign, Clock, Calendar, BookOpen, User, ArrowLeft, Zap } from 'lucide-react';
import { useRouter } from 'next/navigation';

const CourseDetail = ({data}) => {
    const {_id, title,imageUrl, period, price, publishDate , description} = data
    const router = useRouter()

    return (
        <div>
            <div className="min-h-screen bg-gray-900 text-white pt-12 pb-20 font-sans">
            <div className="container mx-auto px-4 max-w-6xl">
                
                <a onClick={()=> router.back()} className="mb-8 inline-flex items-center text-indigo-400 hover:text-indigo-300 transition text-lg font-medium">
                    <ArrowLeft className="w-5 h-5 mr-2" /> Back to All Courses
                </a>

                <div className="bg-gray-800/70 p-6 sm:p-10 rounded-3xl shadow-2xl border border-gray-700/50">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        
                        <div className="lg:col-span-1 space-y-6">
                            
                            <div className="aspect-video lg:aspect-square overflow-hidden rounded-xl shadow-xl border border-gray-700">
                                <img 
                                    src={imageUrl} 
                                    alt={`Cover image for ${title}`} 
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>

                            <div className="p-5 bg-gray-700/50 rounded-xl border border-gray-600/50">
                                <div className="flex justify-between items-center mb-4 border-b border-gray-600 pb-3">
                                    <span className="text-3xl font-extrabold text-green-400 flex items-center">
                                        <DollarSign className="w-6 h-6 mr-1" />
                                        {price}
                                    </span>
                                    <span className="text-sm font-semibold text-gray-400 bg-gray-900 px-3 py-1 rounded-full">
                                        Full Access
                                    </span>
                                </div>
                                <button
                                    className="w-full py-3 text-lg font-bold rounded-xl text-white 
                                    bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 
                                    transition duration-300 shadow-lg shadow-indigo-500/50 transform hover:scale-[1.01]"
                                >
                                    Enroll Now
                                </button>
                                <div className="mt-3 text-center text-sm text-gray-400 flex items-center justify-center">
                                    <Zap className="w-4 h-4 mr-1 text-yellow-400" /> 30-Day Money-Back Guarantee
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-2 space-y-8">
                            
                            <div>
                                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
                                    {title}
                                </h1>
                                <div className="flex flex-wrap gap-4 text-gray-400 text-sm font-medium">
                                    <p className="flex items-center">
                                        <User className="w-4 h-4 mr-1 text-blue-400"/> Instructor: <span className="text-indigo-300 ml-1 font-semibold">abcd</span>
                                    </p>
                                    <p className="flex items-center">
                                        <BookOpen className="w-4 h-4 mr-1 text-blue-400"/> Course Length: <span className="text-indigo-300 ml-1 font-semibold">{period}</span>
                                    </p>
                                </div>
                            </div>
                            <div className="bg-gray-700/50 p-6 rounded-xl shadow-inner border border-gray-600/50">
                                <h2 className="text-3xl font-bold mb-4 text-indigo-300 border-b border-gray-600 pb-2">
                                    What You Will Learn
                                </h2>
                                <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">{description}</p>
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
    );
};

export default CourseDetail;