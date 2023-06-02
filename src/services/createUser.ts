import { gql } from "@apollo/client";
import { IUser } from "../types/user";

export interface CreateUserResponseData {
  createUser: {
    token: string;
    user: IUser;
  };
}

export const CREATE_USER = gql`
  mutation CreateUser($user: UserInput!) {
    createUser(user: $user) {
      token
      user {
        id
        name
      }
    }
  }
`;
