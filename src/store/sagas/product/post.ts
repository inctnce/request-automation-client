import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import userLS from "../../../localStorage/user";
import Action from "../../../types/Action";
import ACTION from "../../ACTION";
import appAC from "../../actionCreators/app";
import catalogAC from "../../actionCreators/catalog";

async function postProduct(
  name: string,
  specs: string[],
  settings: string[],
  price: string,
  extra_info: string,
  creator_id: string,
  category_id: string
) {
  const data = {
    name: name,
    specs: specs.join(),
    settings: settings.join(),
    price: price,
    extra_info: extra_info,
    creator_id: creator_id,
    category_id: category_id,
  };

  return await Axios.post("https://request-automation-api.herokuapp.com/products/post", data, {
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
  const data = yield call(
    postProduct,
    action.payload.name,
    action.payload.specs,
    action.payload.settings,
    action.payload.price,
    action.payload.extra_info,
    action.payload.creator_id,
    action.payload.category_id
  );

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
