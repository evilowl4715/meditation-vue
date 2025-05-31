import type { User } from "./user.interface";

export interface LoginResponse {
  data: {
    token: string;
    user: User;
  };
  message: string;
  status: string;
}
