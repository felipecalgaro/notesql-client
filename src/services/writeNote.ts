import { gql } from "@apollo/client";
import { INote } from "../types/note";

export interface WriteNoteResponseData {
  writeNote: INote;
}

export const WRITE_NOTE = gql`
  mutation WriteNote($note: NoteInput!) {
    writeNote(note: $note) {
      id
      title
      body
      author {
        name
      }
    }
  }
`;
