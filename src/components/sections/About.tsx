import { Section } from "../Section";
import Image from "next/image";
import { Briefcase, GraduationCap, User } from "lucide-react";

export default function About() {
  return (
    <Section id="sobre-mi" className="bg-muted/50 dark:bg-card">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-1 flex justify-center">
            <Image 
                src="/sergiohomet.webp"
                alt="Sergio Homet"
                width={250}
                height={250}
                className="rounded-full object-cover border-4 border-primary shadow-lg"
            />
        </div>
        <div className="lg:col-span-2 text-center lg:text-left">
            <h2 className="flex items-center justify-center lg:justify-start gap-3 font-headline text-3xl font-bold text-primary">
                <User className="w-8 h-8"/>
                Sobre mí
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Me apasiona la tecnología y la libertad creativa de la programación. Disfruto transformar ideas en soluciones funcionales que aporten valor a las personas y me motiva el desafío de resolver problemas.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
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
