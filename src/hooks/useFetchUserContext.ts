import { useContext } from "react";
import { UserContext } from "../App";
import { userContextOnLocalStorage } from "../utils/userContextOnLocalStorage";

export function useFetchUserContext() {
  const { user } = useContext(UserContext);

  const isContextValid =
    Object.keys(user).includes("name") &&
    Object.keys(user).includes("avatar_url");

  const { name, avatar_url } = userContextOnLocalStorage.get();

  return isContextValid
    ? user
    : {
        name,
        avatar_url,
        isAuthenticated: name && avatar_url,
      };
}
