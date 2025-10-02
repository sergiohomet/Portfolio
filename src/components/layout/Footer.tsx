import { Code2 } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Code2 className="h-6 w-6 text-primary" />
          <p className="text-center text-sm leading-loose md:text-left">
            © {currentYear} Sergio Nicolás Homet Herrera. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
