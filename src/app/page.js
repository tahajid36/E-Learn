"use client"

import React from "react";
import Whyus from "./Components/Whyus";
import OurCourses from "./Components/OurCourses";
import SuccessStoriesSection from "./Components/SuccessStory";
import Slider from "./Components/Slider";
import Users from "./Components/users";

const Page = () => {

  const slides = [
    { img: "https://res.cloudinary.com/dq2twiyuk/image/upload/v1764169168/Untitled_w30jk9.png" },
    { img: "https://res.cloudinary.com/dq2twiyuk/image/upload/v1764168660/Untitled_2_zxpbea.png" },
    { img: "https://res.cloudinary.com/dq2twiyuk/image/upload/v1764168660/Untitled_1_oyul07.png" },
  ];

  return (
    <div className="min-h-screen">
        {/* slider feature  */}
        <div className="pt-4">
          <Slider slides={slides}></Slider>
        </div>
       
        <div>
            <OurCourses></OurCourses>
        </div>

        <div className="mt-12 w-11/12 md:w-full mx-auto">
         <Whyus></Whyus>
        </div>
        
        

        <div className="mt-12 w-11/12 md:w-full mx-auto">
            <SuccessStoriesSection></SuccessStoriesSection>

        </div>
        <h1 className="text-4xl font-extrabold text-center mt-5">Overview</h1>
        <div className=" flex justify-center mt-7 pb-7">
          
          <Users></Users>
        </div>
        <div></div>
      
    </div>
  );
};

export default Page;
