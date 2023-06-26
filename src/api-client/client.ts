import type { RawAxiosRequestConfig } from 'axios';
import axios from 'axios';

import type { CustomRequest, HttpMethod } from '@/utils';

import type { Configuration } from './configuration';

export class ApiClient {
  private configuration: Configuration;

  constructor(configuration: Configuration) {
    this.configuration = configuration;
  }

  async send<T = any>(params: {
    method: HttpMethod;
    url: string;
    body?: CustomRequest;
    headers?: Record<string, string>;
    returnRaw?: boolean;
    responseType?: 'json' | 'stream';
  }) {
    const config: RawAxiosRequestConfig<string> = {
      method: params.method,
      auth: {
        username: this.configuration.username ?? '',
        password: this.configuration.password ?? '',
      },
      headers: {
        'Content-Type': 'application/json',
        ...params.headers,
      },
      url: this.configuration.url + params.url,
      data: JSON.stringify(params.body ?? {}),
      responseType: params.responseType ?? 'json',
    };
    return axios<T>(config).then((response) => {
      if (params.returnRaw) {
        return response as T;
      }
      return response.data;
    });
  }
}
