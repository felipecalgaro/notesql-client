import { gql } from "@apollo/client";
import { IUser } from "../types/user";

export interface GetUserAndNotesResponseData {
  getUserAndNotes: Pick<IUser, "name" | "email" | "notes" | "avatar_url">;
}

export const GET_USER_AND_NOTES = gql`
  query GetUserAndNotes($id: ID!) {
    getUserAndNotes(id: $id) {
      name
      email
      avatar_url
      notes {
        id
        title
        body
        priority
        status
        deleted_at
      }
    }
  }
`;
