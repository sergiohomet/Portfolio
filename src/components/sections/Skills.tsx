import { Section } from "../Section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Smile } from "lucide-react";

const technicalSkills = {
  "Lenguajes y Frameworks": ["JavaScript (ES6+)", "TypeScript", "React", "Next.js"],
  "Estilos & UI": ["TailwindCSS", "Bootstrap", "CSS3", "HTML5"],
  "Herramientas": ["Git", "GitHub", "NPM", "Vite"],
  "Metodologías": ["Desarrollo ágil", "Arquitectura modular", "Buenas prácticas de código"]
};

const softSkills = [
  "Resolución de problemas", "Proactividad y adaptabilidad", "Trabajo en equipo ágil", 
  "Gestión del tiempo", "Atención al detalle", "Aprendizaje rápido"
];

export default function Skills() {
  return (
    <Section id="habilidades" className="bg-muted/50 dark:bg-card">
      <Card className="shadow-lg">
          <CardHeader>
              <CardTitle className="flex items-center gap-3 font-headline text-3xl font-bold text-primary justify-center">
                  <Wrench className="w-8 h-8" />
                  Habilidades
              </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(technicalSkills).map(([category, skills]) => (
              <div key={category}>
                  <h3 className="text-xl font-semibold mb-4 text-center md:text-left">{category}</h3>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {skills.map(skill => (
                      <Badge key={skill} variant="default" className="bg-primary/80 hover:bg-primary text-primary-foreground text-sm px-3 py-1">{skill}</Badge>
                  ))}
                  </div>
              </div>
              ))}
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                Habilidades Blandas
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                  {softSkills.map(skill => (
                  <Badge key={skill} variant="default" className="bg-accent/80 hover:bg-accent text-accent-foreground text-sm px-3 py-1">{skill}</Badge>
                  ))}
              </div>
            </div>
          </CardContent>
      </Card>
    </Section>
  );
}
