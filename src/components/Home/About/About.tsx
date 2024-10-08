import SectionHeading from "@/components/Common/SectionHeading";
import React from "react";
import { aboutInfo } from "@/data/data";
import ListItem from "./ListItem";
import Image from "next/image";

const About = () => {
  return (
    <div className="pt-16 pb-12 bg-white">
      <SectionHeading >Quick Overview</SectionHeading>
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ">
        {/* Text Content */}
        <div>
          <h1 className="text-black text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            {aboutInfo.title}
          </h1>

          <p className="text-gray-500 text-lg sm:text-xl mt-6">
            {aboutInfo.description}
          </p>
          <ul className="mt-6">
            <ListItem text="Luxurious Rooms" />
            <ListItem text="Delicious Food" />
            <ListItem text="Stunning Views" />
          </ul>
        </div>
        {/* Stats Content */}
      <div className="flex flex-wrap justify-center items-center lg:mt-20">
        <div className="flex flex-col items-center justify-center p-6 border border-gray-200  rounded-2xl m-4">
          <Image src={aboutInfo.image1} width={100} height={100} alt="5-star" />
          <h1 className="text-3xl font-bold">9.8</h1>
          <p className="text-gray-500">Booking.com Rating</p>
        </div>
        <div className="flex flex-col items-center justify-center p-6 border border-gray-200  rounded-2xl  m-4">
        <Image src={aboutInfo.image2} width={100} height={100} alt="5-star" />
          <h1 className="text-3xl font-bold">22+</h1>
          <p className="text-gray-500">Hotel Awards</p>
        </div>
        <div className="flex flex-col items-center justify-center border border-gray-200  p-6 rounded-2xl m-4">
        <Image src={aboutInfo.image3} width={100} height={100} alt="5-star" />
          <h1 className="text-3xl font-bold">4.9</h1>
          <p className="text-gray-500">Customer Feedbacks</p>
        </div> <div className="flex flex-col items-center justify-center p-6 border border-gray-200  rounded-2xl  m-4">
        <Image src={aboutInfo.image4} width={100} height={100} alt="5-star" />
          <h1 className="text-3xl font-bold">5.0</h1>
          <p className="text-gray-500">Customer Reviews</p>
        </div>
        </div>
      </div>


     
    </div>
  );
};

export default About;
