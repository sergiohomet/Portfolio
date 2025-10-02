import { Section } from "../Section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Wrench } from "lucide-react";

const technicalSkills = {
  "Lenguajes y Frameworks": ["JavaScript", "TypeScript", "React", "Node.js"],
  "Estilos & UI": ["HTML5", "CSS3", "Sass", "Bootstrap", "Styled-Components", "Semantic UI React"],
  "Bases de Datos": ["MySQL", "Postgres"],
  "Herramientas y Librerías": ["Git", "GitHub", "NPM", "Trello", "Context-API", "React Router", "React Hook Form"]
};

const softSkills = [
  "Resolución de problemas", "Proactividad y adaptabilidad", "Trabajo en equipo ágil", 
  "Gestión del tiempo", "Atención al detalle", "Aprendizaje rápido"
];

export default function Skills() {
  return (
    <Section id="habilidades">
      <Card className="shadow-lg">
          <CardHeader>
              <CardTitle className="flex items-center gap-3 font-headline text-3xl font-bold text-primary justify-center">
                  <Wrench className="w-8 h-8" />
                  Habilidades
              </CardTitle>
          </CardHeader>
          <Separator className="w-1/2 mx-auto" />
          <CardContent className="space-y-8 pt-6">
            <div className="space-y-6">
                <h3 className="text-xl font-semibold text-center">
                Habilidades Técnicas
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {Object.entries(technicalSkills).map(([category, skills]) => (
                    <div key={category}>
                        <h4 className="text-lg font-semibold mb-3 text-center text-primary">{category}</h4>
                        <div className="flex flex-wrap gap-2 justify-center">
                        {skills.map(skill => (
                            <Badge key={skill} variant="default" className="bg-primary/80 hover:bg-primary text-primary-foreground text-sm px-3 py-1">{skill}</Badge>
                        ))}
                        </div>
                    </div>
                ))}
                </div>
            </div>
            
            <Separator />

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-center">
                Habilidades Blandas
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                  {softSkills.map(skill => (
                  <Badge key={skill} variant="default" className="bg-primary/80 hover:bg-primary text-primary-foreground text-sm px-3 py-1">{skill}</Badge>
                  ))}
              </div>
            </div>
          </CardContent>
      </Card>
    </Section>
  );
}
