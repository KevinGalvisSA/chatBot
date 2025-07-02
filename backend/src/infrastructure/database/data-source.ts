import { DataSource } from 'typeorm';
import { Message } from '../../domain/entities/Message';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'chatbot_user', 
  password: '1234',
  database: 'chatbot_db',
  entities: [Message],
  synchronize: true,
});
