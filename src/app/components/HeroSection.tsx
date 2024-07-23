import React from 'react'
import Link from 'next/link'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'
import { FlipWords } from './ui/flip-words'



function HeroSection() {
 
  const words = ["music", "melody", "symphony"];
  return (
   <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto p-10 md:py-0  '>
    <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
    
    <div className='p-4 relative z-10 w-full text-center'>
    
      
      <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl  font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>
        Master the art of   <FlipWords words={words} />
      </h1>
      <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto '>
        Dive into compreshension music courses and transform your musical journey today. Wheather you're a beginner or looking to refine your skills, join us to unlock your ture potential
      </p>
      <div className='mt-4  font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>
      <Link href={"/featured"}> <Button
        className=" bg-black text-white "
      >
        
        Explore Courses
      
        </Button>
        </Link>
      </div>
    </div>
   </div>
  )
}

export default HeroSection
