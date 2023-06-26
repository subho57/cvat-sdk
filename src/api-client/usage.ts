import omit from 'lodash/omit';

import { HttpMethod } from '@/utils';

import type { ApiClient } from './client';
import { PaginatedUsageList } from './models/usage';

export class UsageApi {
  private apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  /**
   * Method returns a paginated list of usage according to query parameters
   * @returns A promise that resolves to PaginatedUsageList.
   */
  async list(filters?: {
    /**
     * Organization unique slug (header parameter)
     */
    x_organization?: string;
    filter?: 'user_id' | 'user';
    org?: string;
    org_id?: number;
    page?: number;
    page_size?: number;
    sort?: 'user_id' | 'user';
    user?: string;
    user_id?: number;
  }) {
    return new PaginatedUsageList(
      await this.apiClient.send<PaginatedUsageList>({
        method: HttpMethod.GET,
        url: '/api/usage',
        body: omit(filters, ['x_organization']),
        headers: filters?.x_organization ? { 'X-Organization': filters?.x_organization } : {},
      })
    );
  }
}
