'use server';

/**
 * @fileOverview A flow that generates personalized drink recommendations based on user input.
 *
 * - personalizedDrinkRecommendations - A function that generates drink recommendations.
 * - PersonalizedDrinkRecommendationsInput - The input type for the personalizedDrinkRecommendations function.
 * - PersonalizedDrinkRecommendationsOutput - The return type for the personalizedDrinkRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedDrinkRecommendationsInputSchema = z.object({
  criteria: z.string().describe('The criteria for drink recommendations, such as preferred ingredients or flavors.'),
});
export type PersonalizedDrinkRecommendationsInput = z.infer<typeof PersonalizedDrinkRecommendationsInputSchema>;

const PersonalizedDrinkRecommendationsOutputSchema = z.object({
  recommendations: z.string().describe('A list of personalized drink recommendations based on the provided criteria.'),
});
export type PersonalizedDrinkRecommendationsOutput = z.infer<typeof PersonalizedDrinkRecommendationsOutputSchema>;

export async function personalizedDrinkRecommendations(input: PersonalizedDrinkRecommendationsInput): Promise<PersonalizedDrinkRecommendationsOutput> {
  return personalizedDrinkRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedDrinkRecommendationsPrompt',
  input: {schema: PersonalizedDrinkRecommendationsInputSchema},
  output: {schema: PersonalizedDrinkRecommendationsOutputSchema},
  prompt: `You are a drink recommendation expert. Based on the user's criteria, provide a list of personalized drink recommendations.\n\nCriteria: {{{criteria}}}`,
});

const personalizedDrinkRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedDrinkRecommendationsFlow',
    inputSchema: PersonalizedDrinkRecommendationsInputSchema,
    outputSchema: PersonalizedDrinkRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
