import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { Message } from '../../../domain/entities/Message';
import { ChatPort } from '../../../ports/ChatPort';

export class ChatRepository implements ChatPort {
    private repo: Repository<Message>;

    constructor() {
        this.repo = AppDataSource.getRepository(Message);
    }

    async saveMessage(message: Message): Promise<Message> {
        return await this.repo.save(message);
    }
}
