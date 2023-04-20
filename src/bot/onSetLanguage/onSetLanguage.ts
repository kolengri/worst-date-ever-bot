import {languages} from '@/config/languages';
import {createLanguageArray} from './createLanguageArray';
import {Markup} from 'telegraf';

const buttons = Markup.keyboard(createLanguageArray(languages)).resize();

export const onSetLanguage = async (ctx: BotOnMessageContext) => {
  await ctx.reply('Choose your language', buttons);
};
