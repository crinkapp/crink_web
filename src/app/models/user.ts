export interface NewUser {
  username_user: string;
  gender_user: 'Man' | 'Woman';
  email_user: string;
  password_user: string;
}

export interface User {
    id: number;
    username_user: string;
    gender_user: 'Man' | 'Woman';
    email_user: string;
    password_user: string;
    createdAt: number;
    updatedAt: number;

    first_name_user?: string;
    last_name_user?: string;
    birthday_user?: number;
    hashtags?: string[];

    diagnosticId?: number;
    settingId?: number;
    path_profil_picture_user?: string;

    subscriber?: [];
    subscription?: [];
    certificated?: boolean;
}

export interface Sign {
  content: string;
  error: string | null;
}
