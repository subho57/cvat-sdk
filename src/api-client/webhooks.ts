import type { ApiClient } from './client';

export class WebhooksApi {
  private apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }
}
