import {logger} from '@/utils/logger';
import {onStart} from './onStart';
import {onQuit} from './onQuit';
import {onMessage} from './onMessage';
import {Telegram} from '@/services/Telegram';

export const init = async () => {
  try {
    logger.info('Bot initialization started', {
      meta: {
        env: process.env.NODE_ENV,
        allowedUserIds: process.env.ALLOWED_USER_IDS,
      },
    });

    const bot = new Telegram();

    bot.onStart(onStart);
    bot.onQuit(onQuit);
    bot.onMessage(onMessage);

    bot.start();

    logger.info('Bot initialization finished successfully');
  } catch (error) {
    logger.error('Bot initialization failed -', error);
  }
};
