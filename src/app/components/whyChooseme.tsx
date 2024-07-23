"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Melody",
    description:
      "Melody refers to a sequence of musical notes that are perceived as a single entity. It is often the most memorable aspect of a piece of music, consisting of a series of pitches that are rhythmically organized and usually forms the main theme of a song or composition. Melodies are often sung or played by lead instruments.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/1.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
    ),
  },
  {
    title: "Harmony",
    description:
      "Harmony involves the combination of different musical notes played or sung simultaneously to produce a pleasing sound. It adds depth and richness to music, supporting the melody and enhancing its emotional and tonal complexity. Harmony is typically created through chords, which are groups of notes played together." ,
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/2.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Symphony",
    description:
      "A symphony is an extended musical composition, typically for an orchestra, and often consists of multiple movements or sections. Each movement has its own distinct musical theme and character. Symphonies are known for their complexity, grandeur, and ability to convey a wide range of emotions and stories through instrumental music.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/3.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
    ),
  },
  {
    title: "Rhythm",
    description:
      "Rhythm refers to the pattern of sounds and silences in music, created by the timing and duration of notes. It is the element that drives the tempo and flow of a piece, giving music its structure and movement. Rhythm is fundamental to all musical genres and is often associated with the beat, meter, and tempo of a composition.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/4.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
    ),
  },
];
export function ScrollReveal() {
  return (
    <div className="no-scrollbar  w-full">
      <StickyScroll content={content} />
    </div>
  );
}
