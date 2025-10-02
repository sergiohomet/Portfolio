import { Section } from "../Section";
import ContactForm from "../ContactForm";
import { Mail, Linkedin, Github, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:sergiohomet@gmail.com",
    text: "sergiohomet@gmail.com"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sergio-homet-herrera-618126213/",
    text: "Perfil Profesional"
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/sergiohomet",
    text: "sergiohomet"
  }
]

export default function Contact() {
  return (
    <Section id="contacto">
      <div className="text-center">
        <h2 className="flex items-center justify-center gap-3 font-headline text-3xl font-bold text-primary">
          <Phone className="w-8 h-8" />
          Contacto
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          ¿Quieres conocer más sobre mi perfil o proyectos?
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <ContactForm />
        <div className="space-y-6">
          <h3 className="font-headline text-xl font-bold">O encuéntrame en:</h3>
          {contactLinks.map(({ icon: Icon, label, href, text }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="block">
              <Button variant="outline" className="w-full justify-start h-14 text-left">
                <Icon className="mr-4 h-6 w-6 text-accent" />
                <div className="flex flex-col">
                  <span className="font-semibold">{label}</span>
                  <span className="text-muted-foreground text-sm">{text}</span>
                </div>
              </Button>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
