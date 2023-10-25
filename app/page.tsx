"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Contact from "@/components/Contact";

const Home: React.FC = () => {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Team />
      <Projects />
      <Contact />
    </main>
  );
};
export default Home;
