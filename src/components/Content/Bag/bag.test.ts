import Demand from "../../../types/Demand";
import Product from "../../../types/Product";
import postDemand from "./helpers";

function funcAlias() {
  return;
}

const product1: Product = {
  id: "some id",
  name: "some name",
  specs: ["1", "2"],
  values: ["2", "4"],
  price: "1234",
  extra_info: "",
  category_id: "some id",
  creator_id: "some id",
};

const product2: Product = {
  id: "some id",
  name: "another name",
  specs: ["1", "2"],
  values: ["2", "4"],
  price: "1234",
  extra_info: "",
  category_id: "some id",
  creator_id: "some id",
};

const demand: Demand = {
  id: "some id",
  name: "some name",
  products: [product1, product2],
  total_cost: 123,
  deadlines: "some time intervals",
  address: "some address",
  financing_source: "some sponsor",
  contact_person: "some person",
  responsible_person: "some person",
  creator_id: "some id",
};

const invalid_string_1 = "";
const invalid_string_2 = " ";

const invalid_number = 0;

test("adding demand with invalid name", () => {
  expect(postDemand({ ...demand, name: invalid_string_1 }, funcAlias)).toBe(
    "error"
  );
  expect(postDemand({ ...demand, name: invalid_string_2 }, funcAlias)).toBe(
    "error"
  );
});

test("adding demand with invalid products list", () => {
  expect(postDemand({ ...demand, products: [] }, funcAlias)).toBe("error");
});

test("adding demand with invalid total cost", () => {
  expect(postDemand({ ...demand, total_cost: invalid_number }, funcAlias)).toBe(
    "error"
  );
});

test("adding demand with invalid deadlines", () => {
  expect(postDemand({ ...demand, address: invalid_string_1 }, funcAlias)).toBe(
    "error"
  );
  expect(postDemand({ ...demand, address: invalid_string_2 }, funcAlias)).toBe(
    "error"
  );
});

test("adding demand with invalid financing source", () => {
  expect(
    postDemand({ ...demand, financing_source: invalid_string_1 }, funcAlias)
  ).toBe("error");
  expect(
    postDemand({ ...demand, financing_source: invalid_string_2 }, funcAlias)
  ).toBe("error");
});

test("adding demand with invalid contact person", () => {
  expect(
    postDemand({ ...demand, contact_person: invalid_string_1 }, funcAlias)
  ).toBe("error");
  expect(
    postDemand({ ...demand, contact_person: invalid_string_2 }, funcAlias)
  ).toBe("error");
});

test("adding demand with invalid responsible person", () => {
  expect(
    postDemand({ ...demand, responsible_person: invalid_string_1 }, funcAlias)
  ).toBe("error");
  expect(
    postDemand({ ...demand, responsible_person: invalid_string_2 }, funcAlias)
  ).toBe("error");
});

test("adding demand with invalid financing source", () => {
  expect(
    postDemand({ ...demand, creator_id: invalid_string_1 }, funcAlias)
  ).toBe("error");
  expect(
    postDemand({ ...demand, creator_id: invalid_string_2 }, funcAlias)
  ).toBe("error");
});
