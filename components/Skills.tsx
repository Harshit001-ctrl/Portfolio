import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSkillsAnimation } from '@/hooks/useSkillsAnimation';

gsap.registerPlugin(ScrollTrigger);

const SKILLS = [
  'HTML', 'CSS', 'JAVASCRIPT', 'BOOTSTRAP', 'MYSQL', 'PHP','TYPESCRIPT',
  'MONGODB', 'TAILWIND', 'APIs', 'GSAP', 'GIT HUB', 'REACT', 'LARAVEL'
];

export default function Skills() {
  const { initializeAnimations } = useSkillsAnimation();

  useEffect(() => {
    initializeAnimations();
  }, [initializeAnimations]);

  return (
    <section className="min-h-screen mt-16 flex flex-col justify-center bg-black/80">
      <h2 className="myskills text-center text-[#d17777] font-quicksand text-5xl opacity-0 transform translate-y-20">
        MY SKILLS
      </h2>
      <div className="skills flex items-center mt-12">
        <div className="skill flex w-full gap-8 justify-center items-center flex-wrap p-8">
          {SKILLS.map((skill, index) => (
            <div
              key={skill}
              id={`skill-${index}`}
              className="text-white px-8 py-4 text-xl rounded-full opacity-0 blur-md transition-all duration-300 bg-[#222039] hover:scale-110 backdrop-blur-sm"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}