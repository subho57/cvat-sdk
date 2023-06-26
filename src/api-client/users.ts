import omit from 'lodash/omit';

import type { Username } from '@/types';
import { HttpMethod } from '@/utils';

import type { ApiClient } from './client';
import type { BasicUser, PatchedUserRequest } from './models/users';
import { MetaUser, PaginatedMetaUserList } from './models/users';

export class UsersApi {
  private apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  /**
   * Method deletes a specific user from the server
   * @param id A unique integer value identifying this user.
   * @returns A promise that resolves to undefined.
   */
  async destroy(id: number) {
    return this.apiClient.send<undefined>({ method: HttpMethod.DELETE, url: `/api/users/${id}` });
  }

  /**
   * Method returns a paginated list of users
   */
  async list(filters?: {
    /**
     * Organization unique slug (header parameter)
     */
    x_organization?: string;
    filter?: keyof Omit<BasicUser, 'url'> | 'is_active';
    first_name?: string;
    is_active?: boolean;
    last_name?: string;
    org?: string;
    org_id?: number;
    page?: number;
    page_size?: number;
    search?: string;
    sort?: keyof Omit<BasicUser, 'url'> | 'is_active';
    username?: Username;
  }) {
    return new PaginatedMetaUserList(
      await this.apiClient.send<PaginatedMetaUserList>({
        method: HttpMethod.GET,
        url: '/api/users',
        body: omit(filters, ['x_organization']),
        headers: filters?.x_organization ? { 'X-Organization': filters?.x_organization } : {},
      })
    );
  }

  /**
   * Method updates chosen fields of a user
   * @param id A unique integer value identifying this user.
   * @param patchedUserRequest User object with fields to be updated.
   * @returns A promise that resolves to a user.
   */
  async partialUpdate(id: number, patchedUserRequest: PatchedUserRequest) {
    return new MetaUser(
      await this.apiClient.send<MetaUser>({ method: HttpMethod.PATCH, url: `/api/users/${id}`, body: patchedUserRequest })
    );
  }

  /**
   * Method provides information of a specific user
   * @param id A unique integer value identifying this user.
   * @returns A promise that resolves to a user.
   */
  async retrieve(id: number) {
    return new MetaUser(await this.apiClient.send<MetaUser>({ method: HttpMethod.GET, url: `/api/users/${id}` }));
  }

  /**
   * Method returns an instance of a user who is currently authorized
   * @returns A promise that resolves to a user.
   */
  async retrieveSelf() {
    return new MetaUser(await this.apiClient.send<MetaUser>({ method: HttpMethod.GET, url: '/api/users/self' }));
  }
}
