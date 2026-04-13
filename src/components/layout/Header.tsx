"use client";

import React, { useState, useEffect } from 'react';
import { Code2, PanelLeft } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import type { Locale } from '@/lib/i18n/translations';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  const navLinks = [
    { href: '#inicio', label: t.nav.home },
    { href: '#experiencia', label: t.nav.experience },
    { href: '#proyectos', label: t.nav.projects },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b' : 'bg-transparent'
      )}
    >
      <div className="container flex h-16 items-center">
        <a href="#inicio" className="mr-6 flex items-center space-x-2">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline hidden sm:inline-block">
            Sergio Homet
          </span>
        </a>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2 sm:space-x-3">
          <div className="flex items-center gap-1 text-sm font-medium">
            {(['en', 'es'] as Locale[]).map((lang, i) => (
              <React.Fragment key={lang}>
                {i > 0 && <span className="text-muted-foreground/50">|</span>}
                <button
                  onClick={() => setLocale(lang)}
                  className={cn(
                    "px-2 py-1 rounded transition-colors uppercase",
                    locale === lang
                      ? "text-primary font-bold"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {lang}
                </button>
              </React.Fragment>
            ))}
          </div>
          <ThemeToggle />
          <a href="#contacto" className="hidden sm:block">
            <Button>{t.nav.contact}</Button>
          </a>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <PanelLeft />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-8">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <a href={link.href} className="text-lg transition-colors hover:text-primary">
                        {link.label}
                      </a>
                    </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <a href="#contacto">
                      <Button className="w-full mt-4">{t.nav.contact}</Button>
                    </a>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
