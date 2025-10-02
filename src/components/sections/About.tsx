import { Section } from "../Section";
import Image from "next/image";
import { Briefcase, GraduationCap, User } from "lucide-react";

export default function About() {
  return (
    <Section id="sobre-mi" className="bg-muted/50 dark:bg-card">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        <div className="lg:col-span-1 flex justify-center">
            <Image 
                src="/sergiohomet.webp"
                alt="Sergio Homet"
                width={300}
                height={300}
                className="rounded-full object-cover border-4 border-primary shadow-lg"
            />
        </div>
        <div className="lg:col-span-2">
            <h2 className="flex items-center gap-3 font-headline text-3xl font-bold text-primary">
                <User className="w-8 h-8"/>
                Sobre mí
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Me apasiona la tecnología y la libertad creativa de la programación. Disfruto transformar ideas en soluciones funcionales que aporten valor a las personas y me motiva el desafío de resolver problemas.
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
