"use client";

import { Section } from "../Section";
import { ProjectCard } from "../ProjectCard";
import { FolderGit2 } from "lucide-react";
import Image from "next/image";
import projectsData from "@/lib/projects-data.json";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { FadeIn, Stagger, StaggerItem } from "../ui/fade-in";

const { projects } = projectsData;

export default function Projects() {
  const { t, locale } = useLanguage();

  return (
    <Section id="proyectos" className="bg-muted/50 dark:bg-card">
      <FadeIn direction="up">
        <h2 className="flex items-center gap-3 font-headline text-3xl font-bold text-primary mb-10">
          <FolderGit2 className="w-8 h-8" />
          {t.projects.sectionTitle}
        </h2>
      </FadeIn>

      <Stagger className="space-y-10">
        {projects.map((project, index) => {
          const description =
            typeof project.description === "string"
              ? project.description
              : (project.description as Record<string, string>)[locale] ??
                (project.description as Record<string, string>).en;

          return (
            <StaggerItem key={project.title}>
              <ProjectCard
                title={project.title}
                description={description}
                repoUrl={project.repoUrl}
                liveUrl={project.liveUrl}
                tags={project.tags}
                isReversed={index % 2 !== 0}
                repositoryLabel={t.projects.repository}
                tryItLabel={t.projects.tryIt}
                projectPreviewLabel={t.projects.projectPreview}
              >
                <Image
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  width={600}
                  height={400}
                  className="object-cover rounded-lg"
                />
              </ProjectCard>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
