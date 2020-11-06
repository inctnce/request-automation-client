import User from "../types/User";

const userKey: string = "user";

function set(user: User): void {
  localStorage.setItem(userKey, JSON.stringify(user));
}

function get(): User | undefined {
  const user: User = JSON.parse(localStorage.getItem(userKey)!);

  if (user) {
    return user;
  }
  return undefined;
}

function remove(): void {
  return localStorage.removeItem(userKey);
}

const userLS = {
  set: set,
  get: get,
  remove: remove,
};

export default userLS;
