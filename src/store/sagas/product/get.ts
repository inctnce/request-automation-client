import Axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import userLS from "../../../localStorage/user";
import Action from "../../../types/Action";
import ACTION from "../../ACTION";
import catalogAC from "../../actionCreators/catalog";

function formulateRequest(key?: string, id?: string): string {
  if (key) {
    return `https://request-automation-api.herokuapp.com/products/get/${key}/${id}`;
  }
  return `https://request-automation-api.herokuapp.com/products/get`;
}

async function getProducts(key?: string, id?: string) {
  return await Axios.get(formulateRequest(key, id), {
    headers: {
      Authorization: "Bearer " + userLS.get()?.accessToken, //the token is a variable which holds the token
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      } else {
        return "error";
      }
    })
    .catch((err) => {
      alert(err.response.data);
    });
}

function* workerGetProducts(action: Action) {
  const data = yield call(getProducts, action.payload.key, action.payload.id);

  console.log(data);

  if (data !== undefined) {
    for (let i = 0; i < data.length; i++) {
      data[i].specs = data[i].specs.split(",").map(String);
      data[i].settings = data[i].settings.split(",").map(String);
    }

    switch (action.payload.key) {
      case "category":
        yield put(catalogAC.setProducts(data));
        return;
      case "user":
        yield put(catalogAC.setProducts(data, true));
        return;
    }
  }
}

function* watchGetProducts() {
  yield takeLatest(ACTION.GET_PRODUCTS, workerGetProducts);
}

export default watchGetProducts;
