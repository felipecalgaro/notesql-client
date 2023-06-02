import { gql } from "@apollo/client";
import { INote } from "../types/note";

export interface GetNotesByAuthorResponseData {
  getNotesByAuthor: INote[];
}

export const GET_NOTES_BY_AUTHOR = gql`
  query GetNotesByAuthor($authorId: ID!) {
    getNotesByAuthor(authorId: $authorId) {
      id
      title
      body
      priority
      status
    }
  }
`;
