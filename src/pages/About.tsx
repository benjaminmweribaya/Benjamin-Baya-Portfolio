import { ReactNode, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { BriefcaseBusiness, Code, GraduationCap, Users } from "lucide-react";
import StatCard from "@/components/StatCard";
import aboutImage from "/public/Photo.png";

interface Stat {
  id: number;
  icon: ReactNode;
  value: number;
  label: string;
}

const About: React.FC = () => {
  const [experience, setExperience] = useState<number>(0);
  
  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Calculate experience dynamically
    const startYear = 2021;
    const currentYear = new Date().getFullYear();
    setExperience(currentYear - startYear);
  }, []);

  const stats: Stat[] = useMemo(() => [
    { id: 1, icon: <BriefcaseBusiness size={30} />, value: experience, label: "Years Experience" },
    { id: 2, icon: <Code size={30} />, value: 50, label: "Projects Completed" },
    { id: 3, icon: <GraduationCap size={30} />, value: 2, label: "Certifications" },
    { id: 4, icon: <Users size={30} />, value: 30, label: "Happy Clients" },
  ], [experience]);

  return (
    <section id="about" className="py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div data-aos="fade-right">
            <Image src={aboutImage} alt="About Me" className="rounded-2xl shadow-lg" width={500} height={500} />
          </div>
          <div data-aos="fade-left" className="text-left">
            <h2 className="text-4xl font-bold text-primary">About Me</h2>
            <p className="mt-4 text-gray-600">
              I am a passionate full-stack developer with expertise in modern web technologies.
              My journey in software development started in 2021, and since then, I have worked
              on numerous projects across different domains.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <StatCard key={stat.id} icon={stat.icon} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

