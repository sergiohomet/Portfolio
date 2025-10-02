import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Briefcase } from "lucide-react";
import { Section } from "../Section";
import { Card } from "../ui/card";

export default function Hero() {
  return (
    <Section id="inicio" className="pt-24 sm:pt-32">
      <Card className="shadow-lg">
        <div className="text-center p-8 sm:p-12">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Sergio Homet – Desarrollador Front End
            </h1>
            <h2 className="mt-6 font-headline text-2xl font-medium tracking-tight text-primary sm:text-3xl">
            Desarrollo aplicaciones web escalables y optimizadas con React y TypeScript.
            </h2>
            <p className="mt-8 max-w-3xl mx-auto text-lg text-muted-foreground">
            Soy Desarrollador Front End con experiencia en la construcción de interfaces modernas y de alto rendimiento. Me especializo en tecnologías como React, TypeScript y TailwindCSS, aplicando buenas prácticas de código y atención al detalle.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                <a href="#proyectos">
                    <Button>
                        Mis Proyectos <ArrowRight className="ml-2"/>
                    </Button>
                </a>
                <a href="#experiencia">
                    <Button variant="outline">
                        Experiencia <Briefcase className="ml-2"/>
                    </Button>
                </a>
                <a href="/CV-Sergio-Homet.pdf" download="CV-Sergio-Homet.pdf">
                    <Button variant="outline">
                        Descargar CV <Download className="ml-2"/>
                    </Button>
                </a>
            </div>
        </div>
      </Card>
    </Section>
  )
}
