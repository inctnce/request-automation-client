import Alert from "../../../types/Alert";
import Demand from "../../../types/Demand";

export default function postDemand(demand: Demand, post: (demand: Demand) => void, alert: (alert: Alert) => void) {
  if (demand.name.trim() === "" || demand.name === undefined) {
    alert({ message: "Не указано имя заявки", severity: "error" });
    return "error";
  }
  if (demand.products!.length === 0) {
    alert({ message: "Товары не добавлены в корзину", severity: "error" });
    return "error";
  }
  if (demand.total_cost!.trim() === "" || demand.total_cost === undefined) {
    alert({ message: "Не указана максимальная стоимость", severity: "error" });
    return "error";
  }
  if (demand.deadlines.trim() === "" || demand.deadlines === undefined) {
    alert({ message: "Не указаны сроки", severity: "error" });
    return "error";
  }
  if (demand.address.trim() === "" || demand.address === undefined) {
    alert({ message: "Не указан адрес", severity: "error" });
    return "error";
  }
  if (demand.financing_source.trim() === "" || demand.financing_source === undefined) {
    alert({ message: "Не указан источник финансирования", severity: "error" });
    return "error";
  }
  if (demand.contact_person.trim() === "" || demand.contact_person === undefined) {
    alert({ message: "Не получатель", severity: "error" });
    return "error";
  }
  if (demand.responsible_person.trim() === "" || demand.responsible_person === undefined) {
    alert({ message: "Не указано материально ответственное лицо", severity: "error" });
    return "error";
  }
  if (demand.creator_id!.trim() === "" || demand.creator_id === undefined) {
    alert({ message: "Ошибка. Обновите страницу", severity: "error" });
    return "error";
  }
  post(demand);
  alert({ message: "Заявка отправлена", severity: "success" });
}
