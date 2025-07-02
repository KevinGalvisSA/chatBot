import { DataSource } from 'typeorm';
import { Message } from '../../domain/entities/Message';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',      // Cambia según tu config
  password: 'tu_password',
  database: 'chatbot_db',
  entities: [Message],
  synchronize: true,
});
