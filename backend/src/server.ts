import express from 'express';
import cors from 'cors';
import chatController from './infrastructure/controllers/ChatController';
import { AppDataSource } from './infrastructure/database/data-source';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(chatController);

AppDataSource.initialize()
    .then(() => {
        console.log('Conexión a la base de datos establecida ✅');
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });
    })
    .catch((error) => console.error('Error al conectar a la base de datos:', error));
