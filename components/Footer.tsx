import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Linkedin, Github } from 'lucide-react';
import { useFooterAnimation } from '../hooks/useFooterAnimation';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const { initializeFooterAnimation } = useFooterAnimation();

  useEffect(() => {
    initializeFooterAnimation();
  }, [initializeFooterAnimation]);

  return (
    <footer className="py-12 sm:py-16 px-4 bg-[#111] min-h-[40vh]">
      <div className="max-w-6xl mx-auto">
        {/* Footer Name */}
        <h2 className="name-fotter font-quicksand text-3xl sm:text-4xl md:text-5xl text-[#d17777] text-center opacity-0 transform translate-y-10">
          Harshit Rao
        </h2>

        {/* Content Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {/* Address Section */}
          <div className="address opacity-0 transform translate-y-10">
            <h3 className="text-[#d17777] text-xl sm:text-2xl mb-4 sm:mb-6 font-quicksand">
              Where to find me
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-white text-base sm:text-lg">
                Rewari, Haryana IN
              </span>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="quicklink flex flex-col items-center opacity-0 transform translate-y-10">
            <h3 className="text-[#d17777] text-xl sm:text-2xl mb-4 sm:mb-6 font-quicksand">
              Contact Me
            </h3>
            <div className="flex gap-6 sm:gap-8">
              <a
                href="mailto:https://harshitrao84@gmail.com/"
                className="text-white hover:text-[#ff98a2] transition-all duration-300 transform hover:scale-110"
                aria-label="Email"
              >
                <Mail size={24} className="sm:w-7 sm:h-7" />
              </a>
              <a
                href="https://www.linkedin.com/in/harshit-rao27/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#ff98a2] transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} className="sm:w-7 sm:h-7" />
              </a>
              <a
                href="https://github.com/Harshit001-ctrl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#ff98a2] transition-all duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={24} className="sm:w-7 sm:h-7" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
