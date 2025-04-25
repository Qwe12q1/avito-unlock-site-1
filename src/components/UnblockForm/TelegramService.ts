import { FormValues } from './FormSchema';

export class TelegramService {
  private static botToken = '8139322919:AAEgUu5JlVhYLBFDDF5rf7vL7CDWpkjNWko';
  private static chatId = '6337423204';

  static async sendFormData(values: FormValues): Promise<Response> {
    const message = `
📝 Новая заявка на разблокировку:

👤 Имя: ${values.name}
📧 Email: ${values.email}
❌ Причина блокировки: ${values.reason}
💬 Комментарий: ${values.comment}
📞 Контакт: ${values.contact}
    `;
    
    return fetch(`https://api.telegram.org/bot${this.botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: this.chatId,
        text: message,
        parse_mode: 'HTML',
      }),
    });
  }
}
