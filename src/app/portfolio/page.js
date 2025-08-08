import Projects from "@/components/projects";
import projectsData from "@/data/projects.json";

export const metadata = {
  title: "Portfolio | kariston.dev",
};

export default function Portfolio() {
  return (
    <section className="w-full max-w-[60rem] m-auto">
      <h1 className="text-3xl lg:text-5xl mb-16 font-bold">Projects</h1>
      <Projects projects={projectsData} />
    </section>
  );
}
