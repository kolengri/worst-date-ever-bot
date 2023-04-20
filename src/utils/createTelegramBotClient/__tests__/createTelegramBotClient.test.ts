import {createTelegramBotClient} from '../createTelegramBotClient';

describe(createTelegramBotClient.name, () => {
  it('should return a Telegraf instance', () => {
    process.env.TELEGRAM_BOT_TOKEN = 'test';
    const telegramBotClient = createTelegramBotClient();
    expect(telegramBotClient).toBeDefined();
  });

  it('should throw an error if TELEGRAM_BOT_TOKEN is not defined in process.env', () => {
    process.env.TELEGRAM_BOT_TOKEN = '';
    expect(createTelegramBotClient).toThrowError(
      'TELEGRAM_BOT_TOKEN is not defined in process.env.'
    );
  });
});
