export const userContextOnLocalStorage = {
  set(name: string, avatar_url: string) {
    localStorage.setItem("name", name);
    localStorage.setItem("avatar_url", avatar_url);
  },

  remove() {
    localStorage.removeItem("name");
    localStorage.removeItem("avatar_url");
  },
};
