'use client';
import React from 'react';
// Importing icons from lucide-react, a modern icon library
import { BookOpen, Award, Zap, Users } from 'lucide-react'; 

// Data structure for the value details
const data = [
    {
        icon: BookOpen,
        title: "Expert-Led Curriculum",
        description: "Learn cutting-edge skills from industry experts, not just academics. Our instructors bring real-world experience from Google, Microsoft, and leading startups to every lesson.",
        color: "text-yellow-300", // Bright accent color for contrast
        bg: "bg-yellow-900/30", // Semi-transparent accent background
    },
    {
        icon: Award,
        title: "Recognized Certifications",
        description: "Earn accredited certificates upon completion. Validate your skills and showcase them directly on LinkedIn to accelerate your career growth and open new job opportunities.",
        color: "text-green-300", 
        bg: "bg-green-900/30", 
    },
    {
        icon: Zap,
        title: "Project-Based Learning",
        description: "Apply concepts immediately with hands-on labs, coding challenges, and capstone projects. Build a strong portfolio that proves your capabilities to potential employers.",
        color: "text-purple-300", 
        bg: "bg-purple-900/30", 
    },
    {
        icon: Users,
        title: "Lifetime Community Access",
        description: "Join our exclusive global community of students and alumni. Get peer support, network with professionals, and participate in live Q&A sessions long after you finish the course.",
        color: "text-orange-300", 
        bg: "bg-orange-900/30", 
    },
];

export default function whyus() {
    return (
        <section className="py-12 md:py-16 bg-blue-900/50 backdrop-blur-md rounded-2xl"> 
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10 md:mb-14">
                    <h2 className="text-4xl font-extrabold text-white sm:text-5xl"> 
                        Why Choose Our Platform?
                    </h2>
                    <p className="mt-4 text-lg md:text-xl text-blue-200 max-w-2xl mx-auto px-2"> 
                        We are committed to providing a flexible, practical, and highly credible learning experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:gap-10 md:grid-cols-2 lg:grid-cols-4">
                    {data.map((detail, index) => (
                        <div 
                            key={index} 
                            className="flex flex-col items-center text-center p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 
                                       bg-blue-800/60 backdrop-blur-sm border border-blue-700/50 cursor-pointer" 
                        >
                            <div className={`p-4 rounded-full ${detail.bg} mb-4`}>
                                <detail.icon className={`w-8 h-8 ${detail.color}`} />
                            </div>
                            
                            <h3 className="text-xl font-bold text-gray-100 mb-3"> 
                                {detail.title}
                            </h3>
                            
                            <p className="text-base text-gray-300"> 
                                {detail.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}