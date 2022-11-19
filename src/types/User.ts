export interface User {
  email: string | null;
  token: string | null;
}

export interface NewUser {
  email: string;
  name?: string;
  address?: string;
  token?: string;
}
