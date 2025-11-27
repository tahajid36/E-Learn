'use client';
import React from 'react';
import { Briefcase, ChevronRight } from 'lucide-react'; 

// Data structure for mock testimonials
const successStories = [
    {
        name: "Anya Sharma",
        course: "Foundational AI and Machine Learning",
        jobTitle: "Data Scientist",
        company: "Innovatech Solutions",
        quote: "The hands-on projects were incredible. I landed my dream role just three weeks after completing the course!",
        imageUrl: "https://placehold.co/100x100/1E40AF/F9FAFB?text=AS" // Dark blue background, light text
    },
    {
        name: "Ethan Lee",
        course: "Mastering the MERN Stack",
        jobTitle: "Frontend Developer",
        company: "FutureWeb Co.",
        quote: "The MERN course gave me the portfolio I needed. I went from zero experience to a professional developer in 4 months.",
        imageUrl: "https://placehold.co/100x100/10B981/F9FAFB?text=EL" // Green background for contrast
    },
    {
        name: "Chloe Davis",
        course: "Cybersecurity Fundamentals",
        jobTitle: "Security Analyst",
        company: "Global SecOps",
        quote: "The focus on ethical hacking was pivotal. I now feel confident protecting systems and investigating vulnerabilities.",
        imageUrl: "https://placehold.co/100x100/DC2626/F9FAFB?text=CD" // Red/Safety background
    },
];

export default function SuccessStoriesSection() {
    return (
        <section className="py-16 md:py-24 rounded-2xl bg-blue-900/40 backdrop-blur-sm border-t border-b border-blue-700/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl font-extrabold text-white sm:text-5xl tracking-tight"> 
                        Our Graduates Get Hired
                    </h2>
                    <p className="mt-4 text-xl text-blue-200 max-w-3xl mx-auto">
                        See how our practical, industry-aligned courses turn learning into lucrative careers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {successStories.map((story, index) => (
                        <div 
                            key={index} 
                            className="bg-blue-800/70 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-blue-700/50 shadow-2xl transition duration-500 hover:shadow-indigo-500/40"
                        >
                            {/* Student Profile (Image and Name) */}
                            <div className="flex items-center mb-6">
                               <img className='w-16 h-16 rounded-full object-cover ring-2 ring-indigo-400/50 mr-4' src={story.imageUrl} alt="" />
                                  
                                <div>
                                    <h3 className="text-xl font-bold text-white leading-tight">
                                        {story.name}
                                    </h3>
                                    <p className="text-sm font-medium text-indigo-300 italic">
                                        Course: {story.course}
                                    </p>
                                </div>
                            </div>
                            
                            <p className="text-lg text-gray-200 mb-6 border-l-4 border-indigo-400 pl-4 italic">
                                {story.quote}
                            </p>

                            <div className="bg-blue-900/50 p-4 rounded-xl flex flex-col space-y-2">
                                <div className="flex items-center text-green-300 font-semibold text-sm">
                                    <Briefcase className="w-5 h-5 mr-2" />
                                    <span>Hired As: {story.jobTitle}</span>
                                </div>
                                <div className="text-gray-300 text-sm pl-7">
                                    at {story.company}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
                <div className="mt-16 flex justify-center">
                    <button 
                     
                        className="flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white 
                                   bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition duration-300 transform hover:scale-[1.03]"
                    >
                        View More Success Stories
                        <ChevronRight className="ml-2 w-5 h-5" />
                    </button>
                </div>

            </div>
        </section>
    );
}