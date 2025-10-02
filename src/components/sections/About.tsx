import { Section } from "../Section";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Briefcase, GraduationCap, User } from "lucide-react";

const avatarImage = PlaceHolderImages.find(p => p.id === 'avatar');

export default function About() {
  return (
    <Section id="sobre-mi" className="bg-muted/50 dark:bg-card">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        <div className="lg:col-span-1 flex justify-center">
            {avatarImage && (
                <Image 
                    src="/sergiohomet.webp"
                    alt={avatarImage.description}
                    width={300}
                    height={300}
                    className="rounded-full object-cover border-4 border-primary shadow-lg"
                    data-ai-hint={avatarImage.imageHint}
                />
            )}
        </div>
        <div className="lg:col-span-2">
            <h2 className="flex items-center gap-3 font-headline text-3xl font-bold text-primary">
                <User className="w-8 h-8"/>
                Sobre mí
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Soy un Desarrollador Front End orientado a la experiencia de usuario y la creación de interfaces eficientes. Mi experiencia en Uploy (2024 – 2025) me permitió colaborar en proyectos de gran escala, donde implementé arquitectura modular y mejoré el rendimiento de las aplicaciones en un 20%, además de proponer nuevas funcionalidades que aumentaron la retención de usuarios en un 15%.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Actualmente continúo perfeccionando mis habilidades como freelancer y estudiante de la Universidad Tecnológica Nacional (UTN), con el objetivo de crecer profesionalmente y aportar soluciones innovadoras en entornos ágiles y colaborativos.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-accent"/>
                <span className="font-medium">Freelance Software Developer</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-accent"/>
                <span className="font-medium">Estudiante en UTN</span>
              </div>
            </div>
        </div>
      </div>
    </Section>
  )
}
