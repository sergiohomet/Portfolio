"use client";

import * as React from "react";
import { useActionState } from "react";
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
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from './ui/alert-dialog';
import { cn } from '@/lib/utils';
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, introduce un email válido.' }),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }),
});

type FormValues = z.infer<typeof formSchema>;

const CustomFormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

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
  const [state, formAction] = useActionState(handleContactForm, { message: '', error: '' });
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    mode: 'onChange',
  });

  const { formState, reset } = form;

  useEffect(() => {
    if (state.message) {
      toast({
        title: "¡Mensaje Enviado!",
        description: state.message,
      });
      reset(); 
    }
    if (state.error) {
      toast({
        variant: "destructive",
        title: "Error al enviar",
        description: state.error,
      });
    }
  }, [state, toast, reset]);


  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline">Envíame un mensaje</CardTitle>
      </CardHeader>
      <CardContent>
          <Form {...form}>
            <form 
              ref={formRef}
              action={formAction}
              className="space-y-4"
            >
               <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input placeholder="Tu nombre" {...field} />
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
                    <FormLabel>Email</FormLabel>
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
                    <FormLabel>Mensaje</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Escribe tu mensaje aquí..." {...field} />
                    </FormControl>
                    <CustomFormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={!formState.isValid || formState.isSubmitting}>
                {formState.isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </Button>
            </form>
          </Form>
      </CardContent>
    </Card>
  );
}
