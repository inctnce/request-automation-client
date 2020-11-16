import Demand from "../../../types/Demand";

export default function postDemand(
  demand: Demand,
  post: (demand: Demand) => void
) {
  // if (demand.name.trim() === "" || name === undefined) {
  //   return "error";
  // }
  if (demand.products.length === 0) {
    return "error";
  }
  if (demand.total_cost === 0 || demand.total_cost === undefined) {
    return "error";
  }
  if (demand.deadlines.trim() === "" || demand.deadlines === undefined) {
    return "error";
  }
  if (demand.address.trim() === "" || demand.address === undefined) {
    return "error";
  }
  if (
    demand.financing_source.trim() === "" ||
    demand.financing_source === undefined
  ) {
    return "error";
  }
  if (
    demand.contact_person.trim() === "" ||
    demand.contact_person === undefined
  ) {
    return "error";
  }
  if (
    demand.responsible_person.trim() === "" ||
    demand.responsible_person === undefined
  ) {
    return "error";
  }
  if (demand.creator_id.trim() === "" || demand.creator_id === undefined) {
    return "error";
  }

  post(demand);
}
