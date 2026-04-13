"use client";

import { Section } from "../Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Wrench } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { FadeIn, Stagger, StaggerItem } from "../ui/fade-in";

const skillCategories = [
  { key: "foundations" as const, skills: ["HTML5", "CSS3", "JavaScript", "TypeScript"] },
  { key: "framework" as const, skills: ["React", "Next.js", "TailwindCSS", "Sass", "Bootstrap", "Styled-Components"] },
  { key: "state" as const, skills: ["Redux", "Zustand", "Context API", "React Router", "React Hook Form"] },
  { key: "backend" as const, skills: ["Node.js", "MySQL", "PostgreSQL"] },
  { key: "tools" as const, skills: ["Git", "GitHub", "Vite", "NPM"] },
  { key: "ai" as const, skills: ["Claude Code", "Cursor", "Gemini CLI", "ChatGPT"] },
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <Section id="habilidades">
      <FadeIn direction="up">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 font-headline text-3xl font-bold text-primary justify-center">
              <Wrench className="w-8 h-8" />
              {t.skills.sectionTitle}
            </CardTitle>
          </CardHeader>
          <Separator className="w-1/2 mx-auto" />
          <CardContent className="space-y-10 pt-6">
            <div className="space-y-8">
              <h3 className="text-xl font-semibold text-center">{t.skills.technicalTitle}</h3>
              <Stagger className="space-y-6">
                {skillCategories.map((category) => (
                  <StaggerItem key={category.key}>
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider text-center">
                        {t.skills.categories[category.key]}
                      </h4>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {category.skills.map((skill) => (
                          <span
                            key={skill}
                            className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-muted/60 border border-border/60 text-foreground"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>

            <Separator />

            <FadeIn direction="up" delay={0.1}>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-center">{t.skills.softTitle}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {t.skills.softSkills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 border border-primary/30 text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </CardContent>
        </Card>
      </FadeIn>
    </Section>
  );
}
