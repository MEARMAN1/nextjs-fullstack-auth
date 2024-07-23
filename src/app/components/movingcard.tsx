"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function MovingCards() {
  return (

    <div className="h-[40rem] rounded-md flex flex-col antialiased dark:bg-black 
    dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <div className="mb-10">
         <h1 className='text-xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Hear Our Harmony: Voice Success</h1>

        </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "I can see your halo, halo, halo I can see your halo, halo, halo I can see your halo, halo, haloI can see your halo, halo",
    name: "Beyonce",
    title: "Halo",
  },
  {
    quote:
      "When I see your face There's not a thing that I would change 'Cause you're amazing Just the way you are",
    name: "Bruno Mars",
    title: "Just the Way You Are", 
  },
  {
    quote: "Thank you, next (next) Thank you, next (next) Thank you, next I'm so grateful for my ex",
    name: "Ariana Grande",
    title: "Thank U, Next",
  },
  {
    quote:
      "Cause all of me Loves all of you Love your curves and all your edges All your perfect imperfections ",
      name:"John Legend",
    title: "All of Me",
  },
  {
    quote:
      "I want your love and I want your revenge You and me could write a bad romance Oh-oh-oh-oh-oh! Caught in a bad romance",
    name: "Lady Gaga",
    title: "Bad Romance",
  },
];
