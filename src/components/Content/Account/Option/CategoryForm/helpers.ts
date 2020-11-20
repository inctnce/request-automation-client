import Alert from "../../../../../types/Alert";

export default function postCategory(
  user_id: string,
  category_name: string,
  post: (user_id: string, name: string) => void,
  alert: (alert: Alert) => void
) {
  if (
    user_id.trim() === "" ||
    user_id === undefined ||
    category_name.trim() === "" ||
    category_name === undefined
  ) {
    alert({ message: "Ошибка добавления категории", severity: "error" });
    return "error";
  }
  alert({ message: "Категория успешно добавлена", severity: "success" });
  post(user_id, category_name.trim());
}
