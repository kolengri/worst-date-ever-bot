import {Telegram} from '../Telegram';
import {restrictUsers} from '@/utils/restrictUsers';
import {tokenFromProcess} from '@/utils/tokenFromProcess';

jest.mock('@/utils/tokenFromProcess', () => ({
  tokenFromProcess: jest.fn(),
}));

describe(Telegram.name, () => {
  let telegram: Telegram;
  const botToken = 'BOT_TOKEN';
  beforeEach(() => {
    (tokenFromProcess as jest.Mock).mockReturnValue(botToken);

    // Create a new instance of the Telegram class
    telegram = new Telegram();
  });

  afterEach(() => {
    // Restore the mock function to its original implementation
    jest.restoreAllMocks();
  });

  describe('constructor', () => {
    it('should create a new instance of the Telegram class', () => {
      expect(telegram).toBeInstanceOf(Telegram);
    });
  });

  describe('start', () => {
    it('should call the launch method on the api', () => {
      const launchSpy = jest.spyOn(telegram.api, 'launch');

      telegram.start();

      expect(launchSpy).toHaveBeenCalled();
    });
  });

  describe('stop', () => {
    it('should call the stop method on the api', () => {
      const stopSpy = jest.spyOn(telegram.api, 'stop');

      telegram.stop();

      expect(stopSpy).toHaveBeenCalled();
    });
  });

  describe('onMessage', () => {
    it('should call the on method on the api with the message filter, restrictUsers middleware, and the provided function', () => {
      const onSpy = jest.spyOn(telegram.api, 'on');

      const fn = () => {};

      telegram.onMessage(fn);

      expect(onSpy).toHaveBeenCalledWith('text', restrictUsers, fn);
    });
  });

  describe('onCommand', () => {
    it('should call the command method on the api with the provided command, restrictUsers middleware, and the provided function', () => {
      const commandSpy = jest.spyOn(telegram.api, 'command');

      const fn = () => {};

      telegram.onCommand('test', fn);

      expect(commandSpy).toHaveBeenCalledWith('test', restrictUsers, fn);
    });
  });

  describe('onAction', () => {
    it('should call the action method on the api with the provided action, restrictUsers middleware, and the provided function', () => {
      const actionSpy = jest.spyOn(telegram.api, 'action');

      const fn = () => {};

      telegram.onAction('test', fn);

      expect(actionSpy).toHaveBeenCalledWith('test', restrictUsers, fn);
    });
  });

  describe('onStart', () => {
    it('should call the start method on the api with restrictUsers middleware and the provided function', () => {
      const startSpy = jest.spyOn(telegram.api, 'start');

      const fn = () => {};

      telegram.onStart(fn);

      expect(startSpy).toHaveBeenCalledWith(restrictUsers, fn);
    });
  });

  describe('onQuit', () => {
    it('should call the onCommand method with "quit" and the provided function', () => {
      const onCommandSpy = jest.spyOn(telegram, 'onCommand');

      const fn = () => {};

      telegram.onQuit(fn);

      expect(onCommandSpy).toHaveBeenCalledWith('quit', fn);
    });
  });

  describe('onHelp', () => {
    it('should call the onCommand method with "help" and the provided function', () => {
      const onCommandSpy = jest.spyOn(telegram, 'onCommand');

      const fn = () => {};

      telegram.onHelp(fn);

      expect(onCommandSpy).toHaveBeenCalledWith('help', fn);
    });
  });

  describe('onSettings', () => {
    it('should call the settings method on the api with restrictUsers middleware and the provided function', () => {
      const settingsSpy = jest.spyOn(telegram.api, 'settings');

      const fn = () => {};

      telegram.onSettings(fn);

      expect(settingsSpy).toHaveBeenCalledWith(restrictUsers, fn);
    });
  });
});
