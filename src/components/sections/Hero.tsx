"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Briefcase, GraduationCap } from "lucide-react";
import { Section } from "../Section";
import { Card } from "../ui/card";
import { FadeIn } from "../ui/fade-in";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { motion } from "framer-motion";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <Section id="inicio" className="pt-12 sm:pt-16">
      <FadeIn direction="up">
        <Card className="shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center p-8 sm:p-12">
            <motion.div
              className="lg:col-span-1 flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <Image
                src="/sergiohomet.webp"
                alt="Sergio Homet"
                width={250}
                height={250}
                className="rounded-full object-cover border-4 border-primary shadow-lg"
                priority
              />
            </motion.div>
            <div className="lg:col-span-2 text-center lg:text-left">
              <motion.h1
                className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Sergio Homet
              </motion.h1>
              <motion.h2
                className="mt-3 font-headline text-2xl font-medium tracking-tight text-primary sm:text-3xl"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.18 }}
              >
                {t.hero.subtitle}
              </motion.h2>
              <motion.p
                className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.26 }}
              >
                {t.hero.description}
              </motion.p>
              <motion.div
                className="mt-4 flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center lg:justify-start text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.34 }}
              >
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <Briefcase className="w-4 h-4 text-accent" />
                  <span>{t.hero.roleFreelance}</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <GraduationCap className="w-4 h-4 text-accent" />
                  <span>{t.hero.roleStudy}</span>
                </div>
              </motion.div>
              <motion.div
                className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.42 }}
              >
                <a href="#proyectos">
                  <Button>
                    {t.hero.btnProjects} <ArrowRight className="ml-2" />
                  </Button>
                </a>
                <a href="#experiencia">
                  <Button variant="outline">
                    {t.hero.btnExperience} <Briefcase className="ml-2" />
                  </Button>
                </a>
                <a
                  href="https://raw.githubusercontent.com/sergiohomet/Curriculum-Vitae/main/SergioHometCV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">
                    {t.hero.btnCV} <Download className="ml-2" />
                  </Button>
                </a>
              </motion.div>
            </div>
          </div>
        </Card>
      </FadeIn>
    </Section>
  );
}
