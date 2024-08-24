"use client"
import Image from "next/image";
import { FOSSpeakerCardsCarousel } from "./components/carousel";


import Navbar from "./components/navbar";
import Stats from "./components/stats";
import { GlobeDemo } from "./components/globe";
import FOSSAccordion from "./components/accordion";

export default function Home() {
  return (
    <>
    <Navbar/>
    <main className="font-sofia flex min-h-screen flex-col items-center justify-between p-24 pt-[50px]">
      
      <GlobeDemo/>
      <FOSSpeakerCardsCarousel/>
    <Stats/>
    <FOSSAccordion/>
    </main>
    </>
  );
}
