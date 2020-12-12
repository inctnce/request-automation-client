import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import userLS from "../../../localStorage/user";
import Action from "../../../types/Action";
import Product from "../../../types/Product";
import ACTION from "../../ACTION";
import appAC from "../../actionCreators/app";
import catalogAC from "../../actionCreators/catalog";

async function postProduct(product: Product) {
  return await Axios.post("https://request-automation-api.herokuapp.com/products/post", product, {
    headers: {
      Authorization: "Bearer " + userLS.get()?.accessToken, //the token is a variable which holds the token
    },
  })
    .then((response) => {
      if (response.status === 201) {
        return response.data;
      } else {
        return "error";
      }
    })
    .catch((err) => {
      console.log(err);
      return;
    });
}

function* workerPostProduct(action: Action) {
  const data = yield call(postProduct, action.payload);

  if (data !== undefined) {
    console.log(data);
    yield put(
      appAC.setAlert({
        message: "Товар добавлен",
        severity: "success",
      })
    );
    yield put(catalogAC.setProduct(data));
  } else {
    yield put(
      appAC.setAlert({
        message: "Ошибка добавления товара",
        severity: "error",
      })
    );
  }
}

function* watchPostProduct() {
  yield takeEvery(ACTION.POST_PRODUCT, workerPostProduct);
}

export default watchPostProduct;
