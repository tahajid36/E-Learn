"use client";
import React from "react";
import { Calendar, Tag, DollarSign, ArrowRight } from "lucide-react";

/**
 * Reusable Course Card Component
 * Designed for a dark blue/indigo theme.
 */
export default function CourseCard({ course }) {
  const { title, publishDate, price, period, imageUrl, description } = course;
  console.log(course);

  return (
    <div
      className="w-full max-w-sm mx-auto bg-blue-800/70 rounded-xl overflow-hidden shadow-2xl 
                        border border-blue-700/50 transform transition duration-500 hover:scale-[1.03] hover:shadow-indigo-500/50 cursor-pointer"
    >
      <div className="relative h-48 sm:h-56">
        <img src={course.imageUrl}></img>

        <div className="absolute top-3 left-3 bg-yellow-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center">
          <Tag className="w-3 h-3 mr-1" />
          Beginner
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
          {title}
        </h3>

        <div className="flex items-center justify-between text-sm mb-4">
          <div className="flex items-center text-blue-300">
            <Calendar className="w-4 h-4 mr-1" />
            <span>Published: {publishDate}</span>
          </div>
          <div className="flex items-center text-green-400 font-bold text-lg">
            <DollarSign className="w-4 h-4 mr-1" />
            {price}
          </div>
        </div>
        <p className="line-clamp-2 overflow-hidden text-ellipsis text-sm text-gray-400 mb-4">
            {description}
        </p>

        <p className="text-sm text-gray-400 mb-4">
          <span className="font-semibold text-indigo-300">Duration:</span>{" "}
          {course.period}
        </p>

        <button
          className="w-full inline-flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-lg shadow-lg text-white 
                               bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition duration-300"
        >
          View Course Details
          <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
