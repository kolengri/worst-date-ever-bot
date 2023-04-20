import {logger} from '@/utils/logger';
import {restrictUsers} from '@/utils/restrictUsers';
import {message} from 'telegraf/filters';
import {ExternalApi} from '../ExternalApi/ExternalApi';
import {tokenFromProcess} from '@/utils/tokenFromProcess';
import {Telegraf} from 'telegraf';

export class Telegram extends ExternalApi<BotInstance> {
  constructor() {
    super(tokenFromProcess('TELEGRAM_BOT_TOKEN'));
    this.enableGracefulShutdown();
  }

  public async createApi() {
    return new Telegraf(this.token);
  }

  public start() {
    this.api.launch();
  }

  public stop(signal?: string) {
    this.api.stop(signal);
  }

  public onMessage(fn: (ctx: BotOnMessageContext) => void) {
    this.api.on(message('text'), restrictUsers, fn as any);
  }

  public onCommand(
    command: string | RegExp,
    fn: (ctx: BotOnMessageContext) => void
  ) {
    this.api.command(command, restrictUsers, fn as any);
  }

  public onAction(
    action: string | RegExp,
    fn: (ctx: BotOnMessageContext) => void
  ) {
    this.api.action(action, restrictUsers, fn as any);
  }

  public onStart(fn: (ctx: BotOnMessageContext) => void) {
    this.api.start(restrictUsers, fn as any);
  }

  public onQuit(fn: (ctx: BotOnMessageContext) => void) {
    this.onCommand('quit', fn);
  }

  public onHelp(fn: (ctx: BotOnMessageContext) => void) {
    this.onCommand('help', fn);
  }

  public onSettings(fn: (ctx: BotOnMessageContext) => void) {
    this.api.settings(restrictUsers, fn as any);
  }

  private enableGracefulShutdown() {
    const bot = this.api;
    // Enable graceful stop
    process.once('SIGINT', (e) => {
      logger.error('SIGINT', e);
      bot.stop('SIGINT');
    });
    process.once('SIGTERM', (e) => {
      logger.error('SIGTERM', e);
      bot.stop('SIGTERM');
    });
  }
}
