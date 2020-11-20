import Action from "../../types/Action";
import BagPage from "../../types/pages/BagPage";
import Product from "../../types/Product";
import ACTION from "../ACTION";
import initialState from "../states/bag";

function bag(state: BagPage = initialState, action: Action): BagPage {
  switch (action.type) {
    case ACTION.ADD_TO_BAG:
      let didFind: boolean = false;
      state.demand.products.forEach((product: Product, i: number) => {
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
          products: didFind
            ? [...state.demand.products]
            : [action.payload, ...state.demand.products],
        },
      };
    case ACTION.REMOVE_FROM_BAG:
      return {
        demand: {
          ...state.demand,
          products: [
            ...state.demand.products.filter((product: Product) => {
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

    default:
      break;
  }

  return state;
}

export default bag;
