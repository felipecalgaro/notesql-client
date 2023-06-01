import { IUser } from "./user";

export enum Status {
  FINISHED = "FINISHED",
  UNFINISHED = "UNFINISHED",
}

export interface INote {
  id: number;
  title: string;
  body: string;
  priority: boolean;
  status: Status;
  author: IUser;
  created_at: Date;
  deleted_at?: Date;
}
