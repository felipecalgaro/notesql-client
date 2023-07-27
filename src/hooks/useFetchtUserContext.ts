import { useContext } from "react";
import { UserContext } from "../App";

export function useFetchUserContext() {
  const { user } = useContext(UserContext);

  return Object.values(user).length
    ? user
    : {
        name: localStorage.getItem("name") || undefined,
        avatar_url: localStorage.getItem("avatar_url") || undefined,
      };
}
