import { HttpMethod } from '@/utils';

import type { ApiClient } from './client';
import { UserAgreement } from './models/subscriptions';

export class SubscriptionsApi {
  private apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  /**
   * Method provides user agreements that the user must accept to register
   */
  async retrieve() {
    return new UserAgreement(
      await this.apiClient.send<UserAgreement>({
        method: HttpMethod.GET,
        url: '/api/user-agreements',
      })
    );
  }
}
