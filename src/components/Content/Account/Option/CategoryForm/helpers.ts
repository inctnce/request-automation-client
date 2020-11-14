export default function postCategory(
  user_id: string,
  category_name: string,
  post: (user_id: string, name: string) => void
) {
  if (
    user_id.trim() === "" ||
    user_id === undefined ||
    category_name.trim() === "" ||
    category_name === undefined
  ) {
    return "error";
  }
  post(user_id, category_name.trim());
}
