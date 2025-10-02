import { Section } from "../Section";
import { ProjectCard } from "../ProjectCard";
import { FolderGit2 } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import DrinkRecommender from "../DrinkRecommender";

const projects = [
  {
    title: "🥤 DrinkAPI",
    description: "Aplicación desarrollada en React, con consumo de API y funcionalidades de IA para recomendaciones de tragos personalizadas. Implementada con React Router DOM, TailwindCSS, Zustand y Zod para la gestión de estado y validación.",
    repoUrl: "https://github.com/sergiohomet/DrinkAPI",
    liveUrl: "https://drinkspage.netlify.app/",
    tags: ["React", "API", "AI", "TailwindCSS", "Zustand"],
    imageId: "drink-api",
    component: <DrinkRecommender />
  },
  {
    title: "🍽️ LenafTUC",
    description: "Aplicación web para la generación de facturas en un negocio de comida, desarrollada con React, TypeScript, TailwindCSS, Vite y @react-pdf/renderer. Permite crear comprobantes en PDF de manera rápida y organizada, optimizando la administración de ventas.",
    repoUrl: "https://github.com/sergiohomet/LenafTUC",
    liveUrl: "https://lenaftuc.netlify.app/",
    tags: ["React", "TypeScript", "PDF", "Vite"],
    imageId: "lenaf-tuc",
  },
  {
    title: "🏥 Patient Administrator",
    description: "Sistema de administración de pacientes desarrollado con React, TypeScript, Zustand, React Hook Form y React Toastify, optimizado para una gestión de datos clara, validada y escalable.",
    repoUrl: "https://github.com/sergiohomet/patient-administrator-zustand",
    liveUrl: "https://patient-crud-zustand-reacthookform.netlify.app/",
    tags: ["React", "TypeScript", "Zustand", "Forms"],
    imageId: "patient-admin",
  },
];


export default function Projects() {
  const getImage = (id: string) => PlaceHolderImages.find(p => p.id === id);

  return (
    <Section id="proyectos">
      <h2 className="flex items-center gap-3 font-headline text-3xl font-bold text-primary mb-12">
        <FolderGit2 className="w-8 h-8" />
        Proyectos Destacados
      </h2>

      <div className="space-y-12">
        {projects.map((project, index) => {
          const image = getImage(project.imageId);
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
              {project.component ? project.component : (
                image && (
                  <Image 
                    src={image.imageUrl}
                    alt={image.description}
                    width={600}
                    height={400}
                    className="object-cover rounded-lg"
                    data-ai-hint={image.imageHint}
                  />
                )
              )}
            </ProjectCard>
          )
        })}
      </div>
    </Section>
  );
}
