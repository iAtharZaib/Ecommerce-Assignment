import * as z from 'zod';

export const enum SupportedLanguages {
  AR_AR = 'ar-AR',
  EN_EN = 'en-EN',
}

export const languageSchema = z.enum([
  SupportedLanguages.AR_AR,
  SupportedLanguages.EN_EN,
]);

export type Language = z.infer<typeof languageSchema>;
