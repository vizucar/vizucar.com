"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    id: 1,
    name: "Patrick Chen",
    role: "UI/UX Designer",
    github: "https://github.com/oshio10",
    image:"/team's_photo/Chen_photo.webp",
  },
  {
    id: 2,
    name: "Mohamed Rahmani",
    role: "Backend Developer",
    github: "https://github.com/mohamed-rahmani",
    image:"/team's_photo/Rahmani_photo.webp",
  },
  {
    id: 3,
    name: "Vithurzen Vilvarajah",
    role: "UI/UX Designer & Backend Developer",
    github: "https://github.com/vithurzen",
    image:"/team's_photo/Vilvarajah_photo.webp",
  },
  {
    id: 4,
    name: "Yannick Khamis",
    role: "Frontend Developer ",
    github: "https://github.com/vithurzen",
    image:"/icons/profil_2.png",
  },
];

export function TeamSection() {
    return (
    <article className="flex justify-around items-center p-4 h-[500px] rounded-lg">
        {teamMembers.map((member) => (
        <Link
            key={member.id}
            href={member.github}
            target="_blank"
            className="relative group flex flex-col items-center"
        >

            <div className="relative w-55 h-55 bg-white rounded-full flex items-center justify-center ">
            <Image 
                src={member.image}
                alt={`${member.name}'s avatar`}
                width={75}
                height={150}
                className="rounded-full object-cover w-[75px] lg:w-[95px]"
            />
            </div>

            <div className="hidden sm:block absolute bottom-[-80px] left-1/2 transform -translate-x-1/2 sm:w-[180px] lg:w-[280px] bg-gray-800 text-white text-center rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
              <h3 className="font-bold sm:text-md lg:text-xl">{member.name}</h3>
              <p className="sm:text-2xs lg:text-md">{member.role}</p>
            </div>
        </Link>
        ))}
    </article>
  


    );
  }
  
