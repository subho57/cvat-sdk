export interface UserAgreement {
  name: string;
  url_display_text: string;
  url: string;
  text_prefix: string;
  required: boolean;
  value: boolean;
}

export class UserAgreement implements UserAgreement {
  constructor(data: UserAgreement) {
    Object.assign(this, data);
  }
}
