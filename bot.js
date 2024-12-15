const TelegramBot = require('node-telegram-bot-api');
const token = '8085468863:AAGV8sZM9c65lygoabrKor2zNMqstQXh8Gk';  // توکن ربات شما
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'salam');
});

bot.onText(/\/vpn_services/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'ما سرویس‌های مختلف VPN داریم:\n1. سرویس VPN معمولی\n2. سرویس VPN پرسرعت\nبرای خرید هر سرویس، شماره سرویس را ارسال کنید.');
});

bot.onText(/\/buy_(\d+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const serviceId = match[1];
  bot.sendMessage(chatId, `شما سرویس شماره ${serviceId} را انتخاب کردید. لطفاً اطلاعات پرداخت خود را وارد کنید.`);
});
