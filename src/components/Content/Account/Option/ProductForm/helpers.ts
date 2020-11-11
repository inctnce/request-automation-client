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
