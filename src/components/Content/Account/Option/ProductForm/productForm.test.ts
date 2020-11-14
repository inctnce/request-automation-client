import postProduct from "./helpers";

function funcAlias() {
  return;
}

const name: string = "some name";
const specs: string[] = ["1", "2", "3"];
const values: string[] = ["1", "2", "3"];
const price: string = "some price";
const extra_info: string = "";
const creator_id: string = "some id";
const category_id: string = "some id";

test("add product with invalid name", () => {
  const invalid_name_1: string = "";
  const invalid_name_2: string = " ";

  expect(
    postProduct(
      invalid_name_1,
      specs,
      values,
      price,
      extra_info,
      creator_id,
      category_id,
      funcAlias
    )
  ).toBe("error");

  expect(
    postProduct(
      invalid_name_2,
      specs,
      values,
      price,
      extra_info,
      creator_id,
      category_id,
      funcAlias
    )
  ).toBe("error");
});

test("add product with invalid specs and values", () => {
  const invalid_specs: string[] = ["1", "2"];
  const invalid_values: string[] = ["1"];

  const invalid_specs_1: string[] = ["invalid"];
  const invalid_values_1: string[] = ["invalid", "values"];

  expect(
    postProduct(
      name,
      invalid_specs,
      invalid_values,
      price,
      extra_info,
      creator_id,
      category_id,
      funcAlias
    )
  ).toBe("error");

  expect(
    postProduct(
      name,
      invalid_specs_1,
      invalid_values_1,
      price,
      extra_info,
      creator_id,
      category_id,
      funcAlias
    )
  ).toBe("error");
});

test("add product with invalid price", () => {
  const invalid_price_1: string = "";
  const invalid_price_2: string = " ";

  expect(
    postProduct(
      name,
      specs,
      values,
      invalid_price_1,
      extra_info,
      creator_id,
      category_id,
      funcAlias
    )
  ).toBe("error");

  expect(
    postProduct(
      name,
      specs,
      values,
      invalid_price_2,
      extra_info,
      creator_id,
      category_id,
      funcAlias
    )
  ).toBe("error");
});
