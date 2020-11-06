import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import ACTION from "../../ACTION";
import catalogAC from "../../actionCreators/catalog";

async function getCategories() {
  return await Axios.get("https://request-automation-api.herokuapp.com/categories/get")
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

function* workerGetCategories() {
  const data = yield call(getCategories);

  if (data !== undefined) {
    console.log(data);
    yield put(catalogAC.setCategories(data));
  }
}

function* watchGetCategories() {
  yield takeEvery(ACTION.GET_CATEGORIES, workerGetCategories);
}

export default watchGetCategories;
