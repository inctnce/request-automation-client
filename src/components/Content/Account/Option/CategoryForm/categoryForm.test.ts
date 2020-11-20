import Alert from "../../../../../types/Alert";
import postCategory from "./helpers";

function funcAlias(): void {
  return;
}

function alert(alert: Alert) {}

test("adding category with invalid id", () => {
  const invalid_id: string = "";
  const invalid_id_1: string = " ";

  const category_name: string = "category";

  expect(postCategory(invalid_id, category_name, funcAlias, alert)).toBe(
    "error"
  );
  expect(postCategory(invalid_id_1, category_name, funcAlias, alert)).toBe(
    "error"
  );
});

test("adding category with invalid name", () => {
  const id = "some id";
  const invalid_category_name_1 = "";
  const invalid_category_name_2 = " ";

  expect(postCategory(id, invalid_category_name_1, funcAlias, alert)).toBe(
    "error"
  );
  expect(postCategory(id, invalid_category_name_2, funcAlias, alert)).toBe(
    "error"
  );
});
