import trimEnd from 'lodash/trimEnd';

/**
 * CVAT supports 2 authentication options:
 *
 * ∙ basic auth, with your username and password
 *
 * ∙ token auth, with your API key
 *
 * Token auth requires a token, which can be obtained after performing the basic auth.
 */
export class Configuration {
  url: string;

  username?: string;

  password?: string;

  cookies?: {
    sessionid: string;
    csrftoken: string;
  };

  authKey?: string;

  constructor(
    config: { host?: string; port?: number } & (
      | { username: string; password: string }
      | {
          apiKey: {
            /** sessionid cookie value */
            sessionAuth: string;
            /** csrftoken cookie value */
            csrfAuth: string;
            /** Token [auth key value] */
            tokenAuth: string;
          };
        }
    )
  ) {
    this.url = `${trimEnd(config.host || 'http://localhost', '/')}:${config.port || 8080}`;
    if ('username' in config) {
      this.username = config.username;
      this.password = config.password;
    } else {
      this.cookies = {
        sessionid: config.apiKey.sessionAuth,
        csrftoken: config.apiKey.csrfAuth,
      };
      this.authKey = config.apiKey.tokenAuth;
    }
  }
}
