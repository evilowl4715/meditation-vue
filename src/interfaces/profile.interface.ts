export interface Data {
  user: Profile;
}

export interface Profile {
  email: string;
  id: number;
  last_login_at: string;
  username: string;
}
