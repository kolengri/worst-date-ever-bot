import {createOpenAIClient} from '../createOpenAIClient';

describe(createOpenAIClient.name, () => {
  it('should return an OpenAIApi instance', () => {
    process.env.OPENAI_API_KEY = 'test';
    const openAIClient = createOpenAIClient();
    expect(openAIClient).toBeDefined();
  });

  it('should throw an error if OPENAI_API_KEY is not defined in process.env', () => {
    process.env.OPENAI_API_KEY = '';
    expect(createOpenAIClient).toThrowError(
      'OPENAI_API_KEY is not defined in process.env.'
    );
  });
});
