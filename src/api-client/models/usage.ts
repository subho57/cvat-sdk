/* eslint-disable max-classes-per-file */
export interface Usage {
  readonly user_id: number;
  readonly org_id?: number;
  readonly function_calls: string;
}

export class Usage implements Usage {
  constructor(data: Usage) {
    Object.assign(this, data);
  }
}

export interface PaginatedUsageList {
  readonly count: number;
  readonly next?: string;
  readonly previous?: string;
  readonly results: Usage[];
}

export class PaginatedUsageList implements PaginatedUsageList {
  constructor(data: PaginatedUsageList) {
    Object.assign(this, {
      ...data,
      results: data.results.map((result) => new Usage(result)),
    });
  }
}
