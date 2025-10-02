import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { Section } from "../Section";

export default function Hero() {
  return (
    <Section id="inicio" className="pt-24 sm:pt-32">
        <div className="text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            👉 Sergio Nicolás Homet Herrera – Desarrollador Front End
            </h1>
            <h2 className="mt-6 font-headline text-2xl font-medium tracking-tight text-primary sm:text-3xl">
            Desarrollo aplicaciones web escalables y optimizadas con React, Next.js y TypeScript.
            </h2>
            <p className="mt-8 max-w-3xl mx-auto text-lg text-muted-foreground">
            Soy Desarrollador Front End con experiencia en la construcción de interfaces modernas y de alto rendimiento. Me especializo en tecnologías como React, TypeScript y TailwindCSS, aplicando buenas prácticas de código y atención al detalle.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href="#proyectos">
                    <Button>
                        Mis Proyectos <ArrowRight className="ml-2"/>
                    </Button>
                </a>
                <a href="/CV-Sergio-Homet.pdf" download="CV-Sergio-Homet.pdf">
                    <Button variant="outline">
                        Descargar CV <Download className="ml-2"/>
                    </Button>
                </a>
            </div>
        </div>
    </Section>
  )
}
