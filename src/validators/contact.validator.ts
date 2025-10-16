import z from "zod";

const contactFormSchema = z.object({
    fullName: z
      .string()
      .min(2, { message: 'Full name must be at least 2 characters.' })
      .max(50, { message: 'Full name must not exceed 50 characters.' }),
    email: z
      .string()
      .email({ message: 'Please enter a valid email address.' }),
    phoneNumber: z
      .string()
      .min(10, { message: 'Phone number must be at least 10 digits.' })
      .max(15, { message: 'Phone number must not exceed 15 digits.' })
      .regex(/^[0-9+\-\s()]*$/, { message: 'Please enter a valid phone number.' }),
    companyName: z
      .string()
      .min(2, { message: 'Company name must be at least 2 characters.' })
      .max(100, { message: 'Company name must not exceed 100 characters.' })
      .optional()
      .or(z.literal('')),
    requirement: z
      .string()
      .min(10, { message: 'Please provide at least 10 characters describing your requirement.' })
      .max(1000, { message: 'Requirement description must not exceed 1000 characters.' }),
  })
export default contactFormSchema;
export type ContactFormData = z.infer<typeof contactFormSchema>;