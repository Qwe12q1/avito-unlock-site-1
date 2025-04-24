import { FormValues } from './FormSchema';

export class TelegramService {
  private static BOT_TOKEN = '8139322919:AAEgUu5JlVhYLBFDDF5rf7vL7CDWpkjNWko';
  private static CHAT_ID = '6337423204';
  
  static async sendFormData(values: FormValues): Promise<Response> {
    const message = this.formatMessage(values);
    
    return fetch(`https://api.telegram.org/bot${this.BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: this.CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      }),
    });
  }
  
  private static formatMessage(values: FormValues): string {
    return `
📝 Новая заявка на разблокировку:

👤 Имя: ${values.name}
📧 Email: ${values.email}
❌ Причина блокировки: ${values.reason}
💬 Комментарий: ${values.comment}
📞 Контакт: ${values.contact}
    `;
  }
}
