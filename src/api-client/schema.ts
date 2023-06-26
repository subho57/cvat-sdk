import type { Language } from '@/types';
import { HttpMethod } from '@/utils';

import type { ApiClient } from './client';

export class SchemaApi {
  private apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  /**
   * OpenApi3 schema for this API. Format can be selected via content negotiation. - YAML: application/vnd.oai.openapi - JSON: application/vnd.oai.openapi+json
   * @returns A promise that resolves to a schema.
   */
  async retrieve(opts?: { lang?: Language; schema?: 'json' | 'yaml' }) {
    return this.apiClient.send<Record<string, any>>({ method: HttpMethod.GET, url: `/api/schema`, body: opts });
  }
}
