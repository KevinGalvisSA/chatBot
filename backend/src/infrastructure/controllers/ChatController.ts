import express, { Request, Response } from 'express';
import { ChatService } from '../../application/services/ChatService';
import { ChatRepository } from '../database/repositories/ChatRepository';

const router = express.Router();
const chatService = new ChatService(new ChatRepository());

router.post('/api/chat', async (req: Request, res: Response) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: 'El campo message es obligatorio.' });
    }

    try {
        const botMessage = await chatService.processMessage(message);
        res.json({ reply: botMessage.text });
    } catch (error) {
        console.error('Error al procesar el mensaje:', error);
        res.status(500).json({ error: 'Error interno del servidor.' });
    }
});

export default router;
