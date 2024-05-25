import Image from "next/image";
import {Navbar} from "@/app/components/Navbar";
import {Hero} from "@/app/components/Hero";
import {Projects} from "@/app/components/Projects";
import {About} from "@/app/components/About";
import {Stack} from "@/app/components/Stack";
import {Contact} from "@/app/components/Contact";
import {Footer} from "@/app/components/Footer";

export default function Home() {
  return (
      <main>
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Stack />
        <Contact />
        <Footer />
      </main>
  );
}
