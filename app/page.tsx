import About from "@/components/About";
import { AuroraBackgroundDemo } from "@/components/Aurora";
import { BackgroundBoxesDemo } from "@/components/BackgroundBoxes";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <section className=" " id="services">
        <AuroraBackgroundDemo />
      </section>
      <section className="bg-green-500 h-screen" id="about">
        <About/>
      </section>
      <section className="bg-blue-500 h-screen" id="contact">
      </section>
        <BackgroundBoxesDemo/>
    </main>
  );
}
