import { gql } from "@apollo/client";
import { IUser } from "../types/user";

export interface AuthenticateUserResponseData {
  authenticateUser: {
    token: string;
    user: IUser;
  };
}

export const AUTHENTICATE_USER = gql`
  query AuthenticateUser($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      token
      user {
        id
        name
        email
        password
        avatar_url
      }
    }
  }
`;
