import { gql } from "@apollo/client";

export const PRIORITIZE_NOTE = gql`
  mutation PrioritizeNote($id: ID!, $priority: Boolean!) {
    prioritizeNote(id: $id, priority: $priority) {
      id
      priority
    }
  }
`;
