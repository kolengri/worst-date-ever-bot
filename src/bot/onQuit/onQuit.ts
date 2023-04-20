import {logger} from '@/utils/logger';

export const onQuit = async (ctx: BotOnMessageContext) => {
  logger.info('Bot quit command received');
  await ctx.telegram.leaveChat(ctx.message.chat.id);
  await ctx.leaveChat();
  logger.info('Bot quit command finished');
};
