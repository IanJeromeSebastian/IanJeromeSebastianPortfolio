/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";
import EncryptedTextDemoSecond from "./components/AceternityUI/encryptedCompoment";
import ExpandableCardDemo from "./components/AceternityUI/expandable-card-demo-grid";
import FeaturesSectionDemo from "./components/AceternityUI/features-section-demo-2";
// import TextGenerateEffectDemo from "./components/AceternityUI/text-generate-effect-demo"
import TextHoverEffectDemo from "./components/AceternityUI/textHoverEffectComponent";
import { TracingBeam } from "./ui/tracing-beam";
// import { DottedGlowBackground } from "./ui/dotted-glow-background"

const experienceData = [
  {
    title: "Jr. App/Front End Developer",
    company: "Xentra Solutions Inc.",
    period: "February 2024 - April 2025",
    points: [
      "Assisted in debugging and troubleshooting frontend issues, ensuring a smooth and bug-free user experience.",
      "Collaborated with senior developers to implement best coding practices and enhance application performance.",
      "Integrated APIs and backend services to create fully functional web and mobile applications.",
      "Wrote and tested reusable code to improve maintainability and efficiency.",
      "Ensured cross-browser compatibility across different devices and browsers.",
      "Participated in code reviews and contributed to team discussions to drive technical growth.",
    ],
  },
  {
    title: "App/Front End Developer Trainee",
    company: "Xentra Solutions Inc.",
    period: "March 2023 - February 2024",
    points: [
      "Designed and implemented new features for the project app using HTML, CSS, and JavaScript.",
      "Utilized frameworks like **React Native, Angular, or Ionic and Expo** to create dynamic applications.",
      "Developed and styled mobile app interfaces with a focus on visual appeal and user-friendliness.",
      "Participated in team discussions and code reviews to improve development skills.",
    ],
  },
  {
    title: "Project Leader/Developer",
    company: "Capstone Project",
    period: "September 2022 - February 2023",
    points: [
      "Maintained project documentation including design decisions, architecture, and usage guidelines.",
      "Troubleshot and debugged system issues to ensure project stability.",
      "Reviewed code contributions from team members to maintain high quality and consistency.",
      "Managed project timelines by setting milestones and deadlines.",
      "Mentored team members, providing technical guidance and support.",
    ],
  },
];

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* <div className="fixed inset-0 z-0">
      <DottedGlowBackground />
    </div> */}

      <div className="relative z-10 flex flex-col items-center px-4 pt-20 pb-20 text-center">
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <div className="mb-[-20px] md:mb-[-40px]">
            <EncryptedTextDemoSecond />
          </div>

          <TextHoverEffectDemo />

          <p className="mt-[-20px] md:mt-[-60px] max-w-lg text-white text-sm md:text-base leading-relaxed">
            I am a passionate developer focused on App and Frontend Development.
            I have experience in building responsive and user-friendly
            applications using React, TypeScript, and other modern web
            technologies.
          </p>
        </div>

        <div className="flex justify-center w-full mb-8">
          <a
            href="https://github.com/IanJeromeSebastian"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="p-[2px] relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-400 rounded-lg" />
              <div className="px-6 py-1.5 bg-black rounded-[6px] relative transition duration-200 text-white group-hover:bg-transparent flex items-center justify-center gap-2 text-sm">
                <Github size={16} />
                <span>GitHub</span>
              </div>
            </button>
          </a>
        </div>

        {/* get to know more about the technologies I use */}
        <section className="w-full max-w-4xl px-6 py-20 flex flex-col items-start">
          <div className="mb-12 w-full text-left">
            <span className="text-sm font-medium uppercase tracking-widest text-neutral-500">
              Get To Know More
            </span>
          </div>

          <div className="md:col-span-6 flex flex-col items-center text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-10">
              About the technologies I use
            </h2>

            <p className="max-w-xl text-neutral-400 text-lg leading-relaxed">
              Programming Language / Framework / Markup Language
            </p>
            <FeaturesSectionDemo />
          </div>

          <div className="hidden md:block md:col-span-3" />
        </section>

        {/* personal projects */}
        <section className="w-full max-w-4xl px-6 py-20 flex flex-col items-start">
          <div className="mb-12 w-full text-left">
            <span className="text-sm font-medium uppercase tracking-widest text-neutral-500">
              Take a look at my personal projects
            </span>
          </div>

          <div className="md:col-span-6 w-full">
            <ExpandableCardDemo />
          </div>

          <div className="hidden md:block md:col-span-3" />
        </section>

        {/* my experience */}
        <section className="w-full max-w-4xl px-6 py-20 flex flex-col items-start">
          <div className="mb-12 w-full text-left">
            <span className="text-sm font-medium uppercase tracking-widest text-neutral-500">
              My Experience
            </span>
          </div>

          <div className="md:col-span-6 w-full">
            <TracingBeam className="px-6">
              <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                {experienceData.map((item, index) => (
                  <div key={`content-${index}`} className="mb-20">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {item.title}
                    </h3>

                    <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
                      <span className="text-blue-400 font-medium">
                        {item.company}
                      </span>
                      <span className="text-neutral-500 text-sm font-mono italic">
                        {item.period}
                      </span>
                    </div>

                    <div className="text-sm md:text-base text-neutral-400 prose prose-sm dark:prose-invert">
                      <ul className="space-y-3 text-justify">
                        {item.points.map((point, i) => (
                          <li
                            key={i}
                            className="leading-relaxed flex items-start"
                          >
                            <span className="mr-2 text-blue-500">•</span>
                            <span
                              dangerouslySetInnerHTML={{
                                __html: point.replace(
                                  /\*\*(.*?)\*\*/g,
                                  '<b class="text-neutral-200">$1</b>',
                                ),
                              }}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </TracingBeam>
          </div>
        </section>

        {/* get in touch */}
        <section className="w-full max-w-4xl px-6 py-20 flex flex-col items-start">
          <div className="mb-12 w-full text-left">
            <span className="text-sm font-medium uppercase tracking-widest text-neutral-500">
              Get in touch
            </span>
          </div>

          <div className="md:col-span-6 flex flex-col items-center text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-10">Contact me</h2>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Email */}
            <a href="mailto:your-email@gmail.com" className="block w-full">
              <button className="p-[3px] relative group w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-4 py-2 bg-black rounded-[6px] relative transition duration-200 text-white group-hover:bg-transparent flex items-center justify-center gap-2">
                  <Mail size={18} />
                  <span>Email</span>
                </div>
              </button>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/ian-jerome-sebastian-21378b260"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <button className="p-[3px] relative group w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg" />
                <div className="px-4 py-2 bg-black rounded-[6px] relative transition duration-200 text-white group-hover:bg-transparent flex items-center justify-center gap-2">
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </div>
              </button>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/jerome.sebastian.31/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <button className="p-[3px] relative group w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg" />
                <div className="px-4 py-2 bg-black rounded-[6px] relative transition duration-200 text-white group-hover:bg-transparent flex items-center justify-center gap-2">
                  <Facebook size={18} />
                  <span>Facebook</span>
                </div>
              </button>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/iy_ooooooom/"
              target="_blank"
            rel="noopener noreferrer"
              className="block w-full"
            >
              <button className="p-[3px] relative group w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg" />
                <div className="px-4 py-2 bg-black rounded-[6px] relative transition duration-200 text-white group-hover:bg-transparent flex items-center justify-center gap-2">
                  <Instagram size={18} />
                  <span>Instagram</span>
                </div>
              </button>
            </a>
          </div>

          <div className="hidden md:block md:col-span-3" />
        </section>
      </div>
    </div>
  );
}

export default App;
