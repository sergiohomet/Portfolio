import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Section,
} from '@react-email/components';
import * as React from 'react';

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactEmail = ({
  name,
  email,
  message,
}: ContactEmailProps) => (
  <Html>
    <Head />
    <Preview>Nuevo mensaje de tu portfolio de {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>Nuevo Mensaje de Contacto</Heading>
        <Section style={section}>
          <Text style={paragraph}>Has recibido un nuevo mensaje a través del formulario de tu portfolio.</Text>
        </Section>
        <Section style={detailsSection}>
          <Text style={detailLabel}>De:</Text>
          <Text style={detailValue}>{name}</Text>
          <Text style={detailLabel}>Email:</Text>
          <Text style={detailValue}>{email}</Text>
        </Section>
        <Section style={messageSection}>
          <Text style={detailLabel}>Mensaje:</Text>
          <Text style={messageText}>{message}</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ContactEmail;

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #eee',
  borderRadius: '5px',
  maxWidth: '600px',
};

const heading = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#333',
  borderBottom: '1px solid #eee',
  paddingBottom: '10px',
};

const section = {
  margin: '24px 0',
};

const detailsSection = {
  padding: '16px',
  backgroundColor: '#f8f9fa',
  borderRadius: '5px',
};

const messageSection = {
  marginTop: '24px',
}

const paragraph = {
  fontSize: '16px',
  lineHeight: '1.5',
  color: '#555',
};

const detailLabel = {
  fontSize: '14px',
  fontWeight: 'bold',
  color: '#555',
  margin: '0 0 4px 0',
};

const detailValue = {
  fontSize: '16px',
  color: '#333',
  margin: '0 0 16px 0',
};

const messageText = {
  fontSize: '16px',
  lineHeight: '1.6',
  color: '#333',
  padding: '16px',
  border: '1px solid #ddd',
  borderRadius: '5px',
  whiteSpace: 'pre-wrap' as const,
};
