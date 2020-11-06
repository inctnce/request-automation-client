const authKey: string = "didSetUser";

function set(): void {
  localStorage.setItem(authKey, "true");
}

function get(): boolean {
  const isAuth: boolean = JSON.parse(localStorage.getItem(authKey)!);

  return isAuth;
}

function remove(): void {
  return localStorage.removeItem(authKey);
}

const didSetUserLS = {
  set: set,
  get: get,
  remove: remove,
};

export default didSetUserLS;
