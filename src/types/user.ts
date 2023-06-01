import { INote } from "./note";

export interface IUser {
  id: number;
  name: string;
  password: string;
  email: string;
  avatar_url: string;
  notes?: INote[];
  created_at: Date;
}
