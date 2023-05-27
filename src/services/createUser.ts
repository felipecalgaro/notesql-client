import { gql } from "@apollo/client";
import { User } from "../types/user";

export interface CreateUserResponseData {
  createUser: {
    token: string;
    user: User;
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
