type User = {
  name: string;
  email: string;
  password: string;
  canAddCategory: boolean;
  canAddProduct: boolean;
  isAdmin: boolean;
};

export default User;