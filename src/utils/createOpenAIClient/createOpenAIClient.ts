import {OpenAIApi, Configuration} from 'openai';

export const createOpenAIClient = () => {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error('OPENAI_API_KEY is not defined in process.env.');

  return new OpenAIApi(new Configuration({apiKey}));
};
