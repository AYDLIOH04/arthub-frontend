export interface IAuth {
  email: string | null;
  access_token: string | null;
  refresh_token: string | null;
}

export interface IRefresh {
  email: string | null;
  access_token: string | null;
}
