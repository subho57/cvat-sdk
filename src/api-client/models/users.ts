/* eslint-disable max-classes-per-file */
import type { EmailAddress, Username } from '@/types';

export interface User {
  readonly url: string;
  readonly id: number;
  username: Username;
  first_name?: string;
  last_name?: string;
  email?: EmailAddress;
  groups: string[];
  /**
   * Designates whether the user can log into this admin site.
   */
  is_staff: boolean;
  /**
   * Designates that this user has all permissions without explicitly assigning them.
   */
  is_superuser: boolean;
  /**
   * Designates whether this user should be treated as active. Unselect this instead of deleting accounts.
   */
  is_active: boolean;
  readonly last_login?: Date;
  readonly date_joined: Date;
}

export class User implements User {
  constructor(data: User) {
    Object.assign(this, {
      ...data,
      last_login: data.last_login ? new Date(data.last_login) : undefined,
      date_joined: new Date(data.date_joined),
    });
  }
}

export type BasicUser = Omit<User, 'email' | 'groups' | 'is_staff' | 'is_superuser' | 'is_active' | 'last_login' | 'date_joined'>;

export interface MetaUser extends User {}

export class MetaUser extends User {}

export type PatchedUserRequest = Partial<Omit<User, 'url' | 'id' | 'last_login' | 'date_joined'>>;

export interface PaginatedMetaUserList {
  readonly count: number;
  readonly next?: string;
  readonly previous?: string;
  readonly results: MetaUser[];
}

export class PaginatedMetaUserList implements PaginatedMetaUserList {
  constructor(data: PaginatedMetaUserList) {
    Object.assign(this, {
      ...data,
      results: data.results.map((result) => new MetaUser(result)),
    });
  }
}
