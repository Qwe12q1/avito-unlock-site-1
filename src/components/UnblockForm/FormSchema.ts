import { z } from 'zod';

export const formSchema = z.object({
  email: z.string().email({ message: 'Укажите корректный email-адрес' }),
  name: z.string().min(2, { message: 'Имя должно содержать минимум 2 символа' }),
  reason: z.string().min(5, { message: 'Укажите причину блокировки' }),
  comment: z.string().min(10, { message: 'Комментарий должен содержать минимум 10 символов' }),
  contact: z.string().min(3, { message: 'Укажите контактные данные для связи' }),
});

export type FormValues = z.infer<typeof formSchema>;
