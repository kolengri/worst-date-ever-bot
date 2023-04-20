import {restrictUsers} from '../restrictUsers';

describe('restrictUsers', () => {
  let ctx: BotOnMessageContext;
  let next: jest.Mock;

  beforeEach(() => {
    // Initialize mock context and next function for each test
    ctx = {
      message: {
        from: {
          id: 123,
        },
      },
      reply: jest.fn(),
    } as any as BotOnMessageContext;
    next = jest.fn();
  });

  it('should call next if user is allowed', async () => {
    process.env.ALLOWED_USER_IDS = '3223, 123456';
    ctx.message.from.id = 123456;

    await restrictUsers(ctx, next);

    expect(next).toHaveBeenCalled();
  });

  it('should reply with an error message if user is not allowed', async () => {
    process.env.ALLOWED_USER_IDS = '3223, 123456';

    ctx.message.from.id = 456;

    await restrictUsers(ctx, next);

    expect(ctx.reply).toHaveBeenCalledWith(
      'Sorry, you do not have access to this feature.'
    );

    expect(next).not.toHaveBeenCalled();
  });

  it('should allow reply for empty ALLOWED_USER_IDS list', async () => {
    process.env.ALLOWED_USER_IDS = '';

    ctx.message.from.id = 456;

    await restrictUsers(ctx, next);

    expect(next).toHaveBeenCalled();
  });
});
