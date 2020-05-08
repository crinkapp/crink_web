export interface SignUp {
  content: string;
  error: string | null;
}

export interface NewUser {
  username: string;
  email: string;
  password: string;
}
