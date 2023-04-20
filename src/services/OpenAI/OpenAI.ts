import {ChatCompletionRequestMessage, Configuration, OpenAIApi} from 'openai';
import {ExternalApi} from '../ExternalApi/ExternalApi';
import {tokenFromProcess} from '@/utils/tokenFromProcess';

type OpenAIOptions = {
  initialMessages?: ChatCompletionRequestMessage[];
};

export class OpenAI extends ExternalApi<OpenAIApi> {
  constructor(options?: OpenAIOptions) {
    super(tokenFromProcess('OPENAI_API_KEY'));
    this.setInitialMessages(options?.initialMessages ?? []);
  }
  private initialMessages: ChatCompletionRequestMessage[] = [];

  public setInitialMessages(messages: ChatCompletionRequestMessage[]) {
    this.initialMessages = messages;
  }

  public async createApi() {
    const apiKey = await this.getToken();
    return new OpenAIApi(new Configuration({apiKey}));
  }

  public async complete(
    message: ChatCompletionRequestMessage,
    maxTokens: number = 1000
  ) {
    const completions = await this.api.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [...this.initialMessages, message],
      max_tokens: maxTokens,
      temperature: 0,
      top_p: 0.1,
    });

    return completions;
  }
}
