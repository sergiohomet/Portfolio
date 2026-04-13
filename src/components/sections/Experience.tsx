"use client";

import { Section } from "../Section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { FadeIn, Stagger, StaggerItem } from "../ui/fade-in";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <Section id="experiencia">
      <FadeIn direction="up">
        <h2 className="flex items-center gap-3 font-headline text-3xl font-bold text-primary mb-10 text-center justify-center">
          <Briefcase className="w-8 h-8" />
          {t.experience.sectionTitle}
        </h2>
      </FadeIn>

      <Stagger className="max-w-3xl mx-auto space-y-5">
        <StaggerItem>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-headline">{t.experience.freelanceTitle}</CardTitle>
              <CardDescription className="flex items-center gap-2 pt-1">
                <Calendar className="w-4 h-4" />
                {t.experience.freelancePeriod}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {t.experience.freelanceBullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </StaggerItem>

        <StaggerItem>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-headline">{t.experience.uployTitle}</CardTitle>
              <CardDescription className="flex items-center gap-2 pt-1">
                <Calendar className="w-4 h-4" />
                {t.experience.uployPeriod}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {t.experience.uployBullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </StaggerItem>
      </Stagger>
    </Section>
  );
}
