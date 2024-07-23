import Image from 'next/image'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import { MovingCards } from './components/movingcard'
import { ScrollReveal } from './components/whyChooseme'
import ComingWebinar from './components/upComingWebinar'

export default function Home() {
  return (
    <main className="">
     <Navbar/>
     <HeroSection/>
     <ScrollReveal/>
     <MovingCards/>
     <ComingWebinar/>


    </main>
  )
}
