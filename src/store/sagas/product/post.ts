import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import Action from "../../../types/Action";
import ACTION from "../../ACTION";
import catalogAC from "../../actionCreators/catalog";

async function postCategory(
  name: string,
  specs: string[],
  values: string[],
  price: string,
  extra_info: string,
  creator_id: string,
  category_id: string
) {
  const data = {
    name: name,
    specs: specs.join(),
    values: values.join(),
    price: price,
    extra_info: extra_info,
    creator_id: creator_id,
    category_id: category_id,
  };

  return await Axios.post(
    "https://request-automation-api.herokuapp.com/products/post",
    data
  )
    .then((response) => {
      if (response.status === 201) {
        return response.data;
      } else {
        return "error";
      }
    })
    .catch((err) => {
      alert(err.response.data);
    });
}

function* workerPostProduct(action: Action) {
  const data = yield call(
    postCategory,
    action.payload.name,
    action.payload.specs,
    action.payload.values,
    action.payload.price,
    action.payload.extra_info,
    action.payload.creator_id,
    action.payload.category_id
  );

  if (data !== undefined) {
    console.log(data);
    yield put(catalogAC.setProduct(data));
  }
}

function* watchPostProduct() {
  yield takeEvery(ACTION.POST_PRODUCT, workerPostProduct);
}

export default watchPostProduct;
