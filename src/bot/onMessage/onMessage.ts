import {OpenAI} from '@/services/OpenAI';
import {logger} from '@/utils/logger';
import {
  ChatCompletionRequestMessage,
  ChatCompletionRequestMessageRoleEnum,
} from 'openai';

const INIT_MESSAGES_PROMPT: Array<ChatCompletionRequestMessage> = [
  {
    role: ChatCompletionRequestMessageRoleEnum.System,
    // prettier-ignore
    content: ``,
  },
];

export const onMessage = async (ctx: BotOnMessageContext) => {
  const ai = new OpenAI({
    initialMessages: INIT_MESSAGES_PROMPT,
  });
  const {text} = ctx?.message ?? {};

  if (!text) {
    logger.info('Bot message received - no text', {meta: ctx.message});
    return;
  }

  logger.info('Bot message received', {
    meta: ctx.message,
  });

  try {
    ctx.sendChatAction('typing');
    logger.info('AI request started', {meta: text});

    const completions = await ai.complete({
      content: text,
      role: 'user',
    });

    logger.info('AI request finished', {meta: completions.data});

    const message = completions.data.choices[0].message;

    if (!message) {
      logger.error('AI request failed - no text in response', {
        meta: completions.data,
      });
      return;
    }

    logger.info('AI request finished successfully');
    await ctx.reply(message.content);
    logger.info('Bot message sent', {meta: message.content});
  } catch (error) {
    logger.error('AI request failed -', error);
  }
};
