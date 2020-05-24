export interface NewUser {
  username: string;
  email: string;
  password: string;
}

export interface User {
    id: number;
    email: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    creationDate: number;

    birthday?: number;
    gender?: 'male' | 'female';
    hashtags?: string[];

    subscriber?: [];
    subscription?: [];
    certificated?: boolean;
}
