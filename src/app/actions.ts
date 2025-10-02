'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import ContactEmail from '@/components/emails/ContactEmail';
import { render } from '@react-email/render';

const resend = new Resend(process.env.RESEND_API_KEY);

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

  const { name, email, message } = validatedFields.data;
  
  const emailHtml = render(
    ContactEmail({
      name,
      email,
      message
    })
  );

  try {
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'sergiohomet@gmail.com',
      subject: `Nuevo mensaje de tu portfolio de ${name}`,
      reply_to: email,
      html: emailHtml,
    });

    return {
      message: '¡Gracias por tu mensaje! Te responderé pronto.',
      error: ''
    };
  } catch (error) {
    console.error(error);
    return {
      error: 'Hubo un error al enviar el mensaje. Por favor, inténtalo más tarde.',
      message: ''
    };
  }
}
