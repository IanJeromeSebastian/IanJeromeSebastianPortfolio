import { cn } from "@/lib/utils";
import {
  IconBrandHtml5,
  IconBrandCss3,
  IconFileTypeXml,
  IconBrandJavascript,
  IconBrandTypescript,
  IconCoffee, // For Java
  IconBrandCpp,
  IconBrandCSharp,
  IconBrandPython,
  IconBrandAngular,
  IconBrandReact,
  IconBrandReactNative,
  IconRocket, // For Expo
  IconLayersIntersect,
  IconBrandVite,
  IconSparkles, // For Aceternity
} from "@tabler/icons-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  "HTML": <IconBrandHtml5 className="w-6 h-6" />,
  "CSS": <IconBrandCss3 className="w-6 h-6" />,
  "XML": <IconFileTypeXml className="w-6 h-6" />,
  "JavaScript": <IconBrandJavascript className="w-6 h-6" />,
  "Typescript": <IconBrandTypescript className="w-6 h-6" />,
  "Java": <IconCoffee className="w-6 h-6" />,
  "C++": <IconBrandCpp className="w-6 h-6" />,
  "C#": <IconBrandCSharp className="w-6 h-6" />,
  "Python": <IconBrandPython className="w-6 h-6" />,
  "Angular": <IconBrandAngular className="w-6 h-6" />,
  "React": <IconBrandReact className="w-6 h-6" />,
  "React-Native": <IconBrandReactNative className="w-6 h-6" />, 
  "Expo-Framework": <IconRocket className="w-6 h-6" />,
  "Ionic-Framework": (
  <svg 
    viewBox="0 0 512 512" 
    fill="currentColor" 
    className="w-6 h-6"
  >
    <path d="M256,48C141.13,48,48,141.13,48,256s93.13,208,208,208,208-93.13,208-208S370.87,48,256,48Zm0,356c-81.6,0-148-66.4-148-148s66.4-148,148-148,148,66.4,148,148-66.4,148-148,148Z"/>
    <circle cx="256" cy="256" r="48"/>
  </svg>
),
  "Vite": <IconBrandVite className="w-6 h-6" />,
  "Aceternity UI": <IconSparkles className="w-6 h-6" />,
};

// 2. Create a Color Map based on the titles (approximate original brand colors)
const COLOR_MAP: Record<string, string> = {
  "HTML": "#e34c26", // Orange
  "CSS": "#264de4", // Blue
  "XML": "#ff6600", // Orange-Red
  "JavaScript": "#f0db4f", // Yellow
  "Typescript": "#007acc", // Blue
  "Java": "#5382a1", // Blue-Grey
  "C++": "#00599c", // Blue
  "C#": "#178600", // Green
  "Python": "#3776ab", // Blue
  "Angular": "#dd0031", // Red
  "React": "#61dafb", // Light Blue
  "React-Native": "#61dafb", // Light Blue
  "Expo-Framework": "#ffffff", // White (Expo often uses white/black)
  "Ionic-Framework": "#3880ff", // Blue
  "Vite": "#ffc107", // Amber
  "Aceternity UI": "#a855f7", // Purple (Example color)
};

export default function FeaturesSectionDemo() {
  const titles = [
    "HTML", "CSS", "XML", "JavaScript", 
    "Typescript", "Java", "C++", "C#", 
    "Python", "Angular", "React", "React-Native", 
    "Expo-Framework", "Ionic-Framework", "Vite", "Aceternity UI"
  ];

  // 3. Map through titles and pull the correct icon AND color from the maps
  const features = titles.map((title) => ({
    title,
    icon: ICON_MAP[title] || <IconBrandReact />, // Fallback icon
    color: COLOR_MAP[title] || "#61dafb", // Fallback color (React light blue)
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  // description,
  icon,
  color,
  index,
}: {
  title: string;
  // description: string;
  icon: React.ReactNode;
  color: string;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index % 4 === 0) && "lg:border-l dark:border-neutral-800",
        index < 12 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-white dark:text-neutral-400"
      style={{ color: color }}>
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 w-full flex justify-center px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white dark:text-neutral-100 whitespace-nowrap text-base text-center">
          {title}
        </span>
      </div>
      {/* <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p> */}
    </div>
  );
};
