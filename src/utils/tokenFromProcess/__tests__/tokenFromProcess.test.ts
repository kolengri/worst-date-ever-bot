import {tokenFromProcess} from '../tokenFromProcess';

describe('tokenFromProcess', () => {
  let envBackup: NodeJS.ProcessEnv;
  const exampleKey = 'SOME_API_KEY';
  beforeAll(() => {
    envBackup = {...process.env};
    process.env[exampleKey] = 'abc123';
  });

  afterAll(() => {
    process.env = envBackup;
  });

  test('should return API key when it is defined in environment variable', () => {
    const result = tokenFromProcess(exampleKey);
    expect(result).toBe('abc123');
  });

  test('should throw an error when the variable is not defined', () => {
    const invalidKey = 'INVALID_API_KEY';
    expect(() => tokenFromProcess(invalidKey)).toThrowError(
      `${invalidKey} is not defined in process.env.`
    );
  });
});
