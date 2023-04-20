import {Context} from 'telegraf';
import {logger} from '../logger';
import {isNumericString} from '../type-guards';

export const restrictUsers = async (
  ctx: Context,
  next: () => Promise<void>
) => {
  const allowedUserIds =
    process.env.ALLOWED_USER_IDS?.split(',')
      .map((s) => s.replace(' ', ''))
      .filter(isNumericString)
      .map((p) => parseInt(p)) ?? [];

  const userId = ctx.message?.from.id;

  if (!userId) {
    logger.warn('No user id found in the message. No answer will be sent.');
    return;
  }

  if (allowedUserIds.length === 0) {
    logger.warn(
      'No user is listed in the allowed users list. This means that anyone can send messages.'
    );
    return await next();
  }

  if (allowedUserIds.includes(userId)) {
    return await next();
  }

  if (!allowedUserIds.includes(userId)) {
    logger.warn(`User ${userId} is not allowed to use this feature.`, {
      meta: {
        allowedUserIds,
      },
    });

    return await ctx.reply('Sorry, you do not have access to this feature.');
  }
};
