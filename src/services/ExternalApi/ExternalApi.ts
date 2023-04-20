export class ExternalApi<Api> {
  token: string;
  api!: Api;

  constructor(token: string) {
    this.token = token;
    this.init();
  }

  async createApi(): Promise<Api> {
    throw new Error('createApi is not implemented');
  }

  public async init() {
    this.api = await this.createApi();
  }

  public getApi() {
    return this.api;
  }

  public async getToken() {
    return this.token;
  }
}
