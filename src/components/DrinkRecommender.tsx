"use client";

import { useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { getDrinkRecommendations } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Bot, Loader2, Sparkles } from 'lucide-react';

const initialState = {
  recommendation: '',
  error: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generando...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Obtener Recomendación
        </>
      )}
    </Button>
  );
}

export default function DrinkRecommender() {
  const [state, formAction] = useFormState(getDrinkRecommendations, initialState);
  const [key, setKey] = useState(0);

  const handleReset = () => {
    setKey(prevKey => prevKey + 1);
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-background/50" key={key}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline">
          <Bot />
          Recomendador de Tragos IA
        </CardTitle>
        <CardDescription>
          Describe tus gustos y la IA te dará una recomendación personalizada.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {state.recommendation ? (
          <div className="space-y-4">
             <Alert>
              <Sparkles className="h-4 w-4" />
              <AlertTitle>¡Aquí tienes tu recomendación!</AlertTitle>
              <AlertDescription className="mt-2 whitespace-pre-wrap">
                {state.recommendation}
              </AlertDescription>
            </Alert>
            <Button variant="outline" onClick={handleReset} className="w-full">Probar de nuevo</Button>
          </div>
        ) : (
          <form action={formAction} className="space-y-4">
            <Textarea
              name="criteria"
              placeholder="Ej: Me gustan los tragos dulces, con ron y frutas tropicales..."
              required
              rows={4}
            />
            <SubmitButton />
          </form>
        )}
        {state.error && (
            <Alert variant="destructive" className="mt-4">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{state.error}</AlertDescription>
            </Alert>
          )}
      </CardContent>
    </Card>
  );
}
