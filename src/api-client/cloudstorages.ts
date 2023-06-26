import type { ApiClient } from './client';

export class CloudStoragesApi {
  private apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }
}
