import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import ACTION from "../../ACTION";
import catalogAC from "../../actionCreators/catalog";

async function getProducts() {
  return await Axios.get(
    "https://request-automation-api.herokuapp.com/products/get"
  )
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

function* workerGetProducts() {
  const data = yield call(getProducts);

  if (data !== undefined) {
    for (let i = 0; i < data.length; i++) {
      data[i].specs = data[i].specs.split(",").map(String);
      data[i].values = data[i].values.split(",").map(String);
    }

    yield put(catalogAC.setProducts(data));
  }
}

function* watchGetProducts() {
  yield takeEvery(ACTION.GET_PRODUCTS, workerGetProducts);
}

export default watchGetProducts;
