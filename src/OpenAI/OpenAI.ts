import {createOpenAIClient} from '@/utils/createOpenAIClient';
import {ChatCompletionRequestMessage, OpenAIApi} from 'openai';

export class OpenAI {
  private api: OpenAIApi;
  private initialMessages: ChatCompletionRequestMessage[] = [];

  constructor(args?: {initialMessages?: ChatCompletionRequestMessage[]}) {
    const {initialMessages} = args ?? {};
    if (initialMessages) this.initialMessages = initialMessages;
    this.api = createOpenAIClient();
  }

  public setInitialMessages(messages: ChatCompletionRequestMessage[]) {
    this.initialMessages = messages;
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
