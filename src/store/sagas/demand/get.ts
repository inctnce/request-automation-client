import Axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import Action from "../../../types/Action";
import ACTION from "../../ACTION";
import appAC from "../../actionCreators/app";
import catalogAC from "../../actionCreators/catalog";

function formulateRequest(id: string): string {
  return id
    ? `https://request-automation-api.herokuapp.com/demands/get/${id}`
    : `https://request-automation-api.herokuapp.com/demands/get/`;
}

async function getDemands(id: string) {
  return await Axios.get(formulateRequest(id))
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      } else {
        return "error";
      }
    })
    .catch(() => {
      return;
    });
}

function* workerGetDemands(action: Action) {
  const data = yield call(getDemands, action.payload);

  for (let i = 0; i < data.length; i++) {
    data[i].products = JSON.parse(data[i].products);
  }

  if (data !== undefined) {
    yield put(catalogAC.setDemands(data));
    return;
  }
  yield put(appAC.setAlert({ message: "Ошибка получения заявок", severity: "error" }));
  return;
}

function* watchGetDemands() {
  yield takeLatest(ACTION.GET_DEMANDS, workerGetDemands);
}

export default watchGetDemands;
