"use client"

import React from 'react'
import courseData from "@/data/music.json"
import { TextGenerateEffect } from '@/app/components/ui/text-generate-effect'
import { Button } from '@/app/components/ui/moving-border'
import Link from 'next/link'
import { Meteors } from "@/app/components/ui/meteors";
import { Featuredbg } from '../components/Featuredbg'

interface Course{
    id: number,
    title: String,
    slug: String,
    description: String,
    price: number,
    instructor: String,
    isFeatured: boolean,
}
function FeatueCourses() {
  
    const words= " FEATURED COURSES"
  const featuedCourses  = courseData.courses.filter((course:Course)=>course.isFeatured)
  return (
    <>
    <Featuredbg/>
    <div className='py-12 text-white'>

      <div >
        <div className="text-center">
            <h2 className='uppercase font-semibold'>
         <TextGenerateEffect words={words}/>
            </h2>
            <p className='text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Learn with the best</p>
        </div>
    
      </div>
      <div className='mt-20'>
        <div className=' flex  flex-wrap gap-8 justify-center'>
     {
       featuedCourses.map((course:Course) =>(
        <div key={course.id} className=" w-full relative max-w-xs">
        <div className="relative shadow-xl  border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>
 
          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
          {course.title}
          </h1>
 
          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
           {course.description}
          </p>
          <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
            <Link href={`/courses/${course.slug}`}>
            Explore</Link>
           
          </button>
 
          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
       
      </div>
    
       ))
     }
      </div>
        </div>
     
    <div className='text-center mt-10'>
    <Link href={"/"}>
        <Button
        className=" bg-black text-white "
      >
        
       Go Back
      
        </Button>
        
        </Link>
    </div>
      </div>
    </>)
}

export default FeatueCourses
