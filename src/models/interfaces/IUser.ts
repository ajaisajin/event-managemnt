import { UserRoles } from "../enums/UserRoles.enum.ts";

export interface IUser {
  user_id: number;
  user_name: string;
  email: string;
  password: string;
  phone: string;
  role: UserRoles;
}
