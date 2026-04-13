"use client";

import { useState } from "react";
import { Section } from "../Section";
import ContactForm from "../ContactForm";
import { Mail, Linkedin, Github, Phone, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { FadeIn, Stagger, StaggerItem } from "../ui/fade-in";

const EMAIL = "sergiohomet@gmail.com";

export default function Contact() {
  const { t } = useLanguage();
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <Section id="contacto">
      <FadeIn direction="up">
        <div className="text-center">
          <h2 className="flex items-center justify-center gap-3 font-headline text-3xl font-bold text-primary">
            <Phone className="w-8 h-8" />
            {t.contact.sectionTitle}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{t.contact.subtitle}</p>
        </div>
      </FadeIn>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <FadeIn direction="left" delay={0.1}>
          <ContactForm />
        </FadeIn>

        <FadeIn direction="right" delay={0.2}>
          <div className="space-y-4">
            <h3 className="font-headline text-xl font-bold text-center lg:text-left">
              {t.contact.findMe}
            </h3>

            <Stagger staggerDelay={0.1}>
              <StaggerItem>
                <Button
                  variant="outline"
                  onClick={handleCopyEmail}
                  className="w-full justify-start text-left h-14 hover:bg-accent/20 hover:text-accent-foreground"
                >
                  {emailCopied ? (
                    <Check className="mr-4 h-6 w-6 text-green-500 flex-shrink-0" />
                  ) : (
                    <Mail className="mr-4 h-6 w-6 text-accent flex-shrink-0" />
                  )}
                  <div className="flex flex-col overflow-hidden">
                    <span className="font-semibold truncate">
                      {emailCopied ? t.contact.copied : t.contact.copyEmail}
                    </span>
                    <span className="text-muted-foreground text-sm truncate">{EMAIL}</span>
                  </div>
                </Button>
              </StaggerItem>

              <StaggerItem>
                <Button
                  variant="outline"
                  asChild
                  className="w-full justify-start text-left h-14 hover:bg-accent/20 hover:text-accent-foreground"
                >
                  <a href="https://www.linkedin.com/in/sergio-homet-front-end/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-4 h-6 w-6 text-accent flex-shrink-0" />
                    <div className="flex flex-col overflow-hidden">
                      <span className="font-semibold truncate">LinkedIn</span>
                      <span className="text-muted-foreground text-sm truncate">{t.contact.linkedinText}</span>
                    </div>
                  </a>
                </Button>
              </StaggerItem>

              <StaggerItem>
                <Button
                  variant="outline"
                  asChild
                  className="w-full justify-start text-left h-14 hover:bg-accent/20 hover:text-accent-foreground"
                >
                  <a href="https://github.com/sergiohomet" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-4 h-6 w-6 text-accent flex-shrink-0" />
                    <div className="flex flex-col overflow-hidden">
                      <span className="font-semibold truncate">GitHub</span>
                      <span className="text-muted-foreground text-sm truncate">sergiohomet</span>
                    </div>
                  </a>
                </Button>
              </StaggerItem>
            </Stagger>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
