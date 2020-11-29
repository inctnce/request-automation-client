import Action from "../../types/Action";
import BagPage from "../../types/pages/BagPage";
import Product from "../../types/Product";
import ACTION from "../ACTION";
import initialState from "../states/bag";

function bag(state: BagPage = initialState, action: Action): BagPage {
  switch (action.type) {
    case ACTION.ADD_TO_BAG:
      let didFind: boolean = false;
      state.demand.products!.forEach((product: Product, i: number) => {
        if (product.name === action.payload.name) {
          product.quantity!++;
          didFind = true;
          return;
        }
      });

      return {
        ...state,
        demand: {
          ...state.demand,
          products: didFind ? [...state.demand.products!] : [action.payload, ...state.demand.products!],
        },
      };
    case ACTION.REMOVE_FROM_BAG:
      return {
        demand: {
          ...state.demand,
          products: [
            ...state.demand.products!.filter((product: Product) => {
              if (product.name === action.payload.name) {
                if (action.payload.quantity > 1) {
                  product.quantity!--;
                  return product;
                }
              }
              return product.name !== action.payload.name;
            }),
          ],
        },
      };
    case ACTION.UPD_DEMAND_FORM:
      return {
        ...state,
        demand: {
          products: [...state.demand.products!],
          name: action.payload.key === 0 ? action.payload.value : state.demand.name,
          total_cost: action.payload.key === 1 ? action.payload.value : state.demand.total_cost,
          deadlines: action.payload.key === 2 ? action.payload.value : state.demand.deadlines,
          address: action.payload.key === 3 ? action.payload.value : state.demand.address,
          financing_source: action.payload.key === 4 ? action.payload.value : state.demand.financing_source,
          contact_person: action.payload.key === 5 ? action.payload.value : state.demand.contact_person,
          responsible_person: action.payload.key === 6 ? action.payload.value : state.demand.responsible_person,
        },
      };

    default:
      break;
  }

  return state;
}

export default bag;
