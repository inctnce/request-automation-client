import Specification from "../../../../../types/Specification";

export function parseSpecs(
  parse: "specs" | "values",
  specs: Specification[]
): string[] {
  const result: string[] = [];
  if (parse === "specs") {
    specs.forEach((spec: Specification) => {
      result.push(spec.spec);
    });
  } else {
    specs.forEach((spec: Specification) => {
      result.push(spec.value);
    });
  }
  return result;
}

export default function postProduct(
  name: string,
  specs: string[],
  values: string[],
  price: string,
  extra_info: string,
  creator_id: string,
  category_id: string,
  post: (
    name: string,
    specs: string[],
    values: string[],
    price: string,
    extra_info: string,
    creator_id: string,
    category_id: string
  ) => void
) {
  if (name.trim() === "" || name === undefined) {
    return "error";
  }
  if (specs.length !== values.length) {
    return "error";
  }
  if (price.trim() === "" || price === undefined) {
    return "error";
  }
  if (category_id === "" || category_id === undefined) {
    return "error";
  }
  if (creator_id === "" || creator_id === undefined) {
    return "error";
  }
  post(name, specs, values, price, extra_info, creator_id, category_id);
}
