import skillsData from "@/data/projects.json";
import Tag from "@/components/tag";

export const metadata = {
  title: "About | kariston.dev",
};

export default function About() {
  return (
    <section className="w-full max-w-[60rem] m-auto">
      <h1 className="text-4xl lg:text-5xl mb-16 font-bold">About me</h1>
      <div className="mb-16">
        <p className="mb-4 text-lg">
          I`m Kariston, friends also call me Kaká, I`ve been working with web
          development for 12 years, both as a Front-End Developer and as a UI/UX
          Designer. I have a long road of experiences covered. I currently work
          with development and support for Shopify and WordPress Themes.
        </p>
        <p className="mb-4 text-lg">
          I am married, had a daughter, who unfortunately passed away. I love my
          family. I also really like technology, development and music (I play
          some instruments).
        </p>
        <p className="text-lg">
          I`m currently living in Florianópolis/Brazil, but I intend to move to
          Portugal soon, I was there on vacation in 2018 and I really liked the
          country (Besides being Brazilian, I`m Portuguese too).
        </p>
      </div>
      <div className="mb-16">
        <h2 className="text-3xl font-bold">Experiences</h2>
      </div>
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <span className="flex flex-wrap gap-4">
          {[
            "HTML",
            "CSS",
            "Sass",
            "Less",
            "CSS-in-JS",
            "Tailwindcss",
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "WordPress",
            "Shopify",
            "Git",
            "Docker",
            "Linux",
            "Windows",
            "UI",
            "UX",
            "Figma",
            "Photoshop",
          ].map((skill) => (
            <Tag key={skill}>{skill}</Tag>
          ))}
        </span>
      </div>
    </section>
  );
}
