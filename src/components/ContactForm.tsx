"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useFormState, useFormStatus } from 'react-dom';
import { handleContactForm } from '@/app/actions';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, introduce un email válido.' }),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }),
});

type FormValues = z.infer<typeof formSchema>;

const initialState = {
  message: '',
  error: '',
};

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
      <Button type="submit" disabled={pending} className="w-full">
        {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
        Enviar Mensaje
      </Button>
    );
}

export default function ContactForm() {
  const [state, formAction] = useFormState(handleContactForm, initialState);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  useEffect(() => {
    if (state.message) {
      toast({
        title: "¡Éxito!",
        description: state.message,
      });
      form.reset();
    }
    if (state.error) {
        toast({
            title: "Error",
            description: state.error,
            variant: "destructive",
        });
    }
  }, [state, toast, form]);

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline">Envíame un mensaje</CardTitle>
        <CardDescription>Rellena el formulario y me pondré en contacto contigo.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form action={formAction} className="space-y-4">
             <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input placeholder="Tu nombre" {...field} />
                  </FormControl>
                  <FormMessage />
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
                  <FormMessage />
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
                  <FormMessage />
                </FormItem>
              )}
            />
             {/* We need to pass form data to server action */}
             <input type="hidden" name="name" value={form.getValues("name")} />
             <input type="hidden" name="email" value={form.getValues("email")} />
             <input type="hidden" name="message" value={form.getValues("message")} />

            <SubmitButton />
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
