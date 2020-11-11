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
    console.log(data);
    yield put(catalogAC.setProducts(data));
  }
}

function* watchGetProducts() {
  yield takeEvery(ACTION.GET_PRODUCTS, workerGetProducts);
}

export default watchGetProducts;
