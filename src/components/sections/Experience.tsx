import { Section } from "../Section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <Section id="experiencia">
      <h2 className="flex items-center gap-3 font-headline text-3xl font-bold text-primary mb-12 text-center justify-center">
        <Briefcase className="w-8 h-8" />
        Experiencia Laboral
      </h2>
      <Card className="max-w-3xl mx-auto shadow-lg mb-5">
        <CardHeader>
          <CardTitle className="text-2xl font-headline">Front End Developer – Uploy</CardTitle>
          <CardDescription className="flex items-center gap-2 pt-1">
            <Calendar className="w-4 h-4" />
            Agosto 2024 – Enero 2025
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Desarrollo de aplicaciones web con React, TypeScript y TailwindCSS.</li>
            <li>Reducción de tiempos de carga en un 20% y disminución de bugs en producción.</li>
            <li>Implementación de arquitectura modular reutilizable para escalabilidad.</li>
            <li>Incorporación de nuevas funcionalidades basadas en feedback, aumentando la retención de usuarios en un 15%.</li>
          </ul>
        </CardContent>
      </Card>
      
      <Card className="max-w-3xl mx-auto shadow-lg mb-5">
        <CardHeader>
          <CardTitle className="text-2xl font-headline">Cajero / Encargado - Shell</CardTitle>
          <CardDescription className="flex items-center gap-2 pt-1">
            <Calendar className="w-4 h-4" />
            Noviembre 2023 – Agosto 2024
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Manejo de efectivo.</li>
            <li>Manejo de personal.</li>
            <li>Cierre de cajas.</li>
            <li>Administración de pagos, stocks y cajas.</li>
            <li>Carga de datos al sistema.</li>
          </ul>
        </CardContent>
      </Card>
      
    </Section>
  );
}
