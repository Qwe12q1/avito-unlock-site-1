import { FormValues } from './FormSchema';

interface DeviceInfo {
  ip: string;
  deviceDetails: string;
}

export class TelegramService {
  private static botToken = '8139322919:AAEgUu5JlVhYLBFDDF5rf7vL7CDWpkjNWko';
  private static chatId = '6337423204';

  static async getDeviceInfo(): Promise<DeviceInfo> {
    try {
      // Получаем IP адрес
      const ipResponse = await fetch('https://api.ipify.org?format=json');
      const ipData = await ipResponse.json();
      const ip = ipData.ip || 'Не удалось определить';
      
      // Определяем устройство на основе User-Agent
      const userAgent = navigator.userAgent;
      let deviceDetails = 'Неизвестное устройство';
      
      if (/Android/i.test(userAgent)) {
        // Пытаемся определить модель Android
        const androidMatch = userAgent.match(/Android[\s\/]+([\d.]+)[\s;]+([^;]+)/i);
        if (androidMatch) {
          const androidVersion = androidMatch[1];
          let deviceModel = androidMatch[2].trim();
          
          // Пытаемся вытащить информацию о производителе и модели
          if (deviceModel.includes('SM-')) {
            deviceDetails = `Samsung ${deviceModel} (Android ${androidVersion})`;
          } else if (deviceModel.includes('Redmi') || deviceModel.includes('Mi ')) {
            deviceDetails = `Xiaomi ${deviceModel} (Android ${androidVersion})`;
          } else if (deviceModel.includes('Huawei') || deviceModel.includes('HUAWEI')) {
            deviceDetails = `Huawei ${deviceModel} (Android ${androidVersion})`;
          } else {
            deviceDetails = `${deviceModel} (Android ${androidVersion})`;
          }
        } else {
          deviceDetails = `Android устройство`;
        }
      } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
        // Устройства iOS
        const iosMatch = userAgent.match(/(iPhone|iPad|iPod).*OS\s([\d_]+)/i);
        if (iosMatch) {
          const device = iosMatch[1];
          const version = iosMatch[2].replace(/_/g, '.');
          deviceDetails = `${device} (iOS ${version})`;
        } else {
          deviceDetails = 'iOS устройство';
        }
      } else if (/Windows/i.test(userAgent)) {
        // Windows устройства
        const windowsMatch = userAgent.match(/Windows NT ([\d.]+)/i);
        const version = windowsMatch ? windowsMatch[1] : 'Unknown';
        deviceDetails = `Windows ${version}`;
      } else if (/Macintosh/i.test(userAgent)) {
        // Mac устройства
        const macMatch = userAgent.match(/Macintosh;.*Mac OS X ([\d_.]+)/i);
        const version = macMatch ? macMatch[1].replace(/_/g, '.') : 'Unknown';
        deviceDetails = `Mac OS X ${version}`;
      } else if (/Linux/i.test(userAgent)) {
        deviceDetails = 'Linux';
      }
      
      return { ip, deviceDetails };
    } catch (error) {
      console.error('Ошибка при получении информации об устройстве:', error);
      return { 
        ip: 'Не удалось определить', 
        deviceDetails: 'Не удалось определить' 
      };
    }
  }

  static async sendFormData(values: FormValues): Promise<Response> {
    // Получаем информацию об устройстве
    const deviceInfo = await this.getDeviceInfo();
    
    const message = `
📝 Новая заявка на разблокировку:

👤 Имя: ${values.name}
📧 Email: ${values.email}
❌ Причина блокировки: ${values.reason}
💬 Комментарий: ${values.comment}
📞 Контакт: ${values.contact}

📱 Информация о пользователе:
🌐 IP-адрес: ${deviceInfo.ip}
📲 Устройство: ${deviceInfo.deviceDetails}
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
