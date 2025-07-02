import { Message } from '../domain/entities/Message';

export interface ChatPort {
    saveMessage(message: Message): Promise<Message>;
}
