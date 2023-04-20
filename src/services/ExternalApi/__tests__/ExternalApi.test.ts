import {ExternalApi} from '../ExternalApi';

class ExternalApiMock extends ExternalApi<any> {
  createApi() {
    return Promise.resolve('testInstance');
  }
}

describe('ExternalApi', () => {
  let externalApi: ExternalApiMock;

  beforeEach(() => {
    externalApi = new ExternalApiMock('token'); // Change 'token' to your desired token value
  });

  it('should retrieve the API instance', () => {
    expect(externalApi.getApi()).toBeDefined();
  });

  it('should retrieve the token', async () => {
    await expect(externalApi.getToken()).resolves.toEqual('token'); // Change 'token' to your desired token value
  });
});
