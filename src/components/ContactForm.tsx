"use client";

import * as React from "react";
import { useActionState, useMemo } from "react";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRef, useEffect } from 'react';

import { handleContactForm } from "@/app/actions";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, useFormField } from '@/components/ui/form';
import { cn } from '@/lib/utils';
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/lib/i18n/LanguageContext";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const CustomFormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) return null;

  return (
    <p
      ref={ref}
      className={cn("bg-destructive text-destructive-foreground p-2 font-bold uppercase text-center rounded-md", className)}
      {...props}
    >
      {body}
    </p>
  );
});
CustomFormMessage.displayName = "CustomFormMessage";

export default function ContactForm() {
  const { t } = useLanguage();
  const [state, formAction] = useActionState(handleContactForm, { message: '', error: '' });
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const formSchema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, { message: t.contactForm.nameValidation }),
        email: z.string().email({ message: t.contactForm.emailValidation }),
        message: z.string().min(10, { message: t.contactForm.messageValidation }),
      }),
    [t.contactForm]
  );

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', message: '' },
    mode: 'onChange',
  });

  const { formState, reset } = form;

  useEffect(() => {
    if (state.message) {
      toast({
        title: t.contactForm.successTitle,
        description: state.message,
      });
      reset();
    }
    if (state.error) {
      toast({
        variant: "destructive",
        title: t.contactForm.errorTitle,
        description: state.error,
      });
    }
  }, [state, toast, reset, t.contactForm]);

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline">{t.contactForm.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form ref={formRef} action={formAction} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.contactForm.nameLabel}</FormLabel>
                  <FormControl>
                    <Input placeholder={t.contactForm.namePlaceholder} {...field} />
                  </FormControl>
                  <CustomFormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.contactForm.emailLabel}</FormLabel>
                  <FormControl>
                    <Input placeholder="tu@email.com" {...field} />
                  </FormControl>
                  <CustomFormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.contactForm.messageLabel}</FormLabel>
                  <FormControl>
                    <Textarea placeholder={t.contactForm.messagePlaceholder} {...field} />
                  </FormControl>
                  <CustomFormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full"
              disabled={!formState.isValid || formState.isSubmitting}
            >
              {formState.isSubmitting ? t.contactForm.sending : t.contactForm.send}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
