"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Loader2, Mail } from 'lucide-react';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from './ui/alert-dialog';

const formSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, introduce un email válido.' }),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }),
});

type FormValues = z.infer<typeof formSchema>;

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
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = () => {
    // This function is triggered, but we will show the dialog instead of submitting.
  };


  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline">Envíame un mensaje</CardTitle>
        <CardDescription>O haz click aquí para enviarme un correo directamente.</CardDescription>
        <a href="mailto:sergiohomet@gmail.com" className='pt-2'>
            <Button variant="outline">
                <Mail className="mr-2 h-4 w-4" />
                Contactar por Email
            </Button>
        </a>
      </CardHeader>
      <CardContent>
        <AlertDialog>
          <Form {...form}>
            <form 
              ref={formRef}
              onSubmit={form.handleSubmit(onSubmit)}
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
              <AlertDialogTrigger asChild>
                <Button type="submit" className="w-full">
                  Enviar Mensaje
                </Button>
              </AlertDialogTrigger>
            </form>
          </Form>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>¡Funcionalidad en desarrollo!</AlertDialogTitle>
              <AlertDialogDescription>
                El formulario de contacto aún no está activo. Por favor, para contactarme, envíame un correo electrónico directamente. ¡Gracias por tu comprensión!
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction>Entendido</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardContent>
    </Card>
  );
}
