"use client";

import { Section } from "../Section";
import { GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { FadeIn, Stagger, StaggerItem } from "../ui/fade-in";

const institutions = ["UTN", "Escuela Técnica N°1 Famaillá"];
const periods = ["", "2015 – 2021"];

export default function Education() {
  const { t } = useLanguage();

  const educationHistory = [
    { degree: t.education.degree1, institution: institutions[0], period: t.education.period1 },
    { degree: t.education.degree2, institution: institutions[1], period: periods[1] },
  ];

  return (
    <Section id="educacion" className="bg-muted/50 dark:bg-card">
      <FadeIn direction="up">
        <h2 className="flex items-center justify-center gap-3 font-headline text-3xl font-bold text-primary mb-10 text-center">
          <GraduationCap className="w-8 h-8" />
          {t.education.sectionTitle}
        </h2>
      </FadeIn>
      <Stagger className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {educationHistory.map((edu, index) => (
          <StaggerItem key={index}>
            <Card className="text-center shadow-lg h-full">
              <CardHeader>
                <CardTitle className="font-headline">{edu.degree}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-primary">{edu.institution}</p>
                <p className="text-sm text-muted-foreground">{edu.period}</p>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
