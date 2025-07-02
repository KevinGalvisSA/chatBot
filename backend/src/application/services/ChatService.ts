import { ChatPort } from '../../ports/ChatPort';
import { Message } from '../../domain/entities/Message';

export class ChatService {
    constructor(private chatRepository: ChatPort) { }

    async processMessage(userText: string): Promise<Message> {
        // Aquí puedes conectar IA o lógica real
        const botReply = this.generateBotReply(userText);

        const userMessage = new Message();
        userMessage.sender = 'user';
        userMessage.text = userText;
        await this.chatRepository.saveMessage(userMessage);

        const botMessage = new Message();
        botMessage.sender = 'bot';
        botMessage.text = botReply;
        return await this.chatRepository.saveMessage(botMessage);
    }

    private generateBotReply(userText: string): string {
        if (userText.toLowerCase().includes('hola')) return '¡Hola! ¿Cómo estás?';
        if (userText.toLowerCase().includes('adiós')) return '¡Hasta luego!';
        return 'Lo siento, soy un bot simple.';
    }
}
