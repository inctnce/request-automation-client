import Product from "../../../types/Product";
import Specification from "../../../types/Specification";

export function parseSpecs(parse: "specs" | "values", specs: Specification[]): string[] {
  const result: string[] = [];
  if (parse === "specs") {
    specs.forEach((spec: Specification) => {
      result.push(spec.spec);
    });
  } else {
    specs.forEach((spec: Specification) => {
      result.push(spec.setting);
    });
  }
  return result;
}

export default function submit(
  product: Product,
  request: "post" | "put" | string,
  post: (product: Product) => void,
  put: (product: Product) => void,
  creator_id?: string
) {
  if (product.name.trim() === "" || product.name === undefined) {
    console.log("name error");
    return "error";
  }
  if (product.specs.length !== product.settings.length) {
    console.log("specs error");
    return "error";
  }
  if (product.price.trim() === "" || product.price === undefined) {
    console.log("price error");
    return "error";
  }
  if (product.category_id === "" || product.category_id === undefined) {
    console.log("category_id error");
    return "error";
  }
  if (creator_id === "" || creator_id === undefined) {
    console.log("creator_id error");
    return "error";
  }

  switch (request) {
    case "post":
      product.creator_id = creator_id!;
      post(product);
      return;
    case "put":
      put(product);
      return;
  }
}
