import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

const PROJECT_GRADIENTS: Record<string, string> = {
  "capital-taxi": "from-zinc-900 via-amber-950 to-yellow-900",
  moqawlak: "from-slate-900 via-blue-950 to-indigo-900",
  awfar: "from-rose-950 via-red-900 to-orange-900",
  "talabat-clone": "from-orange-950 via-orange-900 to-amber-800",
  muthamin: "from-emerald-950 via-teal-900 to-slate-900",
  istibdal: "from-sky-950 via-cyan-900 to-slate-900",
  sarfak: "from-slate-950 via-zinc-900 to-cyan-950",
  "mawj-lance": "from-violet-950 via-purple-900 to-indigo-950",
  hisnak: "from-emerald-950 via-green-900 to-teal-950",
};

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.slug}
            src={project.image}
            title={project.title}
            description={project.shortDescription}
            slug={project.slug}
            images={project.images}
            gradient={
              PROJECT_GRADIENTS[project.slug] ??
              "from-[#1a1035] via-[#12082a] to-[#0a0618]"
            }
          />
        ))}
      </div>
    </section>
  );
};
