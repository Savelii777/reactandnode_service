const express = require('express');
const axios = require('axios');
const TelegramBot = require('node-telegram-bot-api');
const cors = require('cors');
const bodyParser = require('body-parser');



// Замените на свой токен
const token = '6586146588:AAF4grYh7_ePIL1baFb6tz0zBJ8gfjzTyvU';
const bot = new TelegramBot(token, {polling: true});

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.post('/send', async (req, res) => {
    const { userPhone, userName } = req.body;
    console.log(`User phone: ${userPhone}, user name: ${userName}`);

    // Замените chatId на ID чата, в который вы хотите отправить сообщение
    const chatId = '-4078984131';

    const message = `Имя: ${userName}, Телефон пользователя: ${userPhone}`;

    bot.sendMessage(chatId, message);

    res.status(200).send('Сообщение отправлено');
});

app.listen(3001, () => console.log('Сервер запущен на порту 3001'));
