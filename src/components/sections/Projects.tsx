
import { Section } from "../Section";
import { ProjectCard } from "../ProjectCard";
import { FolderGit2 } from "lucide-react";
import Image from "next/image";
import projectsData from "@/lib/projects-data.json";

const { projects } = projectsData;

export default function Projects() {
  return (
    <Section id="proyectos" className="bg-muted/50 dark:bg-card">
      <h2 className="flex items-center gap-3 font-headline text-3xl font-bold text-primary mb-12">
        <FolderGit2 className="w-8 h-8" />
        Proyectos Destacados
      </h2>

      <div className="space-y-12">
        {projects.map((project, index) => {
          return (
            <ProjectCard 
              key={project.title}
              title={project.title}
              description={project.description}
              repoUrl={project.repoUrl}
              liveUrl={project.liveUrl}
              tags={project.tags}
              isReversed={index % 2 !== 0}
            >
              <Image 
                src={project.imageSrc}
                alt={project.imageAlt}
                width={600}
                height={400}
                className="object-cover rounded-lg"
              />
            </ProjectCard>
          )
        })}
      </div>
    </Section>
  );
}
