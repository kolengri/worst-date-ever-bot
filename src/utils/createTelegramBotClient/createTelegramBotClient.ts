import { Telegraf } from 'telegraf';

export const createTelegramBotClient = () => {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (!token)
    throw new Error('TELEGRAM_BOT_TOKEN is not defined in process.env.');

  return new Telegraf(token);
};
