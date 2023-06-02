import { gql } from "@apollo/client";

export const WRITE_NOTE = gql`
  mutation WriteNote($note: NoteInput!) {
    writeNote(note: $note) {
      id
      title
      body
    }
  }
`;
