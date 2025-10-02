import { Section } from "../Section";
import { Badge } from "@/components/ui/badge";
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="flex items-center gap-3 font-headline text-3xl font-bold text-primary mb-8">
            <Wrench className="w-8 h-8" />
            Habilidades Técnicas
          </h2>
          <div className="space-y-6">
            {Object.entries(technicalSkills).map(([category, skills]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold mb-3">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => (
                    <Badge key={skill} variant="default" className="bg-primary/80 hover:bg-primary text-primary-foreground text-sm px-3 py-1">{skill}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="flex items-center gap-3 font-headline text-3xl font-bold text-primary mb-8">
            <Smile className="w-8 h-8" />
            Habilidades Blandas
          </h2>
          <div className="flex flex-wrap gap-2">
            {softSkills.map(skill => (
              <Badge key={skill} variant="outline" className="text-sm border-accent text-accent-foreground bg-accent/20 hover:bg-accent/40 px-3 py-1">{skill}</Badge>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
