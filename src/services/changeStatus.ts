import { gql } from "@apollo/client";

export const UPDATE_STATUS = gql`
  mutation UpdateStatus($id: ID!, $status: Status!) {
    updateStatus(id: $id, status: $status) {
      id
      status
    }
  }
`;
