import { gql } from "@apollo/client";

export const DELETE_NOTE = gql`
  mutation DeleteNote($id: ID!) {
    deleteNote(id: $id)
  }
`;
