'use server';

import { z } from 'zod';

// Contact Form Action
const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function handleContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      error: 'Datos inválidos. Por favor, revisa el formulario.',
      message: ''
    };
  }

  // Here you would typically send an email, save to a database, etc.
  // For this example, we'll just log it to the console.
  console.log('Nuevo mensaje de contacto:');
  console.log(validatedFields.data);

  return {
    message: 'Gracias por tu mensaje. Te responderé pronto.',
    error: ''
  };
}
