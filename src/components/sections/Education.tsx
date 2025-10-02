import { Section } from "../Section";
import { GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const educationHistory = [
  {
    degree: "Técnico en Programación",
    institution: "UTN",
    period: "2024 – Actualidad"
  },
  {
    degree: "Técnico Profesional",
    institution: "Escuela Técnica N°1 Famaillá",
    period: "2015 – 2021"
  }
];

export default function Education() {
  return (
    <Section id="educacion" className="bg-muted/50 dark:bg-card">
      <h2 className="flex items-center justify-center gap-3 font-headline text-3xl font-bold text-primary mb-12 text-center">
        <GraduationCap className="w-8 h-8" />
        Educación
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {educationHistory.map((edu, index) => (
          <Card key={index} className="text-center shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline">{edu.degree}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold text-primary">{edu.institution}</p>
              <p className="text-sm text-muted-foreground">{edu.period}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
