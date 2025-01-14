"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    id: 1,
    name: "Patrick",
    role: "UI/UX Designer",
    github: "https://github.com/oshio10",
    image:"/icons/profil_2.png",
  },
  {
    id: 2,
    name: "Mohamed Rahmani",
    role: "Backend Developer",
    github: "https://github.com/mohamed-rahmani",
    image:"/icons/profil_2.png",
  },
  {
    id: 3,
    name: "Vithurzen",
    role: "UI/UX Designer & Backend Developer",
    github: "https://github.com/vithurzen",
    image:"/icons/profil_2.png",
  },
  {
    id: 4,
    name: "Yannick",
    role: "Frontend Developer ",
    github: "https://github.com/vithurzen",
    image:"/icons/profil_2.png",
  },
];

export function TeamSection() {
    return (
    <article className="flex justify-around items-center p-4 h-[500px] rounded-lg shadow-lg">
        {teamMembers.map((member) => (
        <Link
            key={member.id}
            href={member.github}
            target="_blank"
            className="relative group flex flex-col items-center"
        >

            <div className="relative w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
            <Image 
                src={member.image}
                alt={`${member.name}'s avatar`}
                width={120}
                height={200}
                className="rounded-full object-cover shadow-lg"
            />
            </div>

            <div className="absolute bottom-[-80px] left-1/2 transform -translate-x-1/2 w-[200px] bg-gray-800 text-white text-center rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
            <h3 className="font-bold text-lg">{member.name}</h3>
            <p className="text-sm">{member.role}</p>
            </div>
        </Link>
        ))}
    </article>
  


    );
  }
  
