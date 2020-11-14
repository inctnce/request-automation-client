import Action from "../../types/Action";
import CatalogPage from "../../types/pages/CatalogPage";
import ACTION from "../ACTION";
import catalog from "./catalog";

const state: CatalogPage = {
  didGetCategories: true,
  categories: [
    {
      id: "123",
      name: "Category",
      creator_id: "qwerty123",
      creation_date: new Date(),
    },
  ],
  didGetProducts: true,
  products: [
    {
      id: "123",
      name: "Product",
      specs: [],
      values: [],
      price: "",
      extra_info: "",
      category_id: "123",
      creator_id: "123",
      creation_date: new Date(),
    },
  ],
};

test("adding same category", () => {
  const action: Action = {
    type: ACTION.SET_CATEGORY,
    payload: {
      id: "1",
      name: "Category",
      creator_id: "qwerty123",
      creation_date: new Date(),
    },
  };

  const state: CatalogPage = {
    didGetCategories: true,
    categories: [
      {
        id: "123",
        name: "Category",
        creator_id: "qwerty123",
        creation_date: new Date(),
      },
    ],
    didGetProducts: true,
    products: [],
  };

  catalog(state, action);

  const new_state = catalog(state, action);

  expect(new_state.categories.length).toBe(1);
});

test("adding empty category name", () => {
  const action: Action = {
    type: ACTION.SET_CATEGORY,
    payload: {
      id: "1",
      name: "",
      creator_id: "qwerty123",
      creation_date: new Date(),
    },
  };

  catalog(state, action);

  const new_state = catalog(state, action);

  expect(new_state.categories.length).toBe(1);
});

test("adding product with same name", () => {
  const action: Action = {
    type: ACTION.SET_PRODUCT,
    payload: {
      id: "1",
      name: "Product",
      creator_id: "qwerty123",
      creation_date: new Date(),
    },
  };

  const new_state = catalog(state, action);

  expect(new_state.products.length).toBe(1);
});

test("adding product with empty name", () => {
  const action: Action = {
    type: ACTION.SET_PRODUCT,
    payload: {
      id: "1",
      name: "",
      creator_id: "qwerty123",
      creation_date: new Date(),
    },
  };

  const new_state = catalog(state, action);

  expect(new_state.products.length).toBe(1);
});
